'use client'

import Container from '@/components/Container'
import { useLanguage } from '@/store/useLanguage'

export default function Page() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='pt-24 pb-20 md:pt-32 md:pb-32'>
        <h2 className='mb-10 text-3xl font-semibold md:text-4xl lg:text-5xl'>
          {language === 'en' && <>Privacy Policy</>}
          {language === 'cs' && <>Zásady ochrany osobních údajů</>}
          {language === 'de' && <>Datenschutzrichtlinie</>}
        </h2>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
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
                informace o tom, jaké údaje máme k dispozici a jak s nimi
                nakládáme. Ochrana osobních údajů se řídí nařízením GDPR
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

          <p>
            {language === 'en' && (
              <>
                Personal data means any information about an identified or
                identifiable natural person; an identifiable natural person
                refers to a natural person who can be directly or indirectly
                identified, in particular, using a specific identifier such as a
                name, an identification number, location data, a network
                identifier or one or more particular elements of the physical,
                physiological, genetic, mental, economic, cultural or social
                identity of such natural person.
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
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && (
              <>Who we are and how to contact us - data controller</>
            )}
            {language === 'cs' && (
              <>Kdo jsme a jak nás kontaktovat - správce osobních údajů</>
            )}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                Your personal data is carefully managed by Dominik Grössl,
                Company Reg. No.: 14184397, Němčice 26, Postal Code 345 06,
                Czech Republic (hereinafter referred to as the “Controller”).
                <br />
                E-mail: info@planetopedia.agency
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
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>We process the following personal data</>}
            {language === 'cs' && <>Zpracováváme tyto osobní údaje</>}
            {language === 'de' && (
              <>Wir verarbeiten die folgenden personenbezogenen Daten</>
            )}
          </h2>
          <p>
            {language === 'en' && (
              <>The Controller processes the following data:</>
            )}
            {language === 'cs' && <>Správce zpracovává tyto údaje:</>}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && <>Full name</>}
              {language === 'cs' && <>Celé jméno</>}
              {language === 'de' && <>Vollständiger Name</>}
            </li>
            <li>
              {language === 'en' && <>Instagram username</>}
              {language === 'cs' && <>Uživatelské Instagram jméno</>}
              {language === 'de' && <>Instagram-Benutzername</>}
            </li>
            <li>
              {language === 'en' && <>E-mail address</>}
              {language === 'cs' && <>E-mailová adresa</>}
              {language === 'de' && <>E-Mail Adresse</>}
            </li>
            <li>
              {language === 'en' && <>Company name</>}
              {language === 'cs' && <>Název firmy</>}
              {language === 'de' && <>Markenname</>}
            </li>
            <li>
              {language === 'en' && (
                <>Identification data contained in the service contract.</>
              )}
              {language === 'cs' && (
                <>
                  Identifikační údaje obsažené ve smlouvě o poskytování služeb
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>

          <p>
            {language === 'en' && (
              <>
                We collect the aforementioned data to the extent necessary to
                identify you as our Client; we do not process your other
                personal data.
              </>
            )}
            {language === 'cs' && (
              <>
                Tyto údaje sbíráme v rozsahu nezbytném pro Vaši identifikaci,
                jakožto našeho klienta, jiné Vaše osobní údaje nezpracováváme.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Purpose of processing</>}
            {language === 'cs' && <>Účel zpracování</>}
            {language === 'de' && <>Zweck und Dauer der Verarbeitung</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                We process your personal data to fulfil all our legal and
                contractual obligations related to processing your enquiry.
              </>
            )}
            {language === 'cs' && (
              <>
                Osobní údaje zpracováváme za účelem plnění všech svých právních
                a smluvních povinností souvisejících s vyřízení Vaší poptávky.
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
          <p>
            {language === 'en' && (
              <>Our legal basis for processing personal data is:</>
            )}
            {language === 'cs' && (
              <>Zákonným důvodem zpracování osobních údajů je</>
            )}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && (
                <>
                  The performance of a contract between you and the Controller
                  pursuant to Article 6(1)(b) of the GDPR
                </>
              )}
              {language === 'cs' && (
                <>
                  plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm.
                  b) GDPR,
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>
          <p>
            {language === 'en' && (
              <>The purpose of the processing of personal data is to</>
            )}
            {language === 'cs' && <>Účelem zpracování osobních údajů je</>}
            {language === 'de' && <></>}
          </p>
          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && (
                <>
                  Process your enquiry and exercise the rights and obligations
                  arising from the contractual relationship between you and the
                  Controller. When you place an order, we need to obtain
                  personal data to successfully process it (name and address,
                  contact details). The provision of personal data is necessary
                  for the conclusion and performance of the contract; without
                  your personal data, the Controller cannot conclude or perform
                  the contract.
                </>
              )}
              {language === 'cs' && (
                <>
                  vyřízení Vaší poptávky a výkon práv a povinností vyplývajících
                  ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou
                  vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení
                  objednávky (jméno a adresa, kontakt), poskytnutí osobních
                  údajů je nutným požadavkem pro uzavření a plnění smlouvy, bez
                  poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze
                  strany správce plnit,
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Legal grounds for processing</>}
            {language === 'cs' && <>Právní základ zpracování</>}
            {language === 'de' && <></>}
          </h2>

          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && (
                <>
                  The Controller processes personal data to fulfil all his legal
                  and contractual obligations. Another legal ground comprises
                  the Controller’s legitimate interests, such as protecting the
                  Controller’s property and persons or enforcing the
                  Controller’s legal claims.
                </>
              )}
              {language === 'cs' && (
                <>
                  Správce zpracovává osobní údaje z důvodu plnění všech svých
                  právních a smluvních povinností. Dalším právním důvodem jsou
                  oprávněné zájmy správce jako např.: ochrana majetku správce a
                  osob či vymáhání právních nároků správce.
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The accounting and tax documents used to bill for the services
                  provided contain some personal data (name and surname of the
                  Client, type and scope of the service provided). We keep such
                  documents only to comply with the obligations imposed by the
                  relevant accounting and tax legislation for the period
                  required by such legislation.
                </>
              )}
              {language === 'cs' && (
                <>
                  Účetní a daňové doklady, na základě kterých je poskytnuta péči
                  vyúčtovávána, obsahují některé osobní údaje (jméno a příjmení
                  klienta, typ a rozsah poskytnuté služby). Tyto doklady
                  uchováváme pouze pro účely splnění povinností stanovených
                  relevantními účetními a daňovými právními předpisy, po dobu
                  uloženou těmito předpisy.
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Processing period</>}
            {language === 'cs' && <>Doba zpracování</>}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller starts processing personal data when the Client
                has provided it to the Controller or has consented to the
                processing.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce osobní údaje zpracovává od okamžiku, kdy mu je klient
                poskytl či poskytl svůj souhlas ke zpracovávání.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The personal data is stored in compliance with the applicable
                legal regulations or until the consent granted for the purpose
                is withdrawn.
              </>
            )}
            {language === 'cs' && (
              <>
                Osobní údaje jsou uloženy dle platných právních předpisů či do
                odvolání souhlasu, na základě kterého byly pro daný účel
                poskytnuty.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller shall retain personal data for the period
                necessary to exercise the rights and obligations arising from
                the contractual relationship between you and the Controller and
                to assert claims arising from such contractual relationship (for
                ten (10) years from the termination of the contractual
                relationship).
              </>
            )}
            {language === 'cs' && (
              <>
                Správce uchovává osobní údaje po dobu nezbytnou k výkonu práv a
                povinností vyplývajících ze smluvního vztahu mezi Vámi a
                správcem a uplatňování nároků z těchto smluvních vztahů (po dobu
                10 let od ukončení smluvního vztahu).
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller shall delete the personal data after the expiry
                of the retention period.
              </>
            )}
            {language === 'cs' && (
              <>
                Po uplynutí doby uchovávání osobních údajů správce osobní údaje
                vymaže.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                If you become our Client, we shall retain your data for the
                duration of our cooperation.
              </>
            )}
            {language === 'cs' && (
              <>
                A v případě, že se stanete naším klientem, uchováváme data po
                dobu trvání spolupráce.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Personal data recipients</>}
            {language === 'cs' && <>Příjemci osobních údajů</>}
            {language === 'de' && (
              <>Sicherheit und Schutz von personenbezogenen Daten</>
            )}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                In addition to the Client, the recipients of the personal data
                may include, in accordance with the provisions of the
                legislation, the Controller, employees authorised by the
                Controller and public authorities within the limits set by the
                legislation. The recipients of personal data may also include
                the following persons:
              </>
            )}
            {language === 'cs' && (
              <>
                Příjemci osobních údajů mohou v souladu s ustanoveními právních
                předpisů v konkrétních případech být, kromě klienta, správce,
                jím pověření zaměstnanci a orgány veřejné moci v mezích
                stanovených právními předpisy. Příjemci osobních údajů dále
                mohou být osoby:
              </>
            )}
            {language === 'de' && <></>}
          </p>

          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && (
                <>
                  Participating in the implementation of services/payments under
                  the contract,
                </>
              )}
              {language === 'cs' && (
                <>
                  podílející se na realizaci služeb/realizaci plateb na základě
                  smlouvy,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>Involved in the operation of the services:</>
              )}
              {language === 'cs' && (
                <>podílející se na zajištění provozu služeb,</>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                In addition to the Controller, personal data may be processed by
                processors to support the Controller’s activities (e.g.,
                collection of receivables or legal services) based on data
                processing contracts concluded in accordance with the General
                Data Protection Regulation. The processors shall only be
                provided with the personal data necessary for the purpose and
                only with the data of those clients to whom the specific support
                activity relates. The data processors providing the above
                activities are carefully selected.
              </>
            )}
            {language === 'cs' && (
              <>
                Osobní údaje mohou být pro zajištění podpůrné činnosti správce
                (např. vymáhání pohledávek či právní služby) zpracovávány vedle
                správce také zpracovateli, a to na základě smluv o zpracování
                osobních údajů uzavřených v souladu s obecným nařízením o
                ochraně osobních údajů. Zpracovatelům jsou předávány pouze
                osobní údaje nezbytné pro daný účel, a to pouze údaje těch
                klientů, kterých se konkrétní podpůrná činnost týká.
                Zpracovatelé osobních údajů zajišťující výše uvedené činnosti
                jsou pečlivě vybíráni.
              </>
            )}
            {language === 'de' && <></>}
          </p>

          <p>
            {language === 'en' && (
              <>Intention to transfer data to a third country: None</>
            )}
            {language === 'cs' && <>Úmysl předat údaje do třetí země: není</>}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && (
              <>Sources and categories of personal data processed</>
            )}
            {language === 'cs' && (
              <>Zdroje a kategorie zpracovávaných osobních údajů</>
            )}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller shall only obtain personal data from the Client
                in question.
              </>
            )}
            {language === 'cs' && (
              <>Správce získává osobní údaje pouze od daného klienta.</>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller shall process personal data provided by you or
                personal data obtained by the Controller as a result of the
                fulfilment of your enquiry.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce zpracovává osobní údaje, které jste mu poskytli nebo
                osobní údaje, které správce získal na základě plnění Vaší
                poptávky.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p>
            {language === 'en' && (
              <>
                The Controller shall process your identification and contact
                data and data necessary for the performance of the contract.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce zpracovává Vaše identifikační a kontaktní údaje a údaje
                nezbytné pro plnění smlouvy.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Security and protection of personal data</>}
            {language === 'cs' && <>Zabezpečení a ochrana osobních údajů</>}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller declares that all processing of the Client’s
                personal data, or any necessary transfer thereof, shall be
                conducted with full respect for the Client’s privacy and in
                accordance with applicable law.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce prohlašuje, že veškeré zpracování osobních údajů
                klienta, popřípadě jejich nezbytné předávání, je prováděno plně
                s ohledem na soukromí klienta a v souladu s platnými právními
                předpisy.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller shall treat personal data as the property of the
                Clients and shall be entitled to use it in particular for its
                purposes as listed in this measure.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce k osobním údajům přistupuje jako k vlastnictví klientů,
                které je oprávněn používat zejména pro své účely vyjmenované v
                tomto opatření.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller declares he has taken all appropriate technical
                and organisational measures to secure the personal data.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce prohlašuje, že přijal veškerá vhodná technická a
                organizační opatření k zabezpečení osobních údajů.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller has taken technical measures to secure data
                storage and storage of personal data in paper form.
              </>
            )}
            {language === 'cs' && (
              <>
                Správce přijal technická opatření k zabezpečení datových úložišť
                a úložišť osobních údajů v listinné podobě.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p>
            {language === 'en' && (
              <>
                We protect all electronic data stored by a secure protocol
                (HTTPS encrypted with TLS), which covers the connection between
                your web browser and our server from eavesdropping and data
                fraud.
              </>
            )}
            {language === 'cs' && (
              <>
                Veškerá elektronická data uložená chráníme zabezpečeným
                protokolem (HTTPS šifrovaný pomocí TLS), který chrání spojení
                vašeho webového prohlížeče a našeho serveru před
                odposloucháváním a podvrhy dat.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Your rights</>}
            {language === 'cs' && <>Vaše práva</>}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && (
              <>Under the terms and conditions set out in the GDPR, you have:</>
            )}
            {language === 'cs' && <>Za podmínek stanovených v GDPR máte:</>}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && (
                <>
                  The right of access to your personal data under Article 15 of
                  the GDPR,
                </>
              )}
              {language === 'cs' && (
                <>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The right to request a copy of the personal data processed
                  pursuant to Article 15 GDPR,
                </>
              )}
              {language === 'cs' && (
                <>
                  právo k vyžádání si kopie zpracovávaných osobních údajů dle
                  čl. 15 GDPR,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The right to rectification of personal data pursuant to
                  Article 16 GDPR, or restriction of processing pursuant to
                  Article 18 GDPR,
                </>
              )}
              {language === 'cs' && (
                <>
                  právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení
                  zpracování dle čl. 18 GDPR,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The right to the erasure of personal data pursuant to Article
                  17 GDPR,
                </>
              )}
              {language === 'cs' && (
                <>právo na výmaz osobních údajů dle čl. 17 GDPR,</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The right to object to processing under Article 21 GDPR; and
                </>
              )}
              {language === 'cs' && (
                <>právo vznést námitku proti zpracování dle čl. 21 GDPR a</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>The right to data portability under Article 20 GDPR.</>
              )}
              {language === 'cs' && (
                <>právo na přenositelnost údajů dle čl. 20 GDPR.</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  The right to withdraw consent to processing in writing or
                  electronically to the following address or e-mail:
                  info@planetopedia.agency
                </>
              )}
              {language === 'cs' && (
                <>
                  právo odvolat souhlas se zpracováním písemně nebo elektronicky
                  na adresu nebo email: info@planetopedia.agency
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>
          <p>
            {language === 'en' && (
              <>
                You also have the right to lodge a complaint with the Office for
                Personal Data Protection, located at Pplk. Sochora 27, 170 00
                Prague 7, if you believe that your right to personal data
                protection has been violated. The Client hereby acknowledges
                that no automated decision-making, including profiling, takes
                place at the controller.
              </>
            )}
            {language === 'cs' && (
              <>
                Dále máte právo podat stížnost u Úřadu pro ochranu osobních
                údajů, se sídlem Pplk. Sochora 27, 170 00 Praha 7, v případě, že
                se domníváte, že bylo porušeno Vaší právo na ochranu osobních
                údajů. Klient tímto bere na vědomí, že u správce nedochází k
                automatizovanému rozhodování, vč. profilování.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Contact details</>}
            {language === 'cs' && <>Kontaktní údaje</>}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                In case of any uncertainties or questions regarding processing
                your personal data, please feel free to contact us in writing at
                any time at Dominik Grössl, Němčice 26, Postal Code 345 06,
                Czech Republic.
              </>
            )}
            {language === 'cs' && (
              <>
                V případě jakýchkoli nejasností, či dotazů ohledně zpracovávání
                Vašich osobních údajů se na nás můžete kdykoli obrátit písemně
                na adrese: Dominik Grössl, Němčice 26, PSČ 345 06, Česká
                republika.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Concluding provisions</>}
            {language === 'cs' && <>Závěrečná ustanovení</>}
            {language === 'de' && <>Schlussbestimmungen</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                By sending your enquiry to the email address
                info@planetopedia.agency you confirm that you are aware of the
                terms and conditions of personal data protection and that you
                accept them in their entirety.
              </>
            )}
            {language === 'cs' && (
              <>
                Odesláním poptávky na emailovou adresu info@planetopedia.agency
                potvrzujete, že jste seznámen/a s podmínkami ochrany osobních
                údajů a že je v celém rozsahu přijímáte.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Controller is entitled to change the present terms and
                conditions. He shall publish the new version of the Privacy
                Policy on his website or send you a new version to the e-mail
                address you provided to the Controller.
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
          <p className='mb-4'>
            {language === 'en' && (
              <>The controller has not appointed a data protection officer.</>
            )}
            {language === 'cs' && (
              <>Správce nejmenoval pověřence pro ochranu osobních údajů.</>
            )}
            {language === 'de' && <></>}
          </p>
          <p>
            {language === 'en' && (
              <>
                The present terms and conditions will take effect on November
                15th, 2023.
              </>
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
