"use client";

import React, { useEffect, useState } from "react";

export default function EmailFallback() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("showEmailFallback", handler);
    return () => window.removeEventListener("showEmailFallback", handler);
  }, []);

  if (!visible) return null;

  const email = "info@vivolto.de";

  return (
    <div className="mt-4 rounded-lg border p-4 bg-white/5 max-w-md" style={{ color: "rgb(var(--text))" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">Nie otworzył się klient pocztowy?</div>
          <div className="mt-1 text-xs">Skopiuj adres i wyślij wiadomość ręcznie:</div>
          <div className="mt-2 rounded-md bg-gray-800 px-3 py-2 text-sm">{email}</div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              try {
                navigator.clipboard.writeText(email);
                // eslint-disable-next-line no-alert
                alert("Adres skopiowany do schowka");
              } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err);
              }
            }}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black"
          >
            Kopiuj adres
          </button>

          <button
            onClick={() => setVisible(false)}
            className="rounded-md border px-3 py-2 text-sm"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}
