export default function Home() {
  const nav = [
    { label: "Elektrotechnik", href: "#elektrotechnik" },
    { label: "Photovoltaik", href: "#photovoltaik" },
    { label: "KNX Systeme", href: "#knx" },
    { label: "Gebäudetechnik", href: "#gebaeudetechnik" },
    { label: "Team", href: "#team" },
    { label: "Nachhaltigkeit", href: "#nachhaltigkeit" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <main className="min-h-screen text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-3">
            {/* Logo – jeśli masz plik w public/, podmień src np. na /vivolto-logo.png */}
            <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">VIVOLTO</div>
              <div className="text-xs text-white/70">
                NRW · Industrie · Gewerbe
              </div>
            </div>
          </a>

          <nav className="hidden gap-5 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Projekt anfragen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Professionelle Elektrotechnik für Industrie und Gewerbe in NRW
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
              Elektrotechnik · Photovoltaik · KNX-Systeme · Gebäudetechnik
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Projekt anfragen
              </a>
              <a
                href="#elektrotechnik"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Fokus" value="Industrie / Gewerbe" />
              <Stat label="Standard" value="Normkonformität" />
              <Stat label="Abwicklung" value="Strukturiert" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold tracking-wide text-white/70">
                Leistungsbereiche
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Dot /> Planung · Umsetzung · Dokumentation
                </li>
                <li className="flex items-start gap-2">
                  <Dot /> Industrieanlagen · Gewerbeobjekte · Bauprojekte
                </li>
                <li className="flex items-start gap-2">
                  <Dot /> PV-Dächer · PV-Freiflächen · KNX-Automation
                </li>
                <li className="flex items-start gap-2">
                  <Dot /> Klare Kommunikation · saubere Übergaben
                </li>
              </ul>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white/70">
                  Region
                </div>
                <div className="mt-1 text-sm text-white/85">
                  NRW – Köln / Umgebung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Elektrotechnik */}
      <Section
        id="elektrotechnik"
        title="Elektrotechnik"
        text="Wir realisieren elektrotechnische Anlagen für Industrie, Gewerbe und anspruchsvolle Bauprojekte. Unser Leistungsumfang reicht von der Planung über die fachgerechte Umsetzung bis zur vollständigen technischen Dokumentation."
        bullets={[
          "Energieverteilungen · Kabelwege · Anschlüsse",
          "Installationen für Produktions- und Gewerbeflächen",
          "Prüfung, Dokumentation und saubere Übergaben",
        ]}
      />

      <Divider />

      {/* Photovoltaik */}
      <Section
        id="photovoltaik"
        title="Photovoltaik"
        text="Planung und Umsetzung von Photovoltaikanlagen für Industrie- und Gewerbedächer sowie PV-Freiflächenanlagen. Fokus auf wirtschaftliche, skalierbare und normkonforme Lösungen."
        bullets={[
          "Industrie- und Gewerbedächer",
          "PV-Freiflächenanlagen",
          "Anlagenkonzept, Ausführung, Dokumentation",
        ]}
      />

      <Divider />

      {/* KNX Systeme */}
      <Section
        id="knx"
        title="KNX Systeme"
        text="Umsetzung intelligenter Gebäudeautomation auf Basis von KNX – insbesondere für Industrie, Bürogebäude und funktionale Gewerbeimmobilien."
        bullets={[
          "Automationsfunktionen für Gewerbe und Büro",
          "Strukturierte Parametrierung und Inbetriebnahme",
          "Dokumentation und Übergabe der Systemlogik",
        ]}
      />

      <Divider />

      {/* Gebäudetechnik */}
      <Section
        id="gebaeudetechnik"
        title="Gebäudetechnik"
        text="Elektrische Gebäudetechnik für Produktionsstätten, Bürogebäude und öffentliche Einrichtungen – zuverlässig, effizient und zukunftssicher."
        bullets={[
          "Technische Gebäudeausrüstung (elektrisch)",
          "Betriebssichere Installation und klare Struktur",
          "Langfristige Wartbarkeit und Nachrüstbarkeit",
        ]}
      />

      <Divider />

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Team</h2>
            <p className="mt-3 text-sm text-white/75 md:text-base">
              Unser Team besteht aus erfahrenen Fachkräften mit technischem
              Hintergrund und praxisnaher Projekterfahrung im industriellen
              Umfeld.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card title="Projektabwicklung" text="Planung · Koordination · Dokumentation" />
              <Card title="Montage & Umsetzung" text="Industrie- und Gewerbeinstallationen" />
              <Card title="Automation (KNX)" text="Funktional, wartbar, nachvollziehbar" />
              <Card title="PV-Umsetzung" text="Dach- und Freiflächenanlagen (B2B)" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Nachhaltigkeit */}
      <Section
        id="nachhaltigkeit"
        title="Nachhaltigkeit"
        text="Nachhaltige Planung, energieeffiziente Systeme und ressourcenschonende Umsetzung sind integraler Bestandteil unserer technischen Konzepte."
        bullets={[
          "Energieeffizienz als Projektparameter",
          "Saubere Dokumentation für Betrieb & Wartung",
          "Technische Lösungen mit klarer Lebenszyklus-Perspektive",
        ]}
      />

      <Divider />

      {/* Über uns */}
      <Section
        id="ueber-uns"
        title="Über uns"
        text="Wir stehen für Qualität, Effizienz, Normkonformität und strukturierte Projektabwicklung. Von der Planung bis zur Umsetzung begleiten wir Projekte mit technischer Präzision und klarer Kommunikation."
        bullets={[
          "Klare Verantwortlichkeiten und Abläufe",
          "Nachvollziehbare Dokumentation",
          "Fokus auf Industrie- und Gewerbeprojekte in NRW",
        ]}
      />

      <Divider />

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Kontakt</h2>
            <p className="mt-3 text-sm text-white/75 md:text-base">
              Sie planen ein technisches Projekt? Kontaktieren Sie uns für eine
              fachliche Erstberatung.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Projekt anfragen</div>
              <p className="mt-2 text-sm text-white/75">
                Senden Sie kurz die Eckdaten (Ort, Gewerke, Umfang, Terminrahmen).
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/70">
                    E-Mail
                  </div>
                  <div className="mt-1 text-sm text-white/90">
                    kontakt@vivolto.de
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/70">
                    Region
                  </div>
                  <div className="mt-1 text-sm text-white/90">
                    NRW – Köln / Umgebung
                  </div>
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
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Nach oben
                </a>
              </div>

              <p className="mt-4 text-xs text-white/55">
                Hinweis: Platzhalter-Kontaktdaten – können wir später exakt
                setzen (Telefon, Adresse, Impressum/Datenschutz).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Vivolto</div>
          <div className="flex gap-4">
            <a href="#kontakt" className="hover:text-white/80">
              Kontakt
            </a>
            <span className="text-white/20">|</span>
            <span>Impressum / Datenschutz (später)</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ===== Helpers (lokalne komponenty) ===== */

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="h-px w-full bg-white/10" />
    </div>
  );
}

function Dot() {
  return (
    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-white/50" />
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/75">{text}</div>
    </div>
  );
}

function Section({
  id,
  title,
  text,
  bullets,
}: {
  id: string;
  title: string;
  text: string;
  bullets: string[];
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-white/75 md:text-base">{text}</p>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs font-semibold tracking-wide text-white/70">
              Umfang
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Dot />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

