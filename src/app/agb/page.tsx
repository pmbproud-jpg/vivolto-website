import React from "react";

export const metadata = {
  title: "AGB | Vivolto GmbH",
  description: "Allgemeine Geschäftsbedingungen der Vivolto GmbH",
};

export default function AGB() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">AGB</h1>
        <p className="text-gray-600 mb-8">
          Allgemeine Geschäftsbedingungen – Vivolto GmbH
        </p>
        <p className="text-gray-600 mb-8">
          Elektroinstallationsleistungen (B2B / VOB-Basis)
          <br />
          Stand: März 2026
        </p>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            1. Geltungsbereich
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">1.1</span> Diese Allgemeinen
              Geschäftsbedingungen gelten für sämtliche Bau-, Werk-, Liefer- und
              Montageleistungen der Vivolto GmbH, Ottostraße 14, 50170 Kerpen.
            </p>

            <p>
              <span className="font-semibold">1.2</span> Die Leistungen erfolgen
              ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB sowie
              juristischen Personen des öffentlichen Rechts.
            </p>

            <p>
              <span className="font-semibold">1.3</span> Es gilt die VOB/B in der
              zum Zeitpunkt des Vertragsschlusses gültigen Fassung, soweit sie
              wirksam vereinbart wurde. Diese AGB ergänzen die VOB/B.
            </p>

            <p>
              <span className="font-semibold">1.4</span> Entgegenstehende
              Bedingungen des Auftraggebers gelten nur bei ausdrücklicher
              schriftlicher Zustimmung.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            2. Vertragsgrundlagen und Rangfolge
          </h2>

          <p className="mb-4 text-gray-700">Es gilt folgende Rangfolge:</p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Individualvertrag / Auftrag / Zuschlag</li>
            <li>Leistungsverzeichnis / Angebot</li>
            <li>VOB/B</li>
            <li>diese AGB</li>
          </ol>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            3. Aufmaß und Abrechnung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">3.1</span> Vivolto erstellt
              regelmäßig – in der Regel wöchentlich – Aufmaße über die erbrachten
              Leistungen.
            </p>

            <p>
              <span className="font-semibold">3.2</span> Der Auftraggeber
              verpflichtet sich, die eingereichten Aufmaße innerhalb von 5
              Werktagen zu prüfen und schriftlich freizugeben oder etwaige
              Einwendungen konkret zu benennen.
            </p>

            <p>
              <span className="font-semibold">3.3</span> Erfolgt innerhalb dieser
              Frist keine schriftliche Rückmeldung, gilt das Aufmaß als anerkannt.
            </p>

            <p>
              <span className="font-semibold">3.4</span> Erfolgt trotz Anforderung
              keine rechtzeitige Aufmaßprüfung, ist Vivolto berechtigt, auf
              Grundlage des eingereichten Aufmaßes Abschlags- oder
              Schlussrechnungen zu stellen.
            </p>

            <p>
              <span className="font-semibold">3.5</span> Eine spätere Einwendung
              gegen Mengen ist nur zulässig, wenn diese nachweislich auf
              offensichtlichen Rechen- oder Übertragungsfehlern beruht.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            4. Abschlagszahlungen und Fälligkeit
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">4.1</span> Die Abrechnung erfolgt
              gemäß § 16 VOB/B auf Grundlage der eingereichten und anerkannten
              Aufmaße.
            </p>

            <p>
              <span className="font-semibold">4.2</span> Rechnungen sind innerhalb
              von 21 Kalendertagen ab Rechnungsdatum ohne Abzug fällig.
            </p>

            <p>
              <span className="font-semibold">4.3</span> Bei Zahlungsverzug gelten
              Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz
              (§ 288 Abs. 2 BGB).
            </p>

            <p>
              <span className="font-semibold">4.4</span> Bei Zahlungsverzug ist
              Vivolto berechtigt:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>weitere Leistungen zurückzubehalten,</li>
              <li>Fristen anzupassen,</li>
              <li>Sicherheitsleistungen zu verlangen.</li>
            </ul>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            5. Nachträge und Leistungsänderungen
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">5.1</span> Änderungen des
              Leistungsumfangs, zusätzliche Leistungen oder Anordnungen des
              Auftraggebers gelten als Nachträge im Sinne der VOB/B.
            </p>

            <p>
              <span className="font-semibold">5.2</span> Nachträge sind vor
              Ausführung schriftlich zu vereinbaren. Ist dies aus
              bauablaufbedingten Gründen nicht möglich, werden die Leistungen auf
              Basis der vereinbarten Einheitspreise oder nach tatsächlichem
              Aufwand vergütet.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            6. Mitwirkungspflichten des Auftraggebers
          </h2>

          <p className="mb-4 text-gray-700">
            Der Auftraggeber verpflichtet sich insbesondere:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>rechtzeitige Bereitstellung aller Planunterlagen und Freigaben</li>
            <li>Koordination der Gewerke</li>
            <li>Sicherstellung freier Montageflächen</li>
            <li>rechtzeitige Beistellung vereinbarter Materialien</li>
            <li>Einhaltung arbeitsschutzrechtlicher Anforderungen</li>
          </ul>

          <p className="mt-4 text-gray-700">
            Verzögerungen hieraus verlängern Ausführungsfristen und berechtigen
            zur Mehrkostenabrechnung.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            7. Ausführungsfristen und Behinderung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">7.1</span> Fristen sind nur
              verbindlich, wenn ausdrücklich schriftlich als verbindlich
              vereinbart.
            </p>

            <p>
              <span className="font-semibold">7.2</span> Behinderungen gemäß § 6
              VOB/B verlängern die Ausführungszeit entsprechend.
            </p>

            <p>
              <span className="font-semibold">7.3</span> Mehrkosten aus
              Behinderungen sind vom Auftraggeber zu tragen, soweit dieser die
              Ursache zu vertreten hat.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Abnahme</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">8.1</span> Die Abnahme erfolgt
              gemäß § 12 VOB/B.
            </p>

            <p>
              <span className="font-semibold">8.2</span> Erfolgt nach
              Fertigstellungsanzeige keine Abnahme innerhalb von 12 Werktagen oder
              wird die Leistung in Gebrauch genommen, gilt sie als abgenommen,
              soweit rechtlich zulässig.
            </p>

            <p>
              <span className="font-semibold">8.3</span> Unwesentliche Mängel
              berechtigen nicht zur Abnahmeverweigerung.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            9. Eigentumsvorbehalt
          </h2>

          <p className="text-gray-700">
            Bis zur vollständigen Zahlung sämtlicher Forderungen verbleiben
            gelieferte Materialien im Eigentum der Vivolto GmbH.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Haftung</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">10.1</span> Vivolto haftet
              unbeschränkt bei:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Vorsatz</li>
              <li>grober Fahrlässigkeit</li>
              <li>Verletzung von Leben, Körper, Gesundheit</li>
            </ul>

            <p>
              <span className="font-semibold">10.2</span> Bei leichter
              Fahrlässigkeit haftet Vivolto nur bei Verletzung wesentlicher
              Vertragspflichten und begrenzt auf den vertragstypischen,
              vorhersehbaren Schaden.
            </p>

            <p>
              <span className="font-semibold">10.3</span> Eine Haftung für
              entgangenen Gewinn, Produktionsausfall oder mittelbare Schäden ist
              – soweit gesetzlich zulässig – ausgeschlossen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Kündigung</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">11.1</span> Kündigungen richten
              sich nach § 8 VOB/B.
            </p>

            <p>
              <span className="font-semibold">11.2</span> Kündigt der Auftraggeber
              ohne wichtigen Grund, sind die bis dahin erbrachten Leistungen
              sowie entgangener Gewinn gemäß VOB/B zu vergüten.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            12. Gerichtsstand und Recht
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">12.1</span> Gerichtsstand ist Köln,
              sofern gesetzlich zulässig.
            </p>

            <p>
              <span className="font-semibold">12.2</span> Es gilt deutsches Recht
              unter Ausschluss des UN-Kaufrechts.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            13. Salvatorische Klausel
          </h2>

          <p className="text-gray-700">
            Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im
            Übrigen wirksam.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            14. Sicherheiten, Bürgschaften, Versicherungsschutz
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">14.1</span> Soweit nach VOB/B
              Sicherheiten vereinbart werden, sind diese ausschließlich in Form
              einer selbstschuldnerischen, unbefristeten Bürgschaft eines in der
              Europäischen Union zugelassenen Kreditinstituts oder
              Kreditversicherers zu leisten.
            </p>

            <p>
              <span className="font-semibold">14.2</span> Die Bürgschaft darf nur
              Forderungen aus dem konkret zugrunde liegenden Vertrag absichern.
              Globalbürgschaften oder über den Vertragswert hinausgehende
              Sicherheiten sind ausgeschlossen.
            </p>

            <p>
              <span className="font-semibold">14.3</span> Die Höhe einer
              Vertragserfüllungsbürgschaft ist auf maximal 5 % der
              Auftragssumme begrenzt, sofern nicht individualvertraglich etwas
              anderes vereinbart wurde.
            </p>

            <p>
              <span className="font-semibold">14.4</span> Eine
              Gewährleistungsbürgschaft ist auf maximal 3 % der
              Abrechnungssumme begrenzt.
            </p>

            <p>
              <span className="font-semibold">14.5</span>
              Sicherheitsleistungen sind nach vollständiger und mangelfreier
              Vertragserfüllung unverzüglich zurückzugeben.
            </p>

            <p>
              <span className="font-semibold">14.6</span> Die Kosten für die
              Stellung von Sicherheiten trägt die jeweils verpflichtete Partei.
            </p>

            <p>
              <span className="font-semibold">14.7</span> Vivolto unterhält eine
              Betriebshaftpflichtversicherung mit einer Deckungssumme von bis zu
              5.000.000 EUR je Schadensfall für Personen- und Sachschäden. Der
              Versicherungsschutz besteht im branchenüblichen Umfang.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
