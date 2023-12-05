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
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>Kdo jsme a jak nás kontaktovat - správce osobních údajů</>
            )}
            {language === 'de' && <></>}
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
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>We process the following personal data</>}
            {language === 'cs' && <>Zpracováváme tyto osobní údaje</>}
            {language === 'de' && (
              <>Wir verarbeiten die folgenden personenbezogenen Daten</>
            )}
          </h2>
          <p>
            {language === 'en' && <></>}
            {language === 'cs' && <>Správce zpracovává tyto údaje:</>}
            {language === 'de' && <></>}
          </p>
          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && <>Full Name</>}
              {language === 'cs' && <>Celé jméno</>}
              {language === 'de' && <>Vollständiger Name</>}
            </li>
            <li>
              {language === 'en' && <>Instagram Username</>}
              {language === 'cs' && <>Uživatelské Instagram jméno</>}
              {language === 'de' && <>Instagram-Benutzername</>}
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
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>
                  Identifikační údaje obsažené ve smlouvě o poskytování služeb
                </>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <>Purpose and duration of processing</>}
            {language === 'cs' && <>Účel zpracování</>}
            {language === 'de' && <>Zweck und Dauer der Verarbeitung</>}
          </h2>
          <p className='mb-4'>
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
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>Zákonným důvodem zpracování osobních údajů je</>
            )}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Účelem zpracování osobních údajů je</>}
            {language === 'de' && <></>}
          </p>
          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Právní základ zpracování</>}
            {language === 'de' && <></>}
          </h2>

          <ul className='ml-6 list-disc'>
            <li>
              {language === 'en' && <></>}
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
              {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Doba zpracování</>}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Správce osobní údaje zpracovává od okamžiku, kdy mu je klient
                poskytl či poskytl svůj souhlas ke zpracovávání.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Po uplynutí doby uchovávání osobních údajů správce osobní údaje
                vymaže.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && <></>}
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
            {language === 'en' && <>Security and protection of personal data</>}
            {language === 'cs' && <>Příjemci osobních údajů</>}
            {language === 'de' && (
              <>Sicherheit und Schutz von personenbezogenen Daten</>
            )}
          </h2>
          <p className='mb-4'>
            {language === 'en' && <></>}
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
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>
                  podílející se na realizaci služeb/realizaci plateb na základě
                  smlouvy,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>podílející se na zajištění provozu služeb,</>
              )}
              {language === 'de' && <></>}
            </li>
          </ul>

          <p className='mb-4'>
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Úmysl předat údaje do třetí země: není</>}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <></>}
            {language === 'cs' && <>Zpracovatelé</>}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Abychom vám nabízeli špičkové služby, využíváme služby třetích
                stran. Níže najdete jejich jmenovitý seznam.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && <>EmailJS (https://www.emailjs.com)</>}
              {language === 'cs' && <>EmailJS (https://www.emailjs.com)</>}
              {language === 'de' && <>EmailJS (https://www.emailjs.com)</>}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>Zdroje a kategorie zpracovávaných osobních údajů</>
            )}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>Správce získává osobní údaje pouze od daného klienta.</>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Zabezpečení a ochrana osobních údajů</>}
            {language === 'de' && <></>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Správce prohlašuje, že přijal veškerá vhodná technická a
                organizační opatření k zabezpečení osobních údajů.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p className='mb-4'>
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Správce přijal technická opatření k zabezpečení datových úložišť
                a úložišť osobních údajů v listinné podobě.
              </>
            )}
            {language === 'de' && <></>}
          </p>
          <p>
            {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && <>Vaše práva</>}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && <></>}
            {language === 'cs' && <>Za podmínek stanovených v GDPR máte:</>}
            {language === 'de' && <></>}
          </p>
          <ul className='mb-4 ml-6 list-disc'>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>
                  právo k vyžádání si kopie zpracovávaných osobních údajů dle
                  čl. 15 GDPR,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>
                  právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení
                  zpracování dle čl. 18 GDPR,
                </>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>právo na výmaz osobních údajů dle čl. 17 GDPR,</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>právo vznést námitku proti zpracování dle čl. 21 GDPR a</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
              {language === 'cs' && (
                <>právo na přenositelnost údajů dle čl. 20 GDPR.</>
              )}
              {language === 'de' && <></>}
            </li>
            <li>
              {language === 'en' && <></>}
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
            {language === 'en' && <></>}
            {language === 'cs' && (
              <>
                Dále máte právo podat stížnost u Úřadu pro ochranu osobních
                údajů, v případě, že se domníváte, že bylo porušeno Vaší právo
                na ochranu osobních údajů. Klient tímto bere na vědomí, že u
                správce nedochází k automatizovanému rozhodování, vč.
                profilování.
              </>
            )}
            {language === 'de' && <></>}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {language === 'en' && <></>}
            {language === 'cs' && <>Kontaktní údaje</>}
            {language === 'de' && <></>}
          </h2>
          <p>
            {language === 'en' && <></>}
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
