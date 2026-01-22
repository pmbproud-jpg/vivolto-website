import Image from "next/image";

const NAV = [
  { label: "Elektrotechnik", href: "#elektrotechnik" },
  { label: "Photovoltaik", href: "#photovoltaik" },
  { label: "KNX Systeme", href: "#knx" },
  { label: "Gebäudetechnik", href: "#gebaeudetechnik" },
  { label: "Team", href: "#team" },
  { label: "Nachhaltigkeit", href: "#nachhaltigkeit" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-5 text-white/80 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/vivolto-logo.png"
              alt="VIVOLTO"
              width={160}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="hover:text-white transition"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white border border-white/15
                       bg-gradient-to-r from-[color:var(--vivolto-purple)] via-[color:var(--vivolto-magenta)] to-[color:var(--vivolto-red)]
                       hover:opacity-90 transition"
          >
            Projekt anfragen
          </a>
        </div>
      </header>

      {/* HERO / START */}
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Professionelle Elektrotechnik für Industrie und Gewerbe in NRW
              </h1>

              <p className="mt-5 text-lg text-white/80">
                Elektrotechnik · Photovoltaik · KNX-Systeme · Gebäudetechnik
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="rounded-md px-5 py-3 text-sm font-medium text-white
                             bg-gradient-to-r from-[color:var(--vivolto-purple)] via-[color:var(--vivolto-magenta)] to-[color:var(--vivolto-red)]
                             hover:opacity-90 transition"
                >
                  Projekt anfragen
                </a>
                <a
                  href="#elektrotechnik"
                  className="rounded-md px-5 py-3 text-sm font-medium border border-white/15 text-white/90 hover:text-white hover:border-white/25 transition"
                >
                  Leistungen ansehen
                </a>
              </div>

              <div className="mt-8 text-sm text-white/60">
                NRW · Köln/Bergheim · B2B · klare Dokumentation · normkonforme
                Umsetzung
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <div className="text-sm font-semibold">Kurzprofil</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Fokus: Industrie, Gewerbe, funktionale Gebäude</li>
                <li>• Strukturierte Projektabwicklung</li>
                <li>• Technische Dokumentation und klare Kommunikation</li>
                <li>• Skalierbare Lösungen (PV / KNX / Gebäudetechnik)</li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Elektrotechnik",
                  "Photovoltaik",
                  "KNX-Systeme",
                  "Gebäudetechnik",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJE – KOLEJNOŚĆ wg specyfikacji */}
        <Section id="elektrotechnik" title="Elektrotechnik">
          <p>
            Wir realisieren elektrotechnische Anlagen für Industrie, Gewerbe und
            anspruchsvolle Bauprojekte. Unser Leistungsumfang reicht von der
            Planung über die fachgerechte Umsetzung bis zur vollständigen
            technischen Dokumentation.
          </p>
        </Section>

        <Section id="photovoltaik" title="Photovoltaik">
          <p>
            Planung und Umsetzung von Photovoltaikanlagen für Industrie- und
            Gewerbedächer sowie PV-Freiflächenanlagen. Fokus auf wirtschaftliche,
            skalierbare und normkonforme Lösungen.
          </p>
        </Section>

        <Section id="knx" title="KNX Systeme">
          <p>
            Umsetzung intelligenter Gebäudeautomation auf Basis von KNX –
            insbesondere für Industrie, Bürogebäude und funktionale
            Gewerbeimmobilien.
          </p>
        </Section>

        <Section id="gebaeudetechnik" title="Gebäudetechnik">
          <p>
            Elektrische Gebäudetechnik für Produktionsstätten, Bürogebäude und
            öffentliche Einrichtungen – zuverlässig, effizient und
            zukunftssicher.
          </p>
        </Section>

        <Section id="team" title="Team">
          <p>
            Unser Team besteht aus erfahrenen Fachkräften mit technischem
            Hintergrund und praxisnaher Projekterfahrung im industriellen Umfeld.
          </p>
        </Section>

        <Section id="nachhaltigkeit" title="Nachhaltigkeit">
          <p>
            Nachhaltige Planung, energieeffiziente Systeme und ressourcenschonende
            Umsetzung sind integraler Bestandteil unserer technischen Konzepte.
          </p>
        </Section>

        <Section id="ueber-uns" title="Über uns">
          <p>
            Wir stehen für Qualität, Effizienz, Normkonformität und strukturierte
            Projektabwicklung. Von der Planung bis zur Umsetzung begleiten wir
            Projekte mit technischer Präzision und klarer Kommunikation.
          </p>
        </Section>

        <Section id="kontakt" title="Kontakt">
          <p>
            Sie planen ein technisches Projekt? Kontaktieren Sie uns für eine
            fachliche Erstberatung.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-6">
            <div className="text-sm text-white/60">Kontakt</div>
            <div className="mt-2 text-white/90">
              E-Mail: <span className="font-medium">kontakt@vivolto.de</span>
            </div>

            <div className="mt-5">
              <a
                href="mailto:kontakt@vivolto.de?subject=Projektanfrage%20VIVOLTO"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white
                           bg-gradient-to-r from-[color:var(--vivolto-purple)] via-[color:var(--vivolto-magenta)] to-[color:var(--vivolto-red)]
                           hover:opacity-90 transition"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} VIVOLTO
          </div>
        </footer>
      </main>
    </div>
  );
}
