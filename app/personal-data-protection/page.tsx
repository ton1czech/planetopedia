'use client'

import Container from '@/components/Container'
import { useLanguage } from '@/store/useLanguage'

export default function Page() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='pt-24 pb-20 md:pt-32 md:pb-32'>
        <h2 className='text-3xl md:text-4xl font-semibold lg:text-5xl mb-10'>
          {language === 'en' && <>Privacy Policy</>}
          {language === 'cs' && <>Zásady ochrany osobních údajů</>}
          {language === 'de' && <>Datenschutzrichtlinie</>}
        </h2>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Basic provisions</>}
            {language === 'cs' && <>Základní ustanovení</>}
            {language === 'de' && <>Grundlegende Bestimmungen</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                We take data protection very seriously. Below you will find all
                the information about what data we hold and how we handle it.
                Data protection is governed by the GDPR (formally Regulation
                (EC) No 2016/679 of the European Parliament and of the Council
                of 27 April 2016 on the protection of natural persons with
                regard to the processing of personal data and on the free
                movement of such data, and repealing Directive 95/46/EC).
              </>
            )}
            {language === 'cs' && (
              <>
                Ochranu osobních údajů bereme velmi vážně. Níže najdete veškeré
                informace o tom, jaké údaje máme k dispozici a jak s nimi
                nakládáme. Ochrana osobních údajů se řídí nařízením GDPR
                (formálně nařízení Evropského parlamentu Rady č. 2016/679 ze dne
                27. 4. 2016 o ochraně fyzických osob v souvislosti se
                zpracováním osobních údajů a o volném pohybu těchto údajů a o
                zrušení směrnice 95/46/ES).
              </>
            )}
            {language === 'de' && (
              <>
                Wir nehmen den Datenschutz sehr ernst. Nachstehend finden Sie
                alle Informationen darüber, welche Daten wir speichern und wie
                wir sie behandeln. Der Datenschutz wird durch die DSGVO geregelt
                (formell die Verordnung (EG) Nr. 2016/679 des Europäischen
                Parlaments und des Rates vom 27. April 2016 zum Schutz
                natürlicher Personen bei der Verarbeitung personenbezogener
                Daten, zum freien Datenverkehr und zur Aufhebung der Richtlinie
                95/46/EG).
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Personal data means any information about an identified or
                identifiable natural person; an identifiable natural person is a
                natural person who can be identified, directly or indirectly, in
                particular by reference to an identifier such as a name, an
                identification number, location data, a network identifier or to
                one or more specific elements of the physical, physiological,
                genetic, mental, economic, cultural or social identity of that
                natural person.
              </>
            )}
            {language === 'cs' && (
              <>
                Osobními údaji se rozumí veškeré informace o identifikované nebo
                identifikovatelné fyzické osobě; identifikovatelnou fyzickou
                osobou je fyzická osoba, kterou lze přímo či nepřímo
                identifikovat, zejména odkazem na určitý identifikátor,
                například jméno, identifikační číslo, lokační údaje, síťový
                identifikátor nebo na jeden či více zvláštních prvků fyzické,
                fyziologické, genetické, psychické, ekonomické, kulturní nebo
                společenské identity této fyzické osoby.
              </>
            )}
            {language === 'de' && (
              <>
                Personenbezogene Daten sind alle Informationen über eine
                bestimmte oder bestimmbare natürliche Person; als bestimmbar
                wird eine natürliche Person angesehen, die direkt oder indirekt
                identifiziert werden kann, insbesondere durch Zuordnung zu einer
                Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten,
                zu einer Netzkennung oder zu einem oder mehreren besonderen
                Merkmalen der physischen, physiologischen, genetischen,
                psychischen, wirtschaftlichen, kulturellen oder sozialen
                Identität dieser natürlichen Person.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Who we are and how to contact us</>}
            {language === 'cs' && <>Kdo jsme a jak nás kontaktovat</>}
            {language === 'de' && (
              <>Wer wir sind und wie Sie uns kontaktieren können</>
            )}
          </h2>
          <p>
            {language === 'en' && (
              <>
                Your personal data is carefully managed by Dominik Grössl, ID
                No.: 14184397, Němčice 26, Postal Code 345 06, Czech Republic
                (hereinafter: "Controller").
                <br />
                Email: info@planetopedia.agency
                <br />
                Phone: +420 739 830 034
              </>
            )}
            {language === 'cs' && (
              <>
                Vaše osobní údaje pečlivě spravuje Dominik Grössl, IČO:
                14184397, Němčice 26, PSČ 345 06, Česká republika (dále jen:
                „správce“).
                <br />
                Email: info@planetopedia.agency
                <br />
                Telefon: +420 739 830 034
              </>
            )}
            {language === 'de' && (
              <>
                Ihre personenbezogenen Daten werden von Dominik Grössl, ID-Nr.:
                14184397, Němčice 26, Postleitzahl 345 06, Tschechische Republik
                (im Folgenden: "Verantwortlicher") sorgfältig verwaltet. E-Mail:
                info@planetopedia.agency Telefon: +420 739 830 034
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>We process the following personal data</>}
            {language === 'cs' && <>Zpracováváme tyto osobní údaje</>}
            {language === 'de' && (
              <>Wir verarbeiten die folgenden personenbezogenen Daten</>
            )}
          </h2>
          <ul className='list-disc ml-6'>
            <li>
              {language === 'en' && <>Full Name</>}
              {language === 'cs' && <>Celé jméno</>}
              {language === 'de' && <>Vollständiger Name</>}
            </li>
            <li>
              {language === 'en' && <>Instagram Account</>}
              {language === 'cs' && <>Účet na Instagramu</>}
              {language === 'de' && <>Instagram-Account</>}
            </li>
            <li>
              {language === 'en' && <>Email address</>}
              {language === 'cs' && <>E-mailová adresa</>}
              {language === 'de' && <>E-Mail Adresse</>}
            </li>
            <li>
              {language === 'en' && <>Brand Name</>}
              {language === 'cs' && <>Název firmy</>}
              {language === 'de' && <>Markenname</>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Purpose and duration of processing</>}
            {language === 'cs' && <>Účel a doba zpracování</>}
            {language === 'de' && <>Zweck und Dauer der Verarbeitung</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We process personal data for the purpose of processing your
                enquiry. The processing time varies according to the purpose.
                For the purpose of processing your enquiry, we store the data
                for 1 year and if you become our client, we store the data for
                the duration of the cooperation.{' '}
              </>
            )}
            {language === 'cs' && (
              <>
                Osobní údaje zpracováváme za účelem vyřízení Vaší poptávky. Doba
                zpracování se liší podle účelu. Pro účel vyřízení Vaší poptávky
                archivujeme data po dobu 1 roku a v případě, že se stanete naším
                klientem, uchováváme data po dobu trvání spolupráce. 
              </>
            )}
            {language === 'de' && (
              <>
                Wir verarbeiten personenbezogene Daten zum Zweck der Bearbeitung
                Ihrer Anfrage. Die Dauer der Verarbeitung variiert je nach
                Zweck. Zum Zwecke der Bearbeitung Ihrer Anfrage speichern wir
                die Daten für 1 Jahr und wenn Sie unser Kunde werden, speichern
                wir die Daten für die Dauer der Zusammenarbeit.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Processors</>}
            {language === 'cs' && <>Zpracovatelé</>}
            {language === 'de' && <>Prozessoren</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We use third-party services to offer you superior service. Below
                you will find a nominal list of them.
              </>
            )}
            {language === 'cs' && (
              <>
                Abychom vám nabízeli špičkové služby, využíváme služby třetích
                stran. Níže najdete jejich jmenovitý seznam.
              </>
            )}
            {language === 'de' && (
              <>
                Wir nutzen Dienste Dritter, um Ihnen einen besseren Service zu
                bieten. Nachstehend finden Sie eine Liste dieser Dienste.
              </>
            )}
          </p>

          <ul className='list-disc ml-6'>
            <li>
              {language === 'en' && <>EmailJS (https://www.emailjs.com)</>}
              {language === 'cs' && <>EmailJS (https://www.emailjs.com)</>}
              {language === 'de' && <>EmailJS (https://www.emailjs.com)</>}
            </li>
            <li>
              {language === 'en' && <>Software provider Google LLC.</>}
              {language === 'cs' && <>Poskytovatel softwaru Google LLC.</>}
              {language === 'de' && <>Software-Anbieter Google LLC.</>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Google Analytics / Cookies</>}
            {language === 'cs' && <>Služba Google Analytics / Cookies</>}
            {language === 'de' && <>Google Analytics / Cookies</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We also use analytical cookies on the website. If you consent,
                this website uses Google Analytics, provided by Google, Inc.
                Google Analytics uses cookies to enable analysis of how users
                use this website. The information generated by the cookie about
                your use of the site (including your IP address) will be
                transmitted to and stored by Google on servers in the United
                States. Google will use this information for the purposes of
                evaluating your use of the website and compiling reports on
                website activity for website operators and for the provision of
                other services relating to website activity and internet usage
                in general. Google may also disclose this information to third
                parties if required to do so by law or if such third parties
                process this information for Google. Google will not associate
                your IP address with any other data in its possession.
              </>
            )}
            {language === 'cs' && (
              <>
                Na webových stránkách využíváme také analytické cookies. V
                případě Vašeho souhlasu využívá tato stránka službu Google
                Analytics, poskytovanou společností Google, Inc. Služba Google
                Analytics používá souborů cookies umožňující analýzu způsobu
                užívání této stránky jejími uživateli. Informace vygenerované
                souborem cookie o užívání stránky (včetně Vaší IP adresy) bude
                společností Google přenesena a uložena na serverech ve Spojených
                státech. Google bude užívat těchto informací pro účely
                vyhodnocování užívání stránky a vytváření zpráv o její aktivitě,
                určených pro její provozovatele, a pro poskytování dalších
                služeb týkajících se činností na stránce a užívání internetu
                vůbec. Google může také poskytnout tyto informace třetím osobám,
                bude-li to požadováno zákonem nebo budou-li takovéto třetí osoby
                zpracovávat tyto informace pro Google. Google nebude spojovat
                Vaší IP adresu s jakýmikoli jinými daty, která má k dispozici.
              </>
            )}
            {language === 'de' && (
              <>
                Wir verwenden auch analytische Cookies auf der Website. Wenn Sie
                zustimmen, verwendet diese Website Google Analytics,
                bereitgestellt von Google Inc. Google Analytics verwendet
                Cookies, um zu analysieren, wie die Nutzer diese Website nutzen.
                Die durch den Cookie erzeugten Informationen über Ihre Benutzung
                dieser Website (einschließlich Ihrer IP-Adresse) werden an einen
                Server von Google in den Vereinigten Staaten übertragen und dort
                gespeichert. Google wird diese Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die
                Websiteaktivitäten für die Websitebetreiber zusammenzustellen
                und um weitere mit der Websitenutzung und der Internetnutzung
                verbundene Dienstleistungen zu erbringen. Auch wird Google diese
                Informationen gegebenenfalls an Dritte übertragen, sofern dies
                gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
                Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
                IP-Adresse mit anderen Daten, die sich in seinem Besitz
                befinden, in Verbindung bringen.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Security and protection of personal data</>}
            {language === 'cs' && <>Zabezpečení a ochrana osobních údajů</>}
            {language === 'de' && (
              <>Sicherheit und Schutz von personenbezogenen Daten</>
            )}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The controller declares that it has taken all appropriate
                technical and organisational measures to safeguard personal
                data.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce prohlašuje, že přijal veškerá vhodná technická a
                organizační opatření k zabezpečení osobních údajů.
              </>
            )}
            {language === 'de' && (
              <>
                Der für die Verarbeitung Verantwortliche erklärt, dass er alle
                geeigneten technischen und organisatorischen Maßnahmen zum
                Schutz personenbezogener Daten getroffen hat.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The controller has taken technical measures to secure data
                storage and storage of personal data in paper form.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce přijal technická opatření k zabezpečení datových úložišť
                a úložišť osobních údajů v listinné podobě.
              </>
            )}
            {language === 'de' && (
              <>
                Der für die Verarbeitung Verantwortliche hat technische
                Maßnahmen zur Sicherung der Datenspeicherung und der Speicherung
                personenbezogener Daten in Papierform getroffen.
              </>
            )}
          </p>
          <p>
            {language === 'en' && (
              <>
                We protect all electronic data stored with a secure protocol
                (HTTPS encrypted with TLS) that protects the connection between
                your web browser and our server from eavesdropping and data
                spoofing.
              </>
            )}
            {language === 'cs' && (
              <>
                Veškerá elektronická data uložená chráníme zabezpečeným
                protokolem (HTTPS šifrovaný pomocí TLS), který chrání spojení
                vašeho webového prohlížeče a našeho serveru před
                odposloucháváním a podvrhy dat.
              </>
            )}
            {language === 'de' && (
              <>
                Wir schützen alle elektronisch gespeicherten Daten mit einem
                sicheren Protokoll (HTTPS verschlüsselt mit TLS), das die
                Verbindung zwischen Ihrem Webbrowser und unserem Server vor
                Abhören und Datenmissbrauch schützt.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Your rights</>}
            {language === 'cs' && <>Vaše práva</>}
            {language === 'de' && <>Ihre Rechte</>}
          </h2>
          <p>
            {language === 'en' && <>Under the terms of the GDPR, you have</>}
            {language === 'cs' && <>Za podmínek stanovených v GDPR máte:</>}
            {language === 'de' && (
              <>
                Nach den Bestimmungen der Datenschutz-Grundverordnung haben Sie
              </>
            )}
          </p>
          <ul className='list-disc ml-6 mb-4'>
            <li>
              {language === 'en' && (
                <>
                  the right of access to your personal data under Article 15
                  GDPR,
                </>
              )}
              {language === 'cs' && (
                <>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</>
              )}
              {language === 'de' && (
                <>
                  das Recht auf Zugang zu Ihren personenbezogenen Daten gemäß
                  Artikel 15 der Datenschutzgrundverordnung,
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  the right to rectification of personal data pursuant to
                  Article 16 GDPR or restriction of processing pursuant to
                  Article 18 GDPR.
                </>
              )}
              {language === 'cs' && (
                <>
                  právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení
                  zpracování dle čl. 18 GDPR.
                </>
              )}
              {language === 'de' && (
                <>
                  das Recht auf Berichtigung personenbezogener Daten gemäß
                  Artikel 16 DSGVO oder auf Einschränkung der Verarbeitung gemäß
                  Artikel 18 DSGVO.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  the right to erasure of personal data pursuant to Article 17
                  GDPR.
                </>
              )}
              {language === 'cs' && (
                <>právo na výmaz osobních údajů dle čl. 17 GDPR.</>
              )}
              {language === 'de' && (
                <>
                  das Recht auf Löschung der personenbezogenen Daten gemäß
                  Artikel 17 DSGVO.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  the right to object to processing under Article 21 of the
                  GDPR; and
                </>
              )}
              {language === 'cs' && (
                <>právo vznést námitku proti zpracování dle čl. 21 GDPR a</>
              )}
              {language === 'de' && (
                <>
                  das Recht auf Widerspruch gegen die Verarbeitung gemäß Artikel
                  21 DSGVO; und
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>the right to data portability under Article 20 GDPR.</>
              )}
              {language === 'cs' && (
                <>právo na přenositelnost údajů dle čl. 20 GDPR.</>
              )}
              {language === 'de' && (
                <>
                  das Recht auf Datenübertragbarkeit gemäß Artikel 20 der
                  Datenschutz-Grundverordnung.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  the right to withdraw consent to processing in writing or
                  electronically to the following address or email:
                  info@planetopedia.agency
                </>
              )}
              {language === 'cs' && (
                <>
                  právo odvolat souhlas se zpracováním písemně nebo elektronicky
                  na adresu nebo email: info@planetopedia.agency
                </>
              )}
              {language === 'de' && (
                <>
                  das Recht, die Zustimmung zur Verarbeitung schriftlich oder
                  elektronisch an die folgende Adresse oder E-Mail zu
                  widerrufen: info@planetopedia.agency
                </>
              )}
            </li>
          </ul>
          <p>
            {language === 'en' && (
              <>
                You also have the right to file a complaint with the Office for
                Personal Data Protection if you believe that your right to
                personal data protection has been violated.
              </>
            )}
            {language === 'cs' && (
              <>
                Dále máte právo podat stížnost u Úřadu pro ochranu osobních
                údajů v případě, že se domníváte, že bylo porušeno Vaší právo na
                ochranu osobních údajů.
              </>
            )}
            {language === 'de' && (
              <>
                Sie haben auch das Recht, eine Beschwerde beim Amt für den
                Schutz personenbezogener Daten einzureichen, wenn Sie der
                Meinung sind, dass Ihr Recht auf Schutz personenbezogener Daten
                verletzt wurde.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Final provisions</>}
            {language === 'cs' && <>Závěrečná ustanovení</>}
            {language === 'de' && <>Schlussbestimmungen</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                By submitting your enquiry via the online form, you confirm that
                you are aware of the privacy policy and that you accept it in
                its entirety.
              </>
            )}
            {language === 'cs' && (
              <>
                Odesláním poptávky prostřednictvím internetového formuláře
                potvrzujete, že jste seznámen/a s podmínkami ochrany osobních
                údajů a že je v celém rozsahu přijímáte.
              </>
            )}
            {language === 'de' && (
              <>
                Indem Sie Ihre Anfrage über das Online-Formular abschicken,
                bestätigen Sie, dass Sie die Datenschutzbestimmungen zur
                Kenntnis genommen haben und sie in vollem Umfang akzeptieren.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                You agree to these terms and conditions by clicking "Submit" via
                the online form. By clicking on "Submit" you confirm that you
                have read the privacy policy and that you accept it in its
                entirety.
              </>
            )}
            {language === 'cs' && (
              <>
                S těmito podmínkami souhlasíte kliknutím na „Odeslat“
                prostřednictvím internetového formuláře. Kliknutím na „Odeslat“
                potvrzujete, že jste seznámen/a s podmínkami ochrany osobních
                údajů a že je v celém rozsahu přijímáte.
              </>
            )}
            {language === 'de' && (
              <>
                Indem Sie im Online-Formular auf "Absenden" klicken, erklären
                Sie sich mit diesen Bestimmungen und Bedingungen einverstanden.
                Indem Sie auf "Absenden" klicken, bestätigen Sie, dass Sie die
                Datenschutzbestimmungen gelesen haben und diese in vollem Umfang
                akzeptieren.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The administrator is entitled to change these conditions. It
                will publish the new version of the Privacy Policy on its
                website or send you a new version of the Privacy Policy to the
                email address you have provided to the Controller.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek
                ochrany osobních údajů zveřejní na svých internetových
                stránkách, případně Vám zašle novou verzi těchto podmínek na
                e-mailovou adresu, kterou jste správci poskytl/a.
              </>
            )}
            {language === 'de' && (
              <>
                Der Verwalter ist berechtigt, diese Bedingungen zu ändern. Er
                wird die neue Version der Datenschutzbestimmungen auf seiner
                Website veröffentlichen oder Ihnen eine neue Version der
                Datenschutzbestimmungen an die E-Mail-Adresse senden, die Sie
                dem für die Verarbeitung Verantwortlichen mitgeteilt haben.
              </>
            )}
          </p>
          <p>
            {language === 'en' && (
              <>These conditions shall take effect on 15 November 2023.</>
            )}
            {language === 'cs' && (
              <>Tyto podmínky nabývají účinnosti dnem 15. 11. 2023.</>
            )}
            {language === 'de' && (
              <>Diese Bedingungen treten am 15. November 2023 in Kraft.</>
            )}
          </p>
        </div>
      </Container>
    </div>
  )
}
