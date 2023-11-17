'use client'

import Container from '@/components/Container'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'

export default function Page() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='pt-24 pb-20 md:pt-32 md:pb-32'>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Privacy Policy of Planetopedia</>}
            {language === 'cs' && (
              <>Zásady ochrany osobních údajů společnosti Planetopedia</>
            )}
            {language === 'de' && <>Datenschutzrichtlinie von Planetopedia</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                Your personal data are carefully administered by Dominik Grössl,
                ID No.: 14184397, Němčice 26, Post Code 345 06, Czech Republic.
              </>
            )}
            {language === 'cs' && (
              <>
                Vaše osobní údaje pečlivě spravuje Dominik Grössl, ID Č.:
                14184397, Němčice 26, PSČ 345 06, Česká republika.
              </>
            )}
            {language === 'de' && (
              <>
                Ihre persönlichen Daten werden sorgfältig verwaltet von Dominik
                Grössl, ID Nr.: 14184397, Němčice 26, Postleitzahl 345 06,
                Tschechische Republik.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && <>Planetopedia operates the</>}
            {language === 'cs' && <>Planetopedia provozuje</>}
            {language === 'de' && <>Planetopedia betreibt die</>}
            <Link href='https://planetopedia.agency' className='underline'>
              {' '}
              https://planetopedia.agency{' '}
            </Link>
            {language === 'en' && <>website, which provides the SERVICE.</>}
            {language === 'cs' && <>webové stránky, které poskytují službu.</>}
            {language === 'de' && <>Website, die den SERVICE bietet.</>}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                These personal data protection principles tell you when and how
                we will handle your personal data and what rights you have with
                respect to your personal data. If you have any questions
                concerning the processing of personal data, please contact us at
                info@planetopedia.agency.
              </>
            )}
            {language === 'cs' && (
              <>
                V těchto zásadách ochrany osobních údajů se dozvíte, kdy a jak.
                budeme nakládat s vašimi osobními údaji a jaká máte práva v
                souvislosti s jejich zpracováním. s vašimi osobními údaji. Pokud
                máte jakékoli dotazy týkající se zpracování osobních údajů,
                kontaktujte nás na adrese info@planetopedia.agency.
              </>
            )}
            {language === 'de' && (
              <>
                Diese Grundsätze zum Schutz personenbezogener Daten sagen Ihnen,
                wann und wie wir mit Ihren persönlichen Daten umgehen und welche
                Rechte Sie in Bezug auf Ihre in Bezug auf Ihre personenbezogenen
                Daten haben. Wenn Sie Fragen haben bezüglich der Verarbeitung
                personenbezogener Daten haben, kontaktieren Sie uns bitte unter
                info@planetopedia.agency.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                We always process your personal data in compliance with the
                regulations, within the meaning of Regulation (EU) 2016/679 of
                the European Parliament and of the Council on the protection of
                natural persons with regard to the processing of personal data
                and on the free movement of such data, and repealing Directive
                95/46/EC (General Data Protection Regulation) ("Regulation").
              </>
            )}
            {language === 'cs' && (
              <>
                Vaše osobní údaje vždy zpracováváme v souladu se zákonem o
                ochraně osobních údajů. předpisy ve smyslu nařízení (EU)
                2016/679. Evropského parlamentu a Rady o ochraně fyzických osob
                v souvislosti se zpracováním osobních údajů. osob v souvislosti
                se zpracováním osobních údajů a o ochraně osobních údajů. volném
                pohybu těchto údajů a o zrušení směrnice 95/46/ES. (obecné
                nařízení o ochraně osobních údajů) (dále jen "nařízení").
              </>
            )}
            {language === 'de' && (
              <>
                Wir verarbeiten Ihre personenbezogenen Daten stets in
                Übereinstimmung mit den Vorschriften im Sinne der Verordnung
                (EU) 2016/679 des Europäischen Parlaments und des Rates zum
                Schutz natürlicher Personen bei der Personen bei der
                Verarbeitung personenbezogener Daten und zum freien und zum
                freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG
                (Allgemeine Datenschutzverordnung) ("Verordnung").
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                This page is used to inform website visitors regarding our
                policies with the collection, use, and disclosure of Personal
                Information if anyone decided to use our Service, the
                Planetopedia website.
              </>
            )}
            {language === 'cs' && (
              <>
                Tato stránka slouží k informování návštěvníků webových stránek o
                našich zásadách. se shromažďováním, používáním a zveřejňováním
                osobních údajů, pokud se někdo rozhodl používat naši službu,
                webové stránky Planetopedia.
              </>
            )}
            {language === 'de' && (
              <>
                Diese Seite dient dazu, die Besucher unserer Website über unsere
                Richtlinien mit der Sammlung, Verwendung und Offenlegung von
                persönlichen Informationen, wenn jemand beschlossen hat, unseren
                Service, die Planetopedia-Website, zu nutzen.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                If you choose to use our Service, then you agree to the
                collection and use of information in relation with this policy.
                The Personal Information that we collect are used for providing
                and improving the Service. We will not use or share your
                information with anyone except as described in this Privacy
                Policy.
              </>
            )}
            {language === 'cs' && (
              <>
                Pokud se rozhodnete používat naši službu, souhlasíte se
                shromažďováním a používání informací v souladu s těmito
                zásadami. Osobní Informace, které shromažďujeme, jsou používány
                k poskytování a zlepšování služeb. Služby. Vaše údaje nebudeme
                používat ani s nikým sdílet. s výjimkou případů popsaných v
                těchto Zásadách ochrany osobních údajů.
              </>
            )}
            {language === 'de' && (
              <>
                Wenn Sie sich entscheiden, unseren Dienst zu nutzen, erklären
                Sie sich mit der Sammlung und der Verwendung von Informationen
                in Verbindung mit dieser Richtlinie zu. Die persönlichen
                Informationen, die wir sammeln, werden für die Bereitstellung
                und Verbesserung des Dienstes. Wir werden Ihre Informationen
                nicht verwenden oder an Dritte weitergeben außer wie in dieser
                Datenschutzrichtlinie beschrieben.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                The terms used in this Privacy Policy have the same meanings as
                in our Terms and Conditions, which is accessible at{' '}
              </>
            )}
            {language === 'cs' && (
              <>
                Pojmy použité v těchto Zásadách ochrany osobních údajů mají
                stejný význam jako v těchto Zásadách. v našich smluvních
                podmínkách, které jsou k dispozici na adrese{' '}
              </>
            )}
            {language === 'de' && (
              <>
                Die in dieser Datenschutzrichtlinie verwendeten Begriffe haben
                die gleiche Bedeutung wie in unseren Allgemeinen
                Geschäftsbedingungen, die unter folgender Adresse abrufbar sind{' '}
              </>
            )}
            <Link href='https://planetopedia.agency' className='underline'>
              https://planetopedia.agency
            </Link>
            {language === 'en' && (
              <>, unless otherwise defined in this Privacy Policy.</>
            )}
            {language === 'cs' && (
              <>
                , pokud není v těchto Zásadách ochrany osobních údajů definováno
                jinak.
              </>
            )}
            {language === 'de' && (
              <>
                sofern in dieser Datenschutzrichtlinie nicht anders definiert.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Information Collection and Use</>}
            {language === 'cs' && <>Shromažďování a používání informací</>}
            {language === 'de' && (
              <>Sammlung und Verwendung von Informationen</>
            )}
          </h2>
          <p>
            {language === 'en' && (
              <>
                For a better experience while using our Service, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to your name, phone
                number, and postal address. The information that we collect will
                be used to contact or identify you.
              </>
            )}
            {language === 'cs' && (
              <>
                Pro lepší zážitek z používání naší služby můžeme požadovat.
                abyste nám poskytli určité osobní údaje, mimo jiné vaše jméno,
                telefonní číslo a poštovní adresu. adresu. Informace, které
                shromažďujeme, budou použity ke kontaktování nebo k vaší
                identifikaci.
              </>
            )}
            {language === 'de' && (
              <>
                Um Ihnen die Nutzung unseres Dienstes zu erleichtern, können wir
                Sie auffordern bestimmte persönlich identifizierbare
                Informationen zu übermitteln, einschließlich, aber nicht
                beschränkt auf Ihren Namen, Telefonnummer und Postanschrift
                Adresse. Die von uns gesammelten Informationen werden verwendet,
                um Sie zu kontaktieren oder Sie zu identifizieren.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Log Data</>}
            {language === 'cs' && <>Data protokolu</>}
            {language === 'de' && <>Protokolldaten</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We want to inform you that whenever you visit our Service, we
                collect information that your browser sends to us that is called
                Log Data. This Log Data may include information such as your
                computer's Internet Protocol ("IP") address, browser version,
                pages of our Service that you visit, the time and date of your
                visit, the time spent on those pages, and other statistics.
              </>
            )}
            {language === 'cs' && (
              <>
                Rádi bychom vás informovali, že kdykoli navštívíte naši službu.
                shromažďujeme informace, které nám váš prohlížeč odesílá a které
                se nazývají protokoly. Data. Tato data protokolu mohou obsahovat
                informace, jako je například číslo vašeho počítače. adresa
                internetového protokolu ("IP"), verze prohlížeče, stránky našeho
                webu. služby, které jste navštívili, čas a datum vaší návštěvy,
                čas strávené na těchto stránkách a další statistiky.
              </>
            )}
            {language === 'de' && (
              <>
                Wir möchten Sie darüber informieren, dass wir jedes Mal, wenn
                Sie unseren Dienst besuchen Informationen sammeln, die Ihr
                Browser an uns sendet und die als Log Daten. Diese
                Protokolldaten können Informationen enthalten wie die
                Internet-Protokoll-Adresse ("IP") Ihres Computers,
                Browser-Version, besuchte Seiten unseres Seiten unseres
                Dienstes, die Sie besuchen, die Zeit und das Datum Ihres
                Besuchs, die Zeit, die Sie auf diesen Seiten verbracht haben,
                und andere Statistiken.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Cookies</>}
            {language === 'cs' && <>Soubory cookie</>}
            {language === 'de' && <>Cookies</>}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                Cookies are files with small amount of data that is commonly
                used an anonymous unique identifier. These are sent to your
                browser from the website that you visit and are stored on your
                computer's hard drive.
              </>
            )}
            {language === 'cs' && (
              <>
                Soubory cookie jsou soubory s malým množstvím dat, které se
                běžně používají. anonymní jedinečný identifikátor. Jsou
                odesílány do vašeho prohlížeče z webové stránky, kterou
                navštívíte, a ukládají se na pevný disk vašeho počítače.
              </>
            )}
            {language === 'de' && (
              <>
                Cookies sind Dateien mit kleinen Datenmengen, die in der Regel
                als anonyme eindeutige Kennung. Sie werden von der besuchten
                Website an Ihren Browser gesendet Website, die Sie besuchen, an
                Ihren Browser gesendet und auf der Festplatte Ihres Computers
                gespeichert.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                Our website uses these "cookies" to collection information and
                to improve our Service. You have the option to either accept or
                refuse these cookies, and know when a cookie is being sent to
                your computer. If you choose to refuse our cookies, you may not
                be able to use some portions of our Service.
              </>
            )}
            {language === 'cs' && (
              <>
                Naše webové stránky používají tyto "soubory cookie" ke
                shromažďování informací a k. zlepšování našich služeb. Máte
                možnost je přijmout nebo odmítnout. tyto soubory cookie a vědět,
                kdy jsou soubory cookie odesílány na váš počítač. počítači.
                Pokud se rozhodnete naše soubory cookie odmítnout, je možné, že
                nebudete moci používat některé části naší služby.
              </>
            )}
            {language === 'de' && (
              <>
                Unsere Website verwendet diese "Cookies" zur Sammlung von
                Informationen und zur unseren Service zu verbessern. Sie haben
                die Möglichkeit, diese Cookies entweder zu akzeptieren oder
                abzulehnen Sie haben die Möglichkeit, diese Cookies zu
                akzeptieren oder abzulehnen und zu wissen, wenn ein Cookie an
                Ihren Computer gesendet wird. Computer gesendet wird. Wenn Sie
                sich dafür entscheiden, unsere Cookies abzulehnen, können Sie
                möglicherweise nicht einige Teile unseres Dienstes nicht nutzen
                können.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Service Providers</>}
            {language === 'cs' && <>Poskytovatelé služeb</>}
            {language === 'de' && <>Anbieter von Dienstleistungen</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We may employ third-party companies and individuals due to the
                following reasons:
              </>
            )}
            {language === 'cs' && (
              <>
                Můžeme zaměstnávat společnosti a jednotlivce třetích stran z
                důvodu z následujících důvodů:
              </>
            )}
            {language === 'de' && (
              <>
                Wir können Drittunternehmen und Einzelpersonen aus folgenden
                Gründen beschäftigen folgenden Gründen:
              </>
            )}
          </p>

          <ul className='list-decimal ml-6'>
            <li>
              {language === 'en' && <>To facilitate our Service;</>}
              {language === 'cs' && <>Pro usnadnění našich služeb;</>}
              {language === 'de' && <>Um unseren Service zu erleichtern;</>}
            </li>
            <li>
              {language === 'en' && <>To provide the Service on our behalf;</>}
              {language === 'cs' && <>Poskytování služby naším jménem;</>}
              {language === 'de' && (
                <>Zur Bereitstellung des Dienstes in unserem Namen;</>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>To perform Service-related services; or</>
              )}
              {language === 'cs' && (
                <>Provádění služeb souvisejících se službou nebo</>
              )}
              {language === 'de' && (
                <>um dienstbezogene Dienstleistungen zu erbringen; oder</>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>To assist us in analyzing how our Service is used.</>
              )}
              {language === 'cs' && (
                <>Aby nám pomohly analyzovat, jak je naše služba využívána.</>
              )}
              {language === 'de' && (
                <>
                  Um uns bei der Analyse der Nutzung unseres Dienstes zu
                  unterstützen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  We want to inform our Service users that these third parties
                  have access to your Personal Information. The reason is to
                  perform the tasks assigned to them on our behalf. However,
                  they are obligated not to disclose or use the information for
                  any other purpose.
                </>
              )}
              {language === 'cs' && (
                <>
                  Chceme informovat uživatele našich služeb, že tyto třetí
                  strany mají přístup k vašim osobním údajům. Důvodem je
                  provádění úkolů, které jim byly naším jménem přiděleny. Jsou
                  však povinny tyto informace nezveřejňovat ani nepoužívat k
                  jiným účelům.
                </>
              )}
              {language === 'de' && (
                <>
                  Wir möchten die Nutzer unseres Dienstes darüber informieren,
                  dass diese Drittparteien Zugang zu Ihren persönlichen
                  Informationen haben. Der Grund dafür ist die Erfüllung der
                  Aufgaben zu erfüllen, die ihnen in unserem Namen übertragen
                  wurden. Sie sind jedoch verpflichtet die Informationen nicht
                  für andere Zwecke weiterzugeben oder zu verwenden.
                </>
              )}
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Security</>}
            {language === 'cs' && <>Zabezpečení</>}
            {language === 'de' && <>Sicherheit</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </>
            )}
            {language === 'cs' && (
              <>
                Vážíme si vaší důvěry, s níž nám poskytujete své osobní údaje, a
                proto. se snažíme používat komerčně přijatelné prostředky
                ochrany. jejich ochrany. Pamatujte však, že žádný způsob přenosu
                přes internet, ani způsob elektronického ukládání není
                stoprocentně bezpečný a spolehlivý a my nemůžeme zaručit jejich
                absolutní bezpečnost.
              </>
            )}
            {language === 'de' && (
              <>
                Wir schätzen Ihr Vertrauen in die Bereitstellung Ihrer
                persönlichen Daten, daher sind wir bestrebt, kommerziell
                akzeptable Mittel zum Schutz sie zu schützen. Bedenken Sie
                jedoch, dass keine Methode der Übertragung über das Internet
                oder elektronische Speichermethode 100% sicher und zuverlässig
                ist, und wir keine absolute Sicherheit garantieren können.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Links to Other Sites</>}
            {language === 'cs' && <>Odkazy na jiné stránky</>}
            {language === 'de' && <>Links zu anderen Seiten</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                Our Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over, and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </>
            )}
            {language === 'cs' && (
              <>
                Naše služba může obsahovat odkazy na jiné stránky. Pokud
                kliknete na na odkaz třetí strany, budete přesměrováni na tuto
                stránku. Upozorňujeme, že tyto externí stránky neprovozujeme.
                Proto důrazně doporučujeme abyste se seznámili se zásadami
                ochrany osobních údajů těchto webových stránek. Nemáme žádné
                kontrolu a nepřebíráme žádnou zodpovědnost za obsah, soukromí a
                ochranu osobních údajů na těchto stránkách. zásady ochrany
                osobních údajů nebo postupy jakýchkoli webových stránek nebo
                služeb třetích stran.
              </>
            )}
            {language === 'de' && (
              <>
                Unser Service kann Links zu anderen Websites enthalten. Wenn Sie
                auf einen Link eines Drittanbieters klicken, werden Sie auf
                diese Seite weitergeleitet. Beachten Sie, dass diese externen
                Seiten nicht von uns betrieben werden. Wir empfehlen Ihnen daher
                dringend Wir empfehlen Ihnen daher dringend, die
                Datenschutzrichtlinien dieser Websites zu lesen. Wir haben keine
                keine Kontrolle über und übernehmen keine Verantwortung für die
                Inhalte, Datenschutz Datenschutzrichtlinien oder Praktiken von
                Websites oder Diensten Dritter.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Children's Privacy</>}
            {language === 'cs' && <>Soukromí dětí</>}
            {language === 'de' && <>Datenschutz für Kinder</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                Our Services do not address anyone under the age of 13. We do
                not knowingly collect personal identifiable information from
                children under 13. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so that we will be able to do
                necessary actions.
              </>
            )}
            {language === 'cs' && (
              <>
                Naše služby nejsou určeny osobám mladším 13 let. Nepoužíváme
                vědomě neshromažďujeme osobní identifikační údaje od dětí
                mladších 13 let. V případě, že zjistíme, že dítě mladší 13 let
                poskytlo nám poskytlo osobní údaje, okamžitě je z našich stránek
                odstraníme. serverů. Pokud jste rodič nebo opatrovník a jste si
                vědomi toho, že váš nám vaše dítě poskytlo osobní údaje,
                kontaktujte nás, prosím. abychom mohli učinit potřebné kroky.
              </>
            )}
            {language === 'de' && (
              <>
                Unsere Dienste richten sich nicht an Personen unter 13 Jahren.
                Wir sammeln nicht sammeln wissentlich keine personenbezogenen
                Daten von Kindern unter 13 Jahren. Sollten wir feststellen, dass
                ein Kind unter 13 Jahren uns uns persönliche Daten zur Verfügung
                gestellt hat, löschen wir diese sofort von unseren Servern. Wenn
                Sie ein Elternteil oder Erziehungsberechtigter sind und wissen,
                dass Ihr Kind uns personenbezogene Daten zur Verfügung gestellt
                hat, kontaktieren Sie uns bitte damit wir die notwendigen
                Maßnahmen ergreifen können.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Changes to This Privacy Policy</>}
            {language === 'cs' && (
              <>Změny těchto zásad ochrany osobních údajů</>
            )}
            {language === 'de' && (
              <>Änderungen an dieser Datenschutzrichtlinie</>
            )}
          </h2>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                We may update our Privacy Policy from time to time. Thus, we
                advise you to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately, after
                they are posted on this page.
              </>
            )}
            {language === 'cs' && (
              <>
                Naše zásady ochrany osobních údajů můžeme čas od času
                aktualizovat. Proto doporučujeme abyste tuto stránku pravidelně
                kontrolovali, zda nedošlo ke změnám. Budeme informovat o všech
                změnách zveřejněním nových Zásad ochrany osobních údajů na této
                stránce. Tyto změny nabývají účinnosti okamžitě po jejich
                zveřejnění na této stránce.
              </>
            )}
            {language === 'de' && (
              <>
                Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit
                aktualisieren. Wir empfehlen Ihnen daher dass Sie diese Seite
                regelmäßig auf Änderungen überprüfen. Wir werden Sie Wir werden
                Sie über alle Änderungen informieren, indem wir die neue
                Datenschutzrichtlinie auf dieser Seite veröffentlichen. Diese
                Änderungen treten sofort in Kraft, nachdem sie auf dieser Seite
                veröffentlicht wurden. dieser Seite.
              </>
            )}
          </p>
          <p>
            {language === 'en' && (
              <>
                Our Privacy Policy was created with the help of the Privacy
                Policy Template.
              </>
            )}
            {language === 'cs' && (
              <>
                Naše Zásady ochrany osobních údajů byly vytvořeny s pomocí Zásad
                ochrany osobních údajů. Šablony.
              </>
            )}
            {language === 'de' && (
              <>
                Unsere Datenschutzrichtlinie wurde mit Hilfe der
                Datenschutzrichtlinie Vorlage.
              </>
            )}
          </p>
        </div>

        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Contact Us</>}
            {language === 'cs' && <>Kontaktujte nás</>}
            {language === 'de' && <>Kontakt</>}
          </h2>
          <p>
            {language === 'en' && (
              <>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us.
              </>
            )}
            {language === 'cs' && (
              <>
                Máte-li jakékoli dotazy nebo připomínky k našim zásadám ochrany
                osobních údajů, neváhejte nás kontaktovat.
              </>
            )}
            {language === 'de' && (
              <>
                Wenn Sie Fragen oder Anregungen zu unserer Datenschutzpolitik
                haben, zögern Sie nicht, uns zu kontaktieren.
              </>
            )}
          </p>
        </div>

        <div>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>Processed data</>}
            {language === 'cs' && <>Zpracované údaje</>}
            {language === 'de' && <>Verarbeitete Daten</>}
          </h2>
          <ul className='list-disc ml-6'>
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
              {language === 'en' && <>Full Name</>}
              {language === 'cs' && <>Celé jméno</>}
              {language === 'de' && <>Vollständiger Name</>}
            </li>
            <li>
              {language === 'en' && <>Hotel Name</>}
              {language === 'cs' && <>Název hotelu</>}
              {language === 'de' && <>Hotel Name</>}
            </li>
            <li>
              {language === 'en' && <>Brand Name</>}
              {language === 'cs' && <>Název firmy</>}
              {language === 'de' && <>Markenname</>}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
