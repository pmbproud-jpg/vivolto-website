import React from "react";

export const metadata = {
  title: "Impressum | Vivolto GmbH",
  description: "Impressum und Kontaktinformationen der Vivolto GmbH",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </h2>

          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">Vivolto GmbH</p>
            <p>Ottostraße 14</p>
            <p>50170 Kerpen</p>
            <p>Deutschland</p>
          </div>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Handelsregister:</span> HRB 124298
            </p>
            <p>
              <span className="font-semibold">Registergericht:</span> Amtsgericht
              Köln
            </p>
          </div>

          <div className="mt-6 space-y-2 text-gray-700">
            <p className="font-semibold">Vertreten durch:</p>
            <p>Geschäftsführer Patrick Wientzek</p>
          </div>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Steuernummer:</span>
              <br />
              359/5782/1396
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">E-Mail:</span>{" "}
              <a
                href="mailto:info@vivolto.de"
                className="text-blue-600 hover:underline"
              >
                info@vivolto.de
              </a>
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://www.vivolto.de"
                className="text-blue-600 hover:underline"
              >
                www.vivolto.de
              </a>
            </p>
          </div>
        </section>


        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Unternehmensausrichtung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>Unser Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB.</p>
            <p>Ein Vertragsabschluss mit Verbrauchern ist ausgeschlossen.</p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Streitbeilegung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Haftung für Inhalte
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Als Diensteanbieter sind wir gemäß § 5 DDG und den allgemeinen Gesetzen
              für eigene Inhalte auf diesen Seiten verantwortlich.
            </p>
            <p>
              Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Haftung für Links
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p>
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Urheberrecht</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht.
            </p>
            <p>
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den geschäftlichen Gebrauch
              im Rahmen der bestimmungsgemäßen Nutzung gestattet.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <div className="text-gray-600 text-sm">
          <p>© 2026 Vivolto GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  );
}
