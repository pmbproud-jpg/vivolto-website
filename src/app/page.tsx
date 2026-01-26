"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

export default function Home() {
  const nav = [
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Elektrotechnik", href: "#elektrotechnik" },
    { label: "Photovoltaik", href: "#photovoltaik" },
    { label: "KNX Systeme", href: "#knx" },
    { label: "Gebäudetechnik", href: "#gebaeudetechnik" },
    { label: "Nachhaltigkeit", href: "#nachhaltigkeit" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("#hero");
  const [theme, setTheme] = useState<"vivolto" | "gradient-red" | "light-fade">(
    () => {
      if (typeof window === "undefined") return "vivolto";
      return (localStorage.getItem("vivolto_theme") as any) || "vivolto";
    }
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("vivolto_theme", theme);
  }, [theme]);

  const navWithHero = useMemo(
    () => [{ label: "Start", href: "#hero" }, ...nav],
    [nav]
  );

  useEffect(() => {
    const ids = navWithHero.map((n) => n.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(`#${visible.target.id}`);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navWithHero]);

  const onNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });

    setMobileOpen(false);
  };

  // ===== Theme-aware styles (CSS vars from themes.css) =====
  const mainBg: React.CSSProperties =
    theme === "light-fade"
      ? {
          background:
            "linear-gradient(90deg, rgb(var(--page-from)), rgb(var(--page-via)), rgb(var(--page-to)))",
        }
      : {
          background:
            "linear-gradient(135deg, rgb(var(--page-from) / 0.60), rgb(var(--page-via) / 0.45), rgb(var(--page-to) / 0.60))",
        };

  const panelStyle: React.CSSProperties = {
    backgroundColor: "rgb(var(--panel) / var(--panel-a))",
    borderColor: "rgb(var(--border) / var(--border-a))",
  };

  const panelHoverStyle: React.CSSProperties = {
    backgroundColor: "rgb(var(--panel) / var(--panel-hover-a))",
    borderColor: "rgb(var(--border) / var(--border-a))",
  };

  const borderStyle: React.CSSProperties = {
    borderColor: "rgb(var(--border) / var(--border-a))",
  };

  const borderStrongStyle: React.CSSProperties = {
    borderColor: "rgb(var(--border) / var(--border-strong-a))",
  };

  const textMuted: React.CSSProperties = {
    color: "rgb(var(--text) / var(--text-muted-a))",
  };

  const textFaint: React.CSSProperties = {
    color: "rgb(var(--text) / var(--text-faint-a))",
  };

  const chipStyle: React.CSSProperties = {
    backgroundColor: "rgb(var(--panel) / var(--panel-a))",
    borderColor: "rgb(var(--border) / var(--border-a))",
    color: "rgb(var(--text) / 0.92)",
  };

  const ctaGhostStyle: React.CSSProperties = {
    backgroundColor: "rgb(var(--panel) / var(--panel-a))",
    borderColor: "rgb(var(--border) / var(--border-a))",
    color: "rgb(var(--text) / 0.92)",
  };

  const headerBgStyle: React.CSSProperties = {
    borderColor: "rgb(var(--border) / var(--border-a))",
    backgroundColor: "rgb(var(--panel) / 0.20)",
  };

  return (
    <main
      className="min-h-screen"
      style={{
        ...mainBg,
        color: "rgb(var(--text))",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={headerBgStyle}
      >
        <div className="flex w-full items-center justify-between px-6 py-3">
          <a
            href="#hero"
            onClick={onNavClick("#hero")}
            className="flex items-center gap-3"
          >
            <Image
              src="/vivolto-logo-transparent.png"
              alt="Vivolto"
              width={320}
              height={96}
              priority
              className="
                h-[44px] md:h-[52px] w-auto object-contain
                drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]
                drop-shadow-[0_12px_26px_rgba(0,0,0,0.95)]
                contrast-125 saturate-125
              "
            />
          </a>

          <nav className="hidden gap-5 md:flex">
            {navWithHero.map((item) => {
              const isActive = activeId === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onNavClick(item.href)}
                  className="text-sm transition"
                  style={
                    isActive
                      ? { color: "rgb(var(--text) / 1)" }
                      : { color: "rgb(var(--text) / var(--text-muted-a))" }
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme switch (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTheme("vivolto")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "vivolto" ? panelHoverStyle : chipStyle}
              >
                vivolto
              </button>
              <button
                type="button"
                onClick={() => setTheme("gradient-red")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "gradient-red" ? panelHoverStyle : chipStyle}
              >
                gradient
              </button>
              <button
                type="button"
                onClick={() => setTheme("light-fade")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "light-fade" ? panelHoverStyle : chipStyle}
              >
                light
              </button>
            </div>

            <button
              type="button"
              className="md:hidden rounded-lg border px-3 py-2 text-sm font-semibold transition"
              style={ctaGhostStyle}
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              Menü
            </button>

            <a
              href="#kontakt"
              onClick={onNavClick("#kontakt")}
              className="rounded-lg border px-3 py-2 text-sm font-semibold transition"
              style={ctaGhostStyle}
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-label="Menü schließen"
          />
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l backdrop-blur p-6"
            style={{
              ...borderStyle,
              backgroundColor: "rgb(var(--panel) / 0.35)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold" style={textMuted}>
                Navigation
              </div>
              <button
                className="rounded-lg border px-3 py-2 text-sm font-semibold transition"
                style={ctaGhostStyle}
                onClick={() => setMobileOpen(false)}
              >
                Schließen
              </button>
            </div>

            {/* Theme switch (mobile) */}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setTheme("vivolto")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "vivolto" ? panelHoverStyle : chipStyle}
              >
                vivolto
              </button>
              <button
                type="button"
                onClick={() => setTheme("gradient-red")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "gradient-red" ? panelHoverStyle : chipStyle}
              >
                gradient
              </button>
              <button
                type="button"
                onClick={() => setTheme("light-fade")}
                className="rounded-lg border px-3 py-2 text-xs font-semibold transition"
                style={theme === "light-fade" ? panelHoverStyle : chipStyle}
              >
                light
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {navWithHero.map((item) => {
                const isActive = activeId === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onNavClick(item.href)}
                    className="rounded-xl border px-4 py-3 text-sm transition"
                    style={
                      isActive
                        ? {
                            backgroundColor:
                              "rgb(var(--panel) / var(--panel-hover-a))",
                            borderColor:
                              "rgb(var(--border) / var(--border-strong-a))",
                            color: "rgb(var(--text) / 1)",
                          }
                        : panelStyle
                    }
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href="#kontakt"
                onClick={onNavClick("#kontakt")}
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        id="hero"
        className="scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-elektrotechnik.jpg')" }}
        />

        {/* Overlay only for dark themes */}
        {theme !== "light-fade" && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--overlay-from) / 0.80), rgb(var(--overlay-via) / 0.70), rgb(var(--overlay-to) / 0.80))",
            }}
          />
        )}

        {/* Weather widget (top-right) */}
        <HeroWeather />

        <div className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-4xl px-6 py-24">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                Professionelle Elektrotechnik für Industrie und Gewerbe in NRW
              </h1>

              <p className="mt-6 text-lg" style={textMuted}>
                Elektrotechnik · Photovoltaik · KNX-Systeme · Gebäudetechnik
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#kontakt"
                  onClick={onNavClick("#kontakt")}
                  className="rounded-md bg-white px-6 py-3 text-black font-medium"
                >
                  Projekt anfragen
                </a>

                <a
                  href="#elektrotechnik"
                  onClick={onNavClick("#elektrotechnik")}
                  className="rounded-md border px-6 py-3"
                  style={{ ...borderStrongStyle, color: "rgb(var(--text))" }}
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Über uns (image left) */}
      <section id="ueber-uns" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="order-2 md:order-1 md:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border" style={panelStyle}>
              <img
                src="/images/sections/ueber-uns.png"
                alt="Vivolto – Logo wird im Büro gemalt"
                className="w-full h-[260px] md:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-6">
            <h2 className="text-3xl font-semibold mb-6">Über uns</h2>

            <p className="mb-6" style={textMuted}>
              Wir stehen für Qualität, Effizienz, Normkonformität und strukturierte
              Projektabwicklung. Von der Planung bis zur Umsetzung begleiten wir
              Industrie- und Gewerbeprojekte mit technischer Präzision und klarer
              Kommunikation.
            </p>

            <ul className="space-y-3" style={textMuted}>
              <li>• Klare Verantwortlichkeiten und Abläufe</li>
              <li>• Nachvollziehbare technische Dokumentation</li>
              <li>• Fokus auf Industrie- und Gewerbeprojekte in NRW</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* Elektrotechnik */}
      <section id="elektrotechnik" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Elektrotechnik</h2>

            <p className="mt-4" style={textMuted}>
              Wir realisieren elektrotechnische Anlagen für Industrie, Gewerbe und anspruchsvolle
              Bauprojekte. Unser Leistungsumfang reicht von der Planung über die fachgerechte Umsetzung
              bis zur vollständigen technischen Dokumentation.
            </p>

            <ul className="mt-6 space-y-2" style={textMuted}>
              <li className="flex gap-2">
                <span>•</span>
                <span>Energieverteilungen · Kabelwege · Anschlüsse</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Installationen für Produktions- und Gewerbeflächen</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Prüfung, Dokumentation und saubere Übergaben</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border" style={panelStyle}>
              <img
                src="/images/sections/elektrotechnik.png"
                alt="Elektrotechnik – Industrieinstallation"
                className="h-[280px] w-full object-cover md:h-[360px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Photovoltaik (mobile: text -> image, desktop: image left / text right) */}
      <section id="photovoltaik" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6">
          <div className="order-2 md:order-1 md:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl border h-[280px] md:h-[360px]"
              style={panelStyle}
            >
              <img
                src="/images/sections/photovoltaik.png"
                alt="Photovoltaik – Industrie und Gewerbe"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <h2 className="text-3xl font-semibold mb-6">Photovoltaik</h2>

            <p className="mb-6" style={textMuted}>
              Wir realisieren maßgeschneiderte Photovoltaikanlagen für Industrie und Gewerbe – von der
              Planung über die Installation bis zur vollständigen technischen Dokumentation.
            </p>

            <ul className="space-y-3" style={textMuted}>
              <li>• PV-Dachanlagen und Freiflächenanlagen</li>
              <li>• Wechselrichter und Einspeisemanagement</li>
              <li>• Prüfung, Dokumentation und Übergabe</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* KNX Systeme (mobile: text -> image, desktop: text left / image right) */}
      <section id="knx" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6">
          <div className="order-1 md:order-1 md:col-span-5">
            <h2 className="text-3xl font-semibold mb-6">KNX Systeme</h2>

            <p className="mb-6" style={textMuted}>
              Umsetzung intelligenter Gebäudeautomation auf Basis von KNX für Industrie, Bürogebäude und
              funktionale Gewerbeimmobilien. Fokus auf Stabilität, Transparenz und saubere Integration.
            </p>

            <ul className="space-y-3" style={textMuted}>
              <li>• Beleuchtung, Beschattung, Energie- und Lastmanagement</li>
              <li>• Visualisierung und zentrale Steuerung</li>
              <li>• Normkonforme Umsetzung und Dokumentation</li>
            </ul>
          </div>

          <div className="order-2 md:order-2 md:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl border h-[280px] md:h-[360px]"
              style={panelStyle}
            >
              <img
                src="/images/sections/knx.png"
                alt="KNX Systeme – Gebäudeautomation in Industrieumgebung"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Gebäudetechnik (mobile: text -> image, desktop: image left / text right) */}
      <section id="gebaeudetechnik" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6">
          <div className="order-2 md:order-1 md:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl border h-[280px] md:h-[360px]"
              style={panelStyle}
            >
              <img
                src="/images/sections/gebaeudetechnik.png"
                alt="Gebäudetechnik – Elektrische Infrastruktur und Versorgung"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <h2 className="text-3xl font-semibold mb-6">Gebäudetechnik</h2>

            <p className="mb-6" style={textMuted}>
              Elektrische Gebäudetechnik für Produktionsstätten, Bürogebäude und öffentliche Einrichtungen
              – zuverlässig, effizient und zukunftssicher umgesetzt.
            </p>

            <ul className="space-y-3" style={textMuted}>
              <li>• Stromversorgung und Verteilungen</li>
              <li>• Sicherheits- und Notstromsysteme</li>
              <li>• Technische Dokumentation und Übergabe</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* Nachhaltigkeit (image right) */}
      <section id="nachhaltigkeit" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6">
          <div className="order-1 md:order-1 md:col-span-5">
            <h2 className="text-3xl font-semibold mb-6">Nachhaltigkeit</h2>

            <p className="mb-6" style={textMuted}>
              Nachhaltige Planung, energieeffiziente Systeme und ressourcenschonende Umsetzung sind
              integraler Bestandteil unserer technischen Konzepte.
            </p>

            <ul className="space-y-3" style={textMuted}>
              <li>• Energieeffizienz als Projektparameter</li>
              <li>• Saubere Dokumentation für Betrieb & Wartung</li>
              <li>• Technische Lösungen mit klarer Lebenszyklus-Perspektive</li>
            </ul>
          </div>

          <div className="order-2 md:order-2 md:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl border h-[280px] md:h-[360px]"
              style={panelStyle}
            >
              <img
                src="/images/sections/nachhaltigkeit.png"
                alt="Nachhaltigkeit – energieeffiziente Gebäudetechnik"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Team */}
      <section id="team" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold">Team</h2>
              <p className="mt-3 max-w-2xl" style={textMuted}>
                Unser Team besteht aus erfahrenen Fachkräften mit technischem Hintergrund und praxisnaher
                Projekterfahrung im industriellen Umfeld.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border" style={panelStyle}>
              <img
                src="/images/sections/team/group.png"
                alt="Vivolto Team – Gruppenfoto"
                className="h-[420px] w-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Jens Fischer", role: "Projektleiter", src: "/images/sections/team/team-1.png" },
              { name: "Katharina Müller", role: "Projektkoordination", src: "/images/sections/team/team-2.png" },
              { name: "Stefan Wagner", role: "Bauleitung", src: "/images/sections/team/team-3.png" },
              { name: "Michael Novak", role: "Service", src: "/images/sections/team/team-4.png" },
              { name: "Frank Bauer", role: "PV-Spezialist", src: "/images/sections/team/team-5.png" },
              { name: "Ayhan Demir", role: "Techniker", src: "/images/sections/team/team-6.png" },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div
                  className="mx-auto h-28 w-28 overflow-hidden rounded-full border md:h-32 md:w-32"
                  style={panelStyle}
                >
                  <img
                    src={p.src}
                    alt={`${p.name} – ${p.role}`}
                    className="block h-full w-full object-cover scale-[1.1]"
                    style={{ objectPosition: "50% 20%" }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                <div className="mt-3 text-sm font-semibold">{p.name}</div>
                <div className="text-xs" style={textMuted}>
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Kontakt</h2>
            <p className="mt-3 text-sm md:text-base" style={textMuted}>
              Sie planen ein technisches Projekt? Kontaktieren Sie uns für eine fachliche Erstberatung.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border p-6" style={panelStyle}>
              <div className="text-sm font-semibold">Projekt anfragen</div>
              <p className="mt-2 text-sm" style={textMuted}>
                Senden Sie kurz die Eckdaten (Ort, Gewerke, Umfang, Terminrahmen).
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border p-4" style={panelStyle}>
                  <div className="text-xs font-semibold" style={textMuted}>
                    E-Mail
                  </div>
                  <div className="mt-1 text-sm">kontakt@vivolto.de</div>
                </div>
                <div className="rounded-xl border p-4" style={panelStyle}>
                  <div className="text-xs font-semibold" style={textMuted}>
                    Region
                  </div>
                  <div className="mt-1 text-sm">NRW – Köln / Umgebung</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:kontakt@vivolto.de?subject=Projektanfrage%20Vivolto"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="#hero"
                  onClick={onNavClick("#hero")}
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition"
                  style={ctaGhostStyle}
                >
                  Nach oben
                </a>
              </div>

              <p className="mt-4 text-xs" style={textFaint}>
                Hinweis: Platzhalter-Kontaktdaten – können wir später exakt setzen (Telefon, Adresse,
                Impressum/Datenschutz).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={borderStyle}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs md:flex-row md:items-center md:justify-between">
          <div style={textFaint}>© {new Date().getFullYear()} Vivolto</div>
          <div className="flex gap-4" style={textFaint}>
            <a href="#kontakt" onClick={onNavClick("#kontakt")} className="hover:opacity-90">
              Kontakt
            </a>
            <span style={{ color: "rgb(var(--text) / 0.25)" }}>|</span>
            <span>Impressum / Datenschutz (später)</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   HERO WEATHER (top-right)
   ========================= */

function HeroWeather() {
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

  // cloud/snow/storm/unknown -> prosta chmurka
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

/* ===== Helpers ===== */

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div
        className="h-px w-full"
        style={{ backgroundColor: "rgb(var(--text) / var(--divider-a))" }}
      />
    </div>
  );
}

function Dot() {
  return (
    <span
      className="mt-1 inline-block h-2 w-2 flex-none rounded-full"
      style={{ backgroundColor: "rgb(var(--text) / 0.40)" }}
    />
  );
}
