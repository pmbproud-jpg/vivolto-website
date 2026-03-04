"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function HeroWeather() {
  const [state, setState] = useState<{
    tempC: number;
    code: number;
    windKmh: number;
    ok: boolean;
  } | null>(null);

  // Köln fallback (NRW)
  const FALLBACK = { lat: 50.9375, lon: 6.9603 };

  useEffect(() => {
    let cancelled = false;

    const fetchWeather = async (lat: number, lon: number) => {
      const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${lat}&longitude=${lon}` +
        `&current=temperature_2m,weather_code,wind_speed_10m` +
        `&wind_speed_unit=kmh`;

      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();

      const tempC = Math.round(data?.current?.temperature_2m ?? 0);
      const code = Number(data?.current?.weather_code ?? 0);
      const windKmh = Math.round(data?.current?.wind_speed_10m ?? 0);

      if (!cancelled) setState({ tempC, code, windKmh, ok: true });
    };

    const run = () => {
      if (!navigator.geolocation) {
        fetchWeather(FALLBACK.lat, FALLBACK.lon).catch(() => {
          if (!cancelled) setState({ tempC: 0, code: 0, windKmh: 0, ok: false });
        });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude).catch(() => {
            fetchWeather(FALLBACK.lat, FALLBACK.lon).catch(() => {
              if (!cancelled) setState({ tempC: 0, code: 0, windKmh: 0, ok: false });
            });
          });
        },
        () => {
          fetchWeather(FALLBACK.lat, FALLBACK.lon).catch(() => {
            if (!cancelled) setState({ tempC: 0, code: 0, windKmh: 0, ok: false });
          });
        },
        { enableHighAccuracy: false, timeout: 4000, maximumAge: 10 * 60 * 1000 }
      );
    };

    run();
    const t = window.setInterval(run, 15 * 60 * 1000);

    return () => {
      cancelled = true;
      window.clearInterval(t);
    };
  }, []);

  const label = useMemo(() => {
    if (!state?.ok) return "Wetter";
    return weatherLabel(state.code, state.windKmh);
  }, [state]);

  const kind = useMemo(() => {
    if (!state?.ok) return "unknown" as const;
    return weatherKind(state.code, state.windKmh);
  }, [state]);

  return (
    <div className="pointer-events-none absolute right-5 top-5 z-20 select-none">
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "rgb(var(--text) / 0.92)",
        }}
      >

        <div className="h-10 w-10">
          <WeatherIcon kind={kind} />
        </div>

        <div className="leading-tight">
          <div className="text-sm font-semibold">
            {state?.ok ? `${state.tempC}°C` : "—"}
          </div>
          <div
            className="text-xs"
            style={{ color: "rgb(var(--text) / var(--text-muted-a))" }}
          >
            {label}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floaty {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes rainDrop {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes windWave {
          0% { transform: translateX(0); opacity: 0.4; }
          50% { opacity: 0.9; }
          100% { transform: translateX(10px); opacity: 0.4; }
        }
        .vw-float { animation: floaty 2.2s ease-in-out infinite; }
        .vw-spin { animation: spinSlow 6s linear infinite; transform-origin: 50% 50%; }
        .vw-rain1 { animation: rainDrop 1.0s linear infinite; }
        .vw-rain2 { animation: rainDrop 1.0s linear infinite 0.25s; }
        .vw-rain3 { animation: rainDrop 1.0s linear infinite 0.5s; }
        .vw-wind { animation: windWave 1.1s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function weatherKind(code: number, windKmh: number) {
  if (windKmh >= 30) return "wind" as const;
  if (code === 0) return "sun" as const;
  if ([1, 2, 3].includes(code)) return "cloud" as const;
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rain" as const;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow" as const;
  if ([95, 96, 99].includes(code)) return "storm" as const;
  return "cloud" as const;
}

function weatherLabel(code: number, windKmh: number) {
  const kind = weatherKind(code, windKmh);
  if (kind === "wind") return `Wind ${windKmh} km/h`;
  if (kind === "sun") return "Sonnig";
  if (kind === "cloud") return "Bewölkt";
  if (kind === "rain") return "Regen";
  if (kind === "snow") return "Schnee";
  if (kind === "storm") return "Gewitter";
  return "Wetter";
}

function WeatherIcon({
  kind,
}: {
  kind: "sun" | "cloud" | "rain" | "wind" | "snow" | "storm" | "unknown";
}) {
  if (kind === "sun") {
    return (
      <svg viewBox="0 0 64 64" className="vw-float" fill="none">
        <circle
          cx="32"
          cy="32"
          r="12"
          stroke="currentColor"
          strokeWidth="3"
          className="vw-spin"
        />
        {[...Array(8)].map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = 32 + Math.cos(a) * 18;
          const y1 = 32 + Math.sin(a) * 18;
          const x2 = 32 + Math.cos(a) * 26;
          const y2 = 32 + Math.sin(a) * 26;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  if (kind === "cloud") {
    return (
      <svg viewBox="0 0 64 64" className="vw-float" fill="none">
        <path
          d="M22 38h26a10 10 0 0 0 0-20 14 14 0 0 0-27 4A9 9 0 0 0 22 38Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "rain") {
    return (
      <svg viewBox="0 0 64 64" className="vw-float" fill="none">
        <path
          d="M22 36h22a10 10 0 0 0 0-20 14 14 0 0 0-27 4A9 9 0 0 0 22 36Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line
          x1="26"
          y1="40"
          x2="26"
          y2="54"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="vw-rain1"
        />
        <line
          x1="34"
          y1="40"
          x2="34"
          y2="54"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="vw-rain2"
        />
        <line
          x1="42"
          y1="40"
          x2="42"
          y2="54"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="vw-rain3"
        />
      </svg>
    );
  }

  if (kind === "wind") {
    return (
      <svg viewBox="0 0 64 64" className="vw-float" fill="none">
        <path
          d="M10 28h26c6 0 9-3 9-7 0-4-3-7-7-7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="vw-wind"
        />
        <path
          d="M10 36h34c6 0 10 3 10 8 0 5-4 8-9 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="vw-wind"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="vw-float" fill="none">
      <path
        d="M22 38h26a10 10 0 0 0 0-20 14 14 0 0 0-27 4A9 9 0 0 0 22 38Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
