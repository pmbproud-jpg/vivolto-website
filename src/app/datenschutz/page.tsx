import React from "react";

export const metadata = {
  title: "Datenschutzerklärung | Vivolto GmbH",
  description: "Datenschutzerklärung der Vivolto GmbH",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Allgemeine Hinweise
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen.
            </p>

            <p>
              Die nachfolgenden Informationen geben Ihnen einen Überblick darüber,
              welche personenbezogenen Daten beim Besuch unserer Website verarbeitet
              werden und zu welchem Zweck dies geschieht.
            </p>

            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Verantwortliche Stelle
          </h2>

          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">Vivolto GmbH</p>
            <p>Ottostraße 14</p>
            <p>50170 Kerpen</p>
            <p>Deutschland</p>
            <p>
              <span className="font-semibold">E-Mail:</span>{" "}
              <a
                href="mailto:info@vivolto.de"
                className="text-blue-600 hover:underline"
              >
                info@vivolto.de
              </a>
            </p>
          </div>

          <p className="mt-4 text-gray-700 text-sm italic">
            Verantwortliche Stelle ist die juristische Person, die über Zwecke
            und Mittel der Verarbeitung personenbezogener Daten entscheidet.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Hosting</h2>

          <div className="space-y-4 text-gray-700">
            <p>Unsere Website wird bei folgendem Anbieter gehostet:</p>

            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Vercel Inc.</p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723</p>
              <p>USA</p>
            </div>

            <p>
              Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch
              sogenannte Server-Logfiles erfasst. Hierbei handelt es sich insbesondere
              um:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und -version</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>

            <p>
              Diese Daten sind technisch erforderlich, um die Website bereitzustellen
              und die Systemsicherheit zu gewährleisten.
            </p>

            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
            </p>

            <p>
              Sofern personenbezogene Daten in die USA übertragen werden, erfolgt
              dies auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Kontaktformular
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen
              Kontaktdaten zum Zwecke der Bearbeitung Ihrer Anfrage verarbeitet.
            </p>

            <p>
              <span className="font-semibold">Rechtsgrundlage ist:</span>
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
                Maßnahmen), sofern Ihre Anfrage auf einen Vertragsschluss abzielt
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter
                Bearbeitung von Anfragen)
              </li>
            </ul>

            <p>
              Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
            </p>

            <p>
              Die gespeicherten Daten verbleiben bei uns, bis der Zweck der
              Verarbeitung entfällt oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies,
              sofern dies für den Betrieb der Website erforderlich ist.
            </p>

            <p>
              Eine Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <p>
              Tracking- oder Marketing-Cookies werden nicht eingesetzt.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Ihre Rechte
          </h2>

          <p className="mb-4 text-gray-700">Sie haben jederzeit das Recht auf:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Widerruf erteilter Einwilligungen</li>
          </ul>

          <p className="text-gray-700">
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an uns.
          </p>

          <p className="mt-4 text-gray-700">
            Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. SSL- bzw. TLS-Verschlüsselung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>

            <p>
              Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile Ihres
              Browsers („https://").
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Widerspruch gegen Werbe-E-Mails
          </h2>

          <p className="text-gray-700">
            Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur
            Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit
            widersprochen.
          </p>
        </section>
      </div>
    </div>
  );
}
