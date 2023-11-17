'use client'

import Container from '@/components/Container'
import { useLanguage } from '@/store/useLanguage'

export default function Page() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='pt-24 pb-20 md:pt-32 md:pb-32'>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>AGREEMENT TO OUR LEGAL TERMS</>}
            {language === 'cs' && <>SOUHLAS S NAŠIMI PRÁVNÍMI PODMÍNKAMI</>}
            {language === 'de' && (
              <>ZUSTIMMUNG ZU UNSEREN RECHTLICHEN BEDINGUNGEN</>
            )}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                We are Dominik Grössl ("Company," "we," "us," "our"), a company
                registered in Czechia at Němčice 26, Němčice 34506. Our VAT
                number is 14184397.
              </>
            )}
            {language === 'cs' && (
              <>
                Jsme Dominik Grössl (dále jen "společnost", "my", "nás",
                "naše"), společnost. registrovaná v České republice na adrese
                Němčice 26, Němčice 34506. Naše DIČ je 14184397.
              </>
            )}
            {language === 'de' && (
              <>
                Wir sind Dominik Grössl ("Unternehmen", "wir", "uns", "unser"),
                ein Unternehmen registriert in Tschechien, Němčice 26, Němčice
                34506. Unsere Umsatzsteuer-Identifikationsnummer lautet
                14184397.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                We operate the website https://www.planetopedia.agency/ (the
                "Site"), as well as any other related products and services that
                refer or link to these legal terms (the "Legal Terms")
                (collectively, the "Services").
              </>
            )}
            {language === 'cs' && (
              <>
                Provozujeme webové stránky https://www.planetopedia.agency/
                (dále jen "stránky"), jakož i další související produkty a
                služby. které odkazují na tyto právní podmínky nebo na ně
                odkazují (dále jen "právní podmínky"). (dále společně jen
                "Služby").
              </>
            )}
            {language === 'de' && (
              <>
                Wir betreiben die Website https://www.planetopedia.agency/ (die
                "Website"), sowie alle anderen damit verbundenen Produkte und
                Dienstleistungen die auf diese rechtlichen Bestimmungen (die
                "rechtlichen Bestimmungen") verweisen oder verlinken
                (zusammenfassend die "Dienste").
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                You can contact us by phone at +420 739 830 034, email at
                info@planetopedia.agency, or by mail to Němčice 26, Němčice
                34506, Czechia.
              </>
            )}
            {language === 'cs' && (
              <>
                Můžete nás kontaktovat telefonicky na čísle +420 739 830 034,
                e-mailem na adrese info@planetopedia.agency, nebo poštou na
                adresu Němčice 26, Němčice 34506, Česko.
              </>
            )}
            {language === 'de' && (
              <>
                Sie können uns telefonisch unter +420 739 830 034, per E-Mail
                unter info@planetopedia.agency, oder per Post an Němčice 26,
                Němčice 34506, Tschechische Republik.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                ("you"), and Dominik Grössl, concerning your access to and use
                of the Services. You agree that by accessing the Services, you
                have read, understood, and agreed to be bound by all of these
                Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS,
                THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
                YOU MUST DISCONTINUE USE IMMEDIATELY.
              </>
            )}
            {language === 'cs' && (
              <>
                Tyto právní podmínky představují právně závaznou dohodu
                uzavřenou mezi vámi, ať už osobně nebo jménem subjektu ("vy"), a
                Dominikem Grösslem, týkající se vašeho přístupu k těmto stránkám
                a jejich používání. Služeb. Souhlasíte s tím, že přístupem ke
                službám jste si přečetli, porozuměli všem těmto právním
                podmínkám a souhlasí s jejich dodržováním. POKUD NESOUHLASÍTE SE
                VŠEMI TĚMITO PRÁVNÍMI PODMÍNKAMI, PAK JSTE VÝSLOVNĚ ZAKÁZÁNO
                POUŽÍVAT SLUŽBY A MUSÍTE OKAMŽITĚ PŘESTAT SLUŽBY POUŽÍVAT.
              </>
            )}
            {language === 'de' && (
              <>
                Diese rechtlichen Bedingungen stellen eine rechtsverbindliche
                Vereinbarung zwischen Ihnen, ob persönlich oder im Namen einer
                juristischen Person ("Sie"), und Dominik Grössl in Bezug auf
                Ihren Zugang zu und Ihre Nutzung der Dienste. Sie stimmen zu,
                dass Sie durch den Zugriff auf die Dienste die Bedingungen
                gelesen, gelesen, verstanden und zugestimmt haben, an alle diese
                rechtlichen Bedingungen gebunden zu sein. WENN SIE NICHT MIT
                ALLEN DIESEN RECHTLICHEN BEDINGUNGEN EINVERSTANDEN SIND, DANN
                IST ES IHNEN AUSDRÜCKLICH UNTERSAGT, DIE DIENSTE ZU NUTZEN, UND
                SIE MÜSSEN DIE NUTZUNG UNVERZÜGLICH EINZUSTELLEN.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Legal
                Terms from time to time. We will alert you about any changes by
                updating the "Last updated" date of these Legal Terms, and you
                waive any right to receive specific notice of each such change.
                It is your responsibility to periodically review these Legal
                Terms to stay informed of updates. You will be subject to, and
                will be deemed to have been made aware of and to have accepted,
                the changes in any revised Legal Terms by your continued use of
                the Services after the date such revised Legal Terms are posted.
              </>
            )}
            {language === 'cs' && (
              <>
                Doplňkové podmínky nebo dokumenty, které mohou být zveřejněny na
                stránkách jsou tímto výslovně začleněny do Služeb. zde odkazem.
                Vyhrazujeme si právo dle vlastního uvážení, čas od času provést
                změny nebo úpravy těchto právních podmínek. čas od času. Na
                veškeré změny vás upozorníme aktualizací "Poslední
                Aktualizováno" těchto právních podmínek a vy se vzdáváte
                jakéhokoli práva na to. obdržet konkrétní oznámení o každé
                takové změně. Je to vaše odpovědností pravidelně kontrolovat
                tyto Právní podmínky, abyste zůstali v obraze. informováni o
                aktualizacích. Podléháte a budete považováni za osoby, které že
                jste byli seznámeni se změnami a že jste je přijali.
                revidovaných právních podmínkách tím, že budete pokračovat v
                používání služeb po jejich změně. datu zveřejnění takových
                revidovaných právních podmínek.
              </>
            )}
            {language === 'de' && (
              <>
                Ergänzende Geschäftsbedingungen oder Dokumente, die von Zeit zu
                Zeit in die die Dienste von Zeit zu Zeit veröffentlicht werden,
                werden hiermit ausdrücklich hierin durch Bezugnahme aufgenommen.
                Wir behalten uns das Recht vor, nach unserem alleinigen
                Ermessen, nach eigenem Ermessen Änderungen oder Modifikationen
                an diesen rechtlichen Bedingungen Zeit vorzunehmen. Wir werden
                Sie über alle Änderungen informieren, indem wir das Datum der
                "letzten Aktualisierung" dieser rechtlichen Bestimmungen
                aktualisieren. Datum der letzten Aktualisierung" dieser
                rechtlichen Hinweise, und Sie verzichten auf das Sie verzichten
                auf das Recht, über jede derartige Änderung informiert zu
                werden. Es liegt in Ihrer Es liegt in Ihrer Verantwortung, diese
                Nutzungsbedingungen regelmäßig zu überprüfen, um über
                Aktualisierungen informiert zu sein. Für Sie gelten folgende
                Bedingungen, und es wird davon ausgegangen, dass Sie die
                Änderungen in den überarbeiteten Nutzungsbedingungen zur
                Kenntnis genommen und akzeptiert durch Ihre fortgesetzte Nutzung
                der Dienste nach dem Datum, an dem die überarbeiteten Datum, an
                dem die überarbeiteten rechtlichen Bedingungen veröffentlicht
                wurden.
              </>
            )}
          </p>
          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Services are intended for users who are at least 13 years of
                age. All users who are minors in the jurisdiction in which they
                reside (generally under the age of 18) must have the permission
                of, and be directly supervised by, their parent or guardian to
                use the Services. If you are a minor, you must have your parent
                or guardian read and agree to these Legal Terms prior to you
                using the Services.
              </>
            )}
            {language === 'cs' && (
              <>
                Služby jsou určeny uživatelům starším 13 let. věku. Všichni
                uživatelé, kteří jsou nezletilí v jurisdikci, ve které se
                nachází bydlí (obecně mladší 18 let), musí mít povolení, a být
                pod přímým dohledem svého rodiče nebo opatrovníka, aby mohli
                používat Služby. Služby. Pokud jste nezletilí, musíte mít rodiče
                nebo opatrovníka. přečíst a odsouhlasit tyto Právní podmínky
                před tím, než začnete Služby používat.
              </>
            )}
            {language === 'de' && (
              <>
                Die Dienste sind für Benutzer bestimmt, die mindestens 13 Jahre
                alt sind. Alter sind. Alle Nutzer, die in dem Land, in dem sie
                wohnen, minderjährig sind (in der Regel unter 18 Jahren) müssen
                die Erlaubnis ihrer Eltern oder Erziehungsberechtigten haben,
                Erlaubnis ihrer Eltern oder ihres Vormunds haben und von diesen
                direkt beaufsichtigt werden, um die Dienste. Wenn Sie
                minderjährig sind, müssen Sie Ihren Elternteil oder Vormund
                bitten vor der Nutzung der Dienste diese rechtlichen Hinweise
                lesen und ihnen zustimmen.
              </>
            )}
          </p>
          <p>
            {language === 'en' && (
              <>
                We recommend that you print a copy of these Legal Terms for your
                records.
              </>
            )}
            {language === 'cs' && (
              <>
                Doporučujeme, abyste si vytiskli kopii těchto právních podmínek
                pro svou potřebu. pro své záznamy.
              </>
            )}
            {language === 'de' && (
              <>
                Wir empfehlen Ihnen, eine Kopie dieser rechtlichen Hinweise für
                Ihre Unterlagen auszudrucken.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>1. OUR SERVICES</>}
            {language === 'cs' && <>1. NAŠE SLUŽBY</>}
            {language === 'de' && <>1. UNSERE DIENSTLEISTUNGEN</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                The information provided when using the Services is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the
                extent local laws are applicable.
              </>
            )}
            {language === 'cs' && (
              <>
                Informace poskytované při používání Služeb nejsou určeny pro
                distribuci nebo použití jakoukoli osobou nebo subjektem v
                jakékoli jurisdikci. nebo zemi, kde by takové šíření nebo
                použití bylo v rozporu se zákonem. nebo předpisům, nebo které by
                nás vystavily jakékoli registraci. v takové jurisdikci nebo
                zemi. V souladu s tím jsou tyto osoby, které se rozhodnou
                přistupovat ke Službám z jiných míst, tak činí z vlastní
                iniciativy a nesou výhradní odpovědnost za dodržování předpisů.
                dodržování místních zákonů, pokud a v jakém rozsahu se na ně
                místní zákony vztahují.
              </>
            )}
            {language === 'de' && (
              <>
                Die bei der Nutzung der Dienste bereitgestellten Informationen
                sind nicht für die die Verbreitung an oder die Nutzung durch
                eine Person oder Einrichtung in einem oder Land bestimmt, in dem
                eine solche Verbreitung oder Nutzung gegen das Gesetz oder
                Regulierung verstoßen würde oder die uns einer
                Registrierungspflicht in einer solchen Gerichtsbarkeit oder
                einem solchen Land unterliegt. Dementsprechend müssen diejenigen
                Personen, die von anderen Orten aus auf die Dienste zugreifen,
                tun dies auf eigene Initiative und sind allein verantwortlich
                für die Einhaltung für die Einhaltung der lokalen Gesetze
                verantwortlich, sofern und soweit diese anwendbar sind.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                The Services are not tailored to comply with industry-specific
                regulations (Health Insurance Portability and Accountability Act
                (HIPAA), Federal Information Security Management Act (FISMA),
                etc.), so if your interactions would be subjected to such laws,
                you may not use the Services. You may not use the Services in a
                way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </>
            )}
            {language === 'cs' && (
              <>
                Služby nejsou přizpůsobeny tak, aby splňovaly požadavky
                specifické pro dané odvětví. předpisy (zákon o přenositelnosti a
                odpovědnosti zdravotního pojištění). (HIPAA), Federální zákon o
                řízení bezpečnosti informací (FISMA) atd.), takže pokud by vaše
                interakce podléhaly takovým zákonům, nesmíte se na ně používat
                Služby. Služby nesmíte používat způsobem, který by porušuje
                zákon Gramm-Leach-Bliley Act (GLBA).
              </>
            )}
            {language === 'de' && (
              <>
                Die Dienste sind nicht auf die Einhaltung von
                branchenspezifischen Vorschriften (Health Insurance Portability
                and Accountability Act (HIPAA), Federal Information Security
                Management Act (FISMA), usw.), Wenn Ihre Interaktionen also
                solchen Gesetzen unterliegen würden, dürfen Sie die Dienste
                nicht die Dienste nicht nutzen. Sie dürfen die Dienste nicht in
                einer Weise nutzen, die gegen den Gramm-Leach-Bliley Act (GLBA)
                verstoßen.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>2. INTELLECTUAL PROPERTY RIGHTS</>}
            {language === 'cs' && <>2. PRÁVA DUŠEVNÍHO VLASTNICTVÍ</>}
            {language === 'de' && <>2. RECHTE AN GEISTIGEM EIGENTUM</>}
          </h2>

          <h4 className='mt-1 font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Our intellectual property</>}
            {language === 'cs' && <>Naše duševní vlastnictví</>}
            {language === 'de' && <>Unser geistiges Eigentum</>}
          </h4>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively, the
                "Content"), as well as the trademarks, service marks, and logos
                contained therein (the "Marks").
              </>
            )}
            {language === 'cs' && (
              <>
                Jsme vlastníkem nebo nabyvatelem licence na všechna práva
                duševního vlastnictví. k našim službám, včetně všech zdrojových
                kódů, databází, funkcí, softwaru, návrhů webových stránek,
                zvuku, videa a textu, fotografií a grafiky ve službách (souhrnně
                nazývané "obsah"). , jakož i ochranných známek, značek služeb a
                log. v nich obsažených (dále jen "značky").
              </>
            )}
            {language === 'de' && (
              <>
                Wir sind der Eigentümer oder der Lizenznehmer aller Rechte an
                geistigem Eigentum an unseren Dienstleistungen, einschließlich
                aller Quellcodes, Datenbanken, Funktionalität, Software,
                Website-Designs, Audio-, Video-, Text- und Fotos und Grafiken in
                den Diensten (zusammenfassend als "Inhalt"), sowie die darin
                enthaltenen Marken, Dienstleistungsmarken und Logos die darin
                enthalten sind (die "Marken").
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around
                the world.
              </>
            )}
            {language === 'cs' && (
              <>
                Náš obsah a značky jsou chráněny autorským právem a zákonem o
                ochranných známkách (a různými dalšími právy duševního
                vlastnictví a zákony o nekalé soutěži) a smlouvami ve Spojených
                státech a po celém světě.
              </>
            )}
            {language === 'de' && (
              <>
                Unsere Inhalte und Marken sind durch das Urheberrecht und das
                Markenrecht (und verschiedene andere Rechte an geistigem
                Eigentum und Gesetze gegen unlauteren Wettbewerb) sowie durch
                Verträge in den Vereinigten Staaten und auf der ganzen Welt
                geschützt.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                The Content and Marks are provided in or through the Services
                "AS IS" for your personal, non-commercial use or internal
                business purpose only.
              </>
            )}
            {language === 'cs' && (
              <>
                Obsah a značky jsou ve Službách nebo jejich prostřednictvím
                poskytovány "TAK, JAK JSOU". IS" pro vaše osobní, nekomerční
                použití nebo interní obchodní účely. výhradně pro vlastní účely.
              </>
            )}
            {language === 'de' && (
              <>
                Der Inhalt und die Marken werden in oder durch die Dienste "wie
                besehen" zur Verfügung gestellt. im Ist-Zustand" für Ihre
                persönliche, nicht-kommerzielle Nutzung oder interne Zwecke zur
                Verfügung gestellt.
              </>
            )}
          </p>

          <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Your use of our Services</>}
            {language === 'cs' && <>Vaše používání našich služeb</>}
            {language === 'de' && <>Ihre Nutzung unserer Dienste</>}
          </h4>

          <p>
            {language === 'en' && (
              <>
                Subject to your compliance with these Legal Terms, including the
                "PROHIBITED ACTIVITIES" section below, we grant you a
                non-exclusive, non-transferable, revocable license to:
              </>
            )}
            {language === 'cs' && (
              <>
                Za předpokladu, že dodržujete tyto právní podmínky, včetně. níže
                uvedené části "ZAKÁZANÉ ČINNOSTI", vám udělujeme nevýhradní,
                nepřenosnou a odvolatelnou licenci na:
              </>
            )}
            {language === 'de' && (
              <>
                Unter der Voraussetzung, dass Sie diese rechtlichen Bestimmungen
                einhalten, einschließlich des Abschnitt "VERBOTENE TÄTIGKEITEN"
                unten, gewähren wir Ihnen eine nicht-exklusive, nicht
                übertragbare, widerrufliche Lizenz zu:
              </>
            )}
          </p>

          <ul className='list-disc ml-6 mb-4'>
            <li>
              {language === 'en' && <>access the Services; and</>}
              {language === 'cs' && <>přístup ke službám; a</>}
              {language === 'de' && <>Zugang zu den Diensten; und</>}
            </li>
            <li>
              {language === 'en' && (
                <>
                  download or print a copy of any portion of the Content to
                  which you have properly gained access.
                </>
              )}
              {language === 'cs' && (
                <>
                  stáhnout nebo vytisknout kopii jakékoli části Obsahu, na
                  kterou se vztahuje jste řádně získali přístup.
                </>
              )}
              {language === 'de' && (
                <>
                  eine Kopie eines Teils des Inhalts herunterzuladen oder
                  auszudrucken, zu dem Sie ordnungsgemäß Zugang erhalten haben.
                </>
              )}
            </li>
          </ul>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                solely for your personal, non-commercial use or internal
                business purpose.
              </>
            )}
            {language === 'cs' && (
              <>
                výhradně pro vaše osobní, nekomerční použití nebo interní
                podnikání. pro vnitřní potřebu.
              </>
            )}
            {language === 'de' && (
              <>
                ausschließlich für Ihren persönlichen, nicht-kommerziellen
                Gebrauch oder interne Geschäftszwecke Zweck.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
              </>
            )}
            {language === 'cs' && (
              <>
                S výjimkou případů uvedených v této části nebo v jiných částech
                našich právních podmínek, nesmí být kopírována žádná část Služeb
                ani žádný Obsah nebo Značky, reprodukovat, shromažďovat, znovu
                publikovat, nahrávat, zveřejňovat, veřejně publikovat
                zobrazovat, kódovat, překládat, přenášet, distribuovat nebo
                prodávat, licencovány ani jinak využívány pro jakékoli komerční
                účely. bez našeho výslovného předchozího písemného souhlasu.
              </>
            )}
            {language === 'de' && (
              <>
                Mit Ausnahme der in diesem Abschnitt oder an anderer Stelle in
                unseren Rechtlichen Hinweisen genannten Fälle, darf kein Teil
                der Dienste und keine Inhalte oder Marken kopiert, reproduziert,
                zusammengefasst, neu veröffentlicht, hochgeladen, gepostet,
                öffentlich öffentlich angezeigt, verschlüsselt, übersetzt,
                übertragen, verteilt, verkauft, lizenziert oder anderweitig für
                kommerzielle Zwecke genutzt werden ohne unsere ausdrückliche
                vorherige schriftliche Genehmigung.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to: info@planetopedia.agency.
                If we ever grant you the permission to post, reproduce, or
                publicly display any part of our Services or Content, you must
                identify us as the owners or licensors of the Services, Content,
                or Marks and ensure that any copyright or proprietary notice
                appears or is visible on posting, reproducing, or displaying our
                Content.
              </>
            )}
            {language === 'cs' && (
              <>
                Pokud si přejete využívat Služby, Obsah nebo Značky jiným
                způsobem než než jak je uvedeno v této části nebo jinde v našich
                právních podmínkách, adresujte svůj požadavek na adresu:
                info@planetopedia.agency. Pokud bychom někdy vám udělíme
                povolení ke zveřejňování, reprodukci nebo veřejnému vystavování
                jakýchkoli část našich Služeb nebo Obsahu, musíte nás
                identifikovat jako vlastníky. nebo poskytovatele licence na
                Služby, Obsah nebo Značky a zajistit, aby veškeré se při
                zveřejňování objevilo nebo bylo viditelné upozornění na autorská
                práva nebo vlastnická práva, reprodukci nebo zobrazení našeho
                Obsahu.
              </>
            )}
            {language === 'de' && (
              <>
                Wenn Sie die Dienste, Inhalte oder Marken in anderer Weise
                nutzen möchten als in diesem Abschnitt oder an anderer Stelle in
                unseren Rechtlichen Bedingungen dargelegt, richten Sie Ihre
                Anfrage bitte an: info@planetopedia.agency. Falls wir jemals die
                Erlaubnis erteilen, Teile unserer Dienste oder Inhalte zu
                veröffentlichen, zu reproduzieren oder öffentlich darzustellen
                unserer Dienste oder Inhalte zu veröffentlichen, müssen Sie uns
                als Eigentümer oder Lizenzgeber der Dienste, Inhalte oder Marken
                identifizieren und sicherstellen, dass alle Urheberrechts- oder
                Eigentumsvermerke bei der Veröffentlichung erscheinen oder
                sichtbar sind, Vervielfältigung oder Anzeige unserer Inhalte
                sichtbar ist.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </>
            )}
            {language === 'cs' && (
              <>
                Vyhrazujeme si veškerá práva, která vám nebyla výslovně udělena,
                a to v souvislosti s Služby, obsah a značky.
              </>
            )}
            {language === 'de' && (
              <>
                Wir behalten uns alle Rechte vor, die Ihnen nicht ausdrücklich
                in und an den Dienste, Inhalte und Marken vor.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </>
            )}
            {language === 'cs' && (
              <>
                Jakékoli porušení těchto práv duševního vlastnictví bude
                představovat podstatným porušením našich právních podmínek a
                vašeho práva používat naše duševní vlastnictví. okamžitě ukončí.
              </>
            )}
            {language === 'de' && (
              <>
                Jeder Verstoß gegen diese Rechte an geistigem Eigentum stellt
                eine einen wesentlichen Verstoß gegen unsere rechtlichen
                Bestimmungen dar und Ihr Recht zur Nutzung unserer Dienste wird
                sofort beendet.
              </>
            )}
          </p>

          <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Your submissions</>}
            {language === 'cs' && <>Vaše příspěvky</>}
            {language === 'de' && <>Ihre Eingaben</>}
          </h4>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Please review this section and the "PROHIBITED ACTIVITIES"
                section carefully prior to using our Services to understand the
                (a) rights you give us and (b) obligations you have when you
                post or upload any content through the Services.
              </>
            )}
            {language === 'cs' && (
              <>
                Přečtěte si tuto část a část "ZAKÁZANÉ ČINNOSTI". před použitím
                našich služeb, abyste porozuměli (a) svým právům které nám
                dáváte, a (b) povinnosti, které máte, když zveřejníte nebo
                nahrajete jakýkoli příspěvek. obsahu prostřednictvím Služeb.
              </>
            )}
            {language === 'de' && (
              <>
                Bitte lesen Sie diesen Abschnitt und den Abschnitt "VERBOTENE
                AKTIVITÄTEN" sorgfältig durch sorgfältig durch, bevor Sie unsere
                Dienste nutzen, um zu verstehen, welche (a) Rechte Rechte, die
                Sie uns einräumen, und (b) die Pflichten, die Sie haben, wenn
                Sie Inhalte über die Dienste hochladen.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                Submissions: By directly sending us any question, comment,
                suggestion, idea, feedback, or other information about the
                Services ("Submissions"), you agree to assign to us all
                intellectual property rights in such Submission. You agree that
                we shall own this Submission and be entitled to its unrestricted
                use and dissemination for any lawful purpose, commercial or
                otherwise, without acknowledgment or compensation to you.
              </>
            )}
            {language === 'cs' && (
              <>
                Příspěvky: Přímým zasláním jakéhokoli dotazu, komentáře, návrhu,
                nápadu, zpětné vazby nebo jiných informací o službách. (dále jen
                "příspěvky"), souhlasíte s tím, že na nás převádíte veškeré
                duševní vlastnictví. k takovému podání. Souhlasíte s tím, že
                toto vlastnictví přechází na nás Podání a budeme oprávněni je
                neomezeně používat a šířit. k jakémukoli zákonnému účelu,
                komerčnímu nebo jinému, bez uznání nebo kompenzace pro vás.
              </>
            )}
            {language === 'de' && (
              <>
                Einreichungen: Indem Sie uns direkt eine Frage, einen Kommentar,
                Vorschlag, Idee, Feedback oder andere Informationen über die
                Dienste ("Beiträge"), erklären Sie sich damit einverstanden, uns
                alle geistigen Eigentumsrechte Rechte an solchen Einsendungen zu
                übertragen. Sie stimmen zu, dass wir Eigentümer dieser
                Einreichung besitzen und zu ihrer uneingeschränkten Nutzung und
                Verbreitung berechtigt sind für jeden rechtmäßigen Zweck,
                kommerziell oder anderweitig, ohne Anerkennung oder
                Entschädigung an Sie.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                You are responsible for what you post or upload: By sending us
                Submissions through any part of the Services you:
              </>
            )}
            {language === 'cs' && (
              <>
                Jste zodpovědní za to, co zveřejníte nebo nahrajete: Odesláním
                nám prostřednictvím kterékoli části Služeb:
              </>
            )}
            {language === 'de' && (
              <>
                Sie sind verantwortlich für das, was Sie veröffentlichen oder
                hochladen: Indem Sie uns Einreichungen über einen Teil der
                Dienste sind Sie:
              </>
            )}
          </p>

          <ul className='list-disc ml-6'>
            <li>
              {language === 'en' && (
                <>
                  confirm that you have read and agree with our "PROHIBITED
                  ACTIVITIES" and will not post, send, publish, upload, or
                  transmit through the Services any Submission that is illegal,
                  harassing, hateful, harmful, defamatory, obscene, bullying,
                  abusive, discriminatory, threatening to any person or group,
                  sexually explicit, false, inaccurate, deceitful, or
                  misleading;
                </>
              )}
              {language === 'cs' && (
                <>
                  potvrzujete, že jste si přečetli a souhlasíte s našimi
                  "ZAKÁZANÝMI ČINNOSTÍ" a nebudete zveřejňovat, posílat,
                  publikovat, nahrávat ani přenášet prostřednictvím Služeb žádné
                  příspěvky, které jsou nezákonné, obtěžující, nenávistné,
                  škodlivé, hanlivé, obscénní, šikanující, urážlivé,
                  diskriminační, ohrožující jakoukoli osobu nebo skupinu,
                  sexuálně motivované, nebo explicitní, nepravdivé, nepřesné,
                  klamavé nebo zavádějící;
                </>
              )}
              {language === 'de' && (
                <>
                  bestätigen Sie, dass Sie unsere "VERBOTENE TÄTIGKEITEN"
                  gelesen haben und damit einverstanden sind. TÄTIGKEITEN"
                  gelesen haben und dass Sie über die Dienste keine über die
                  Dienste keine illegalen, belästigenden, hasserfüllt,
                  schädlich, verleumderisch, obszön, schikanös, beleidigend,
                  diskriminierend, bedrohlich für eine Person oder Gruppe,
                  sexuell sexuell eindeutig, falsch, ungenau, betrügerisch oder
                  irreführend sind;
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  to the extent permissible by applicable law, waive any and all
                  moral rights to any such Submission;
                </>
              )}
              {language === 'cs' && (
                <>
                  v rozsahu přípustném podle platných právních předpisů vzdát se
                  všech morálních práv k jakémukoli takovému podání;
                </>
              )}
              {language === 'de' && (
                <>
                  soweit dies nach geltendem Recht zulässig ist, auf alle
                  moralische Rechte an solchen Einsendungen;
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  warrant that any such Submission are original to you or that
                  you have the necessary rights and licenses to submit such
                  Submissions and that you have full authority to grant us the
                  above-mentioned rights in relation to your Submissions; and
                </>
              )}
              {language === 'cs' && (
                <>
                  zaručujete, že všechny tyto příspěvky jsou vaše originály nebo
                  že jste máte potřebná práva a licence k předložení takových
                  příspěvků. a že jste plně oprávněni nám poskytnout výše
                  uvedené licence. práva ve vztahu k vašim Příspěvkům; a
                </>
              )}
              {language === 'de' && (
                <>
                  garantieren Sie nicht, dass diese Übermittlungen von Ihnen
                  stammen oder dass Sie dass Sie über die erforderlichen Rechte
                  und Lizenzen für die Übermittlung solcher Beiträge verfügen
                  und dass Sie die volle Befugnis haben, uns die oben genannten
                  Rechte in Bezug auf Ihre Einreichungen zu gewähren; und
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  warrant and represent that your Submissions do not constitute
                  confidential information.
                </>
              )}
              {language === 'cs' && (
                <>
                  zaručujete a prohlašujete, že vaše příspěvky nepředstavují
                  důvěrné informace.
                </>
              )}
              {language === 'de' && (
                <>
                  garantieren und versichern, dass Ihre Beiträge keine
                  vertrauliche Informationen darstellen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  You are solely responsible for your Submissions and you
                  expressly agree to reimburse us for any and all losses that we
                  may suffer because of your breach of (a) this section, (b) any
                  third party’s intellectual property rights, or (c) applicable
                  law.
                </>
              )}
              {language === 'cs' && (
                <>
                  Za své příspěvky nesete výhradní odpovědnost a výslovně
                  prohlašujete. souhlasíte s tím, že nám uhradíte veškeré
                  ztráty, které nám mohou vzniknout. z důvodu vašeho porušení
                  (a) tohoto oddílu, (b) jakékoli třetí strany. práv duševního
                  vlastnictví nebo (c) platných zákonů.
                </>
              )}
              {language === 'de' && (
                <>
                  Sie tragen die alleinige Verantwortung für Ihre Beiträge und
                  erklären sich ausdrücklich stimmen ausdrücklich zu, uns für
                  alle Verluste zu entschädigen, die uns die uns aufgrund Ihres
                  Verstoßes gegen (a) diesen Abschnitt, (b) die Rechte an
                  geistigem Eigentum oder (c) geltendem Recht.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>3. USER REPRESENTATIONS</>}
            {language === 'cs' && <>3. REPREZENTACE UŽIVATELŮ</>}
            {language === 'de' && <>3. BENUTZERDARSTELLUNGEN</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                By using the Services, you represent and warrant that: (1) you
                have the legal capacity and you agree to comply with these Legal
                Terms; (2) you are not under the age of 13; (3) you are not a
                minor in the jurisdiction in which you reside, or if a minor,
                you have received parental permission to use the Services; (4)
                you will not access the Services through automated or non-human
                means, whether through a bot, script or otherwise; (5) you will
                not use the Services for any illegal or unauthorized purpose;
                and (6) your use of the Services will not violate any applicable
                law or regulation.
              </>
            )}
            {language === 'cs' && (
              <>
                Používáním Služeb prohlašujete a zaručujete, že: (1) že jste
                jste způsobilí k právním úkonům a souhlasíte s dodržováním
                těchto právních podmínek; (2) nejste mladší 13 let; (3) nejste
                nezletilí v České republice; (4) nejste nezletilí v České
                republice. v jurisdikci, ve které máte bydliště, nebo pokud jste
                nezletilí, že jste obdrželi povolení k pobytu. souhlas rodičů s
                používáním Služeb; (4) nebudete přistupovat ke Službám, pokud
                jste nezletilí. Službám prostřednictvím automatizovaných nebo
                jiných než lidských prostředků, ať už prostřednictvím bota,
                skriptu nebo jiným způsobem; (5) nebudete používat Služby k
                žádnému nezákonným nebo neoprávněným účelům; a (6) vaše
                používání Služeb bude probíhat v souladu se zákonem. neporuší
                žádný platný zákon nebo předpis.
              </>
            )}
            {language === 'de' && (
              <>
                Durch die Nutzung der Dienste erklären und garantieren Sie,
                dass: (1) Sie haben die Rechtsfähigkeit besitzen und sich mit
                der Einhaltung dieser rechtlichen Bestimmungen einverstanden
                erklären; (2) dass Sie nicht jünger als 13 Jahre alt sind; (3)
                dass Sie in dem Land, in dem Sie wohnen, nicht minderjährig sind
                Gerichtsbarkeit, in der Sie wohnen, nicht minderjährig sind,
                oder, falls Sie minderjährig sind Erlaubnis der Eltern für die
                Nutzung der Dienste erhalten haben; (4) Sie werden nicht auf die
                Dienste durch automatisierte oder nicht-menschliche Mittel, sei
                es durch einen Bot, Skript oder anderweitig zugreifen; (5) Sie
                werden die Dienste nicht für einen rechtswidrigen oder
                unbefugten Zweck nutzen; und (6) Ihre Nutzung der Dienste nicht
                gegen geltende Gesetze oder Vorschriften verstößt.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Services (or any portion thereof).
              </>
            )}
            {language === 'cs' && (
              <>
                Pokud poskytnete jakékoli informace, které jsou nepravdivé,
                nepřesné, nejsou pravdivé nebo nejsou v souladu se zákonem.
                aktuální nebo neúplné, máme právo pozastavit nebo ukončit
                poskytování těchto informací. váš účet a odmítnout jakékoliv
                současné nebo budoucí používání těchto stránek. služeb (nebo
                jejich částí).
              </>
            )}
            {language === 'de' && (
              <>
                Wenn Sie unwahre, ungenaue, nicht aktuelle oder unvollständige
                Angaben machen oder unvollständig sind, haben wir das Recht, Ihr
                Konto auszusetzen oder zu kündigen Ihr Konto zu sperren oder zu
                kündigen und jegliche aktuelle oder zukünftige Nutzung der
                Dienste (oder eines Teils davon) zu verweigern.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>4. PURCHASES AND PAYMENT</>}
            {language === 'cs' && <>4. NÁKUPY A PLATBY</>}
            {language === 'de' && <>4. KÄUFE UND ZAHLUNGEN</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>We accept the following forms of payment:</>
            )}
            {language === 'cs' && <>Přijímáme následující formy plateb:</>}
            {language === 'de' && (
              <>Wir akzeptieren die folgenden Zahlungsarten:</>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                You agree to provide current, complete, and accurate purchase
                and account information for all purchases made via the Services.
                You further agree to promptly update account and payment
                information, including email address, payment method, and
                payment card expiration date, so that we can complete your
                transactions and contact you as needed. Sales tax will be added
                to the price of purchases as deemed required by us. We may
                change prices at any time. All payments shall be in __________.
              </>
            )}
            {language === 'cs' && (
              <>
                Souhlasíte s tím, že budete poskytovat aktuální, úplné a přesné
                údaje o nákupu a prodeji. informace o účtu pro všechny nákupy
                provedené prostřednictvím Služeb. Na adrese . dále souhlasíte s
                tím, že budete neprodleně aktualizovat informace o účtu a
                platbách, včetně e-mailové adresy, způsobu platby a doby
                platnosti platební karty. abychom mohli dokončit vaše transakce
                a kontaktovat vás podle vašich potřeb. v případě potřeby. K ceně
                nákupů bude připočtena daň z prodeje, jak je považováno za nutné
                námi požadována. Ceny můžeme kdykoli změnit. Veškeré platby se
                na __________.
              </>
            )}
            {language === 'de' && (
              <>
                Sie verpflichten sich, aktuelle, vollständige und genaue Kauf-
                und Kontoinformationen für alle über die Dienste getätigten
                Käufe anzugeben. Sie erklären sich ferner bereit, Ihre Konto-
                und Zahlungsinformationen umgehend zu aktualisieren,
                einschließlich E-Mail-Adresse, Zahlungsmethode und Ablaufdatum
                der Zahlungskarte damit wir Ihre Transaktionen abschließen und
                Sie bei Bedarf kontaktieren können. benötigen. Die Umsatzsteuer
                wird auf den Preis der Einkäufe aufgeschlagen, sofern
                erforderlich. Wir können die Preise jederzeit ändern. Alle
                Zahlungen sind sind in __________.
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                You agree to pay all charges at the prices then in effect for
                your purchases and any applicable shipping fees, and you
                authorize us to charge your chosen payment provider for any such
                amounts upon placing your order. We reserve the right to correct
                any errors or mistakes in pricing, even if we have already
                requested or received payment.
              </>
            )}
            {language === 'cs' && (
              <>
                Souhlasíte s tím, že budete platit všechny poplatky podle cen
                platných v daném okamžiku pro váš. a veškeré příslušné poplatky
                za dopravu a opravňujete nás k tomu, abychom účtovat vámi
                zvolenému poskytovateli platebních služeb všechny tyto částky
                po. zadání vaší objednávky. Vyhrazujeme si právo opravit
                jakékoli chyby nebo chyb v cenách, a to i v případě, že jsme již
                požádali nebo jsme obdrželi platbu.
              </>
            )}
            {language === 'de' && (
              <>
                Sie stimmen zu, alle Gebühren zu den dann gültigen Preisen für
                Ihre Einkäufe und alle anfallenden Versandgebühren, und Sie
                ermächtigen uns Sie ermächtigen uns, den von Ihnen gewählten
                Zahlungsanbieter bei Ihrer Bestellung zu belasten. Wir behalten
                uns das Recht vor, jegliche Fehler oder oder Fehler in der
                Preisgestaltung zu korrigieren, auch wenn wir bereits eine
                Zahlung erhalten haben.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                We reserve the right to refuse any order placed through the
                Services. We may, in our sole discretion, limit or cancel
                quantities purchased per person, per household, or per order.
                These restrictions may include orders placed by or under the
                same customer account, the same payment method, and/or orders
                that use the same billing or shipping address. We reserve the
                right to limit or prohibit orders that, in our sole judgment,
                appear to be placed by dealers, resellers, or distributors.
              </>
            )}
            {language === 'cs' && (
              <>
                Vyhrazujeme si právo odmítnout jakoukoli objednávku zadanou
                prostřednictvím Služby. Podle vlastního uvážení můžeme omezit
                nebo zrušit množství. zakoupené na osobu, domácnost nebo
                objednávku. Tyto stránky mohou zahrnovat objednávky podané
                stejným zákazníkem nebo pod stejným zákazníkem. účtu, stejného
                způsobu platby a/nebo objednávek, které využívají stejnou
                platební metodu. fakturační nebo dodací adresu. Vyhrazujeme si
                právo omezit nebo zakázat objednávky, které se podle našeho
                výhradního názoru zdají být zadány prostřednictvím dealery,
                prodejci nebo distributory.
              </>
            )}
            {language === 'de' && (
              <>
                Wir behalten uns das Recht vor, jede Bestellung, die über die
                Dienste. Wir können nach unserem alleinigen Ermessen die Anzahl
                der pro Person, pro Haushalt oder pro Bestellung begrenzen oder
                streichen. Diese Beschränkungen können Bestellungen umfassen,
                die von oder unter demselben Kunden Kundenkonto, dieselbe
                Zahlungsmethode und/oder Bestellungen, die dieselbe Rechnungs-
                oder Lieferadresse verwenden. Wir behalten uns das Recht vor,
                Bestellungen zu beschränken oder Bestellungen einzuschränken
                oder zu verbieten, die nach unserem alleinigen Urteil von
                Händlern, Wiederverkäufern oder Distributoren aufgegeben werden.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>5. PROHIBITED ACTIVITIES</>}
            {language === 'cs' && <>5. ZAKÁZANÉ ČINNOSTI</>}
            {language === 'de' && <>5. VERBOTENE AKTIVITÄTEN</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                You may not access or use the Services for any purpose other
                than that for which we make the Services available. The Services
                may not be used in connection with any commercial endeavors
                except those that are specifically endorsed or approved by us.
              </>
            )}
            {language === 'cs' && (
              <>
                Ke Službám nesmíte přistupovat ani je používat k jiným účelům,
                než jsou tyto. pro který jsme Služby zpřístupnili. Služby nesmí
                používat v souvislosti s jakýmikoliv komerčními aktivitami s
                výjimkou těch, které se týkají které jsme výslovně schválili
                nebo podpořili. <></>
              </>
            )}
            {language === 'de' && (
              <>
                Sie dürfen nicht auf die Dienste zugreifen oder sie für einen
                anderen Zweck nutzen als für den Zweck, für den wir die Dienste
                zur Verfügung stellen. Die Dienste dürfen nicht in Verbindung
                mit kommerziellen Unternehmungen genutzt werden, außer solchen
                die von uns ausdrücklich gebilligt oder genehmigt wurden.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>As a user of the Services, you agree not to:</>
            )}
            {language === 'cs' && <>Jako uživatel Služeb se zavazujete, že:</>}
            {language === 'de' && (
              <>Als Nutzer der Dienste verpflichten Sie sich, nichts zu tun:</>
            )}
          </p>

          <ul className='list-disc ml-6'>
            <li>
              {language === 'en' && (
                <>
                  Systematically retrieve data or other content from the
                  Services to create or compile, directly or indirectly, a
                  collection, compilation, database, or directory without
                  written permission from us.
                </>
              )}
              {language === 'cs' && (
                <>
                  Systematicky získávat data nebo jiný obsah ze Služeb s cílem
                  přímo nebo nepřímo vytvářet nebo sestavovat sbírku, kompilace,
                  databáze nebo adresáře bez písemného povolení od nás.
                </>
              )}
              {language === 'de' && (
                <>
                  Systematisches Abrufen von Daten oder anderen Inhalten aus den
                  Diensten, um direkt oder indirekt eine Sammlung zu erstellen
                  oder zusammenzustellen, Sammlung, Zusammenstellung, Datenbank
                  oder Verzeichnis ohne schriftliche Erlaubnis von uns.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords.
                </>
              )}
              {language === 'cs' && (
                <>
                  Podvádět, klamat nebo uvádět v omyl nás i ostatní uživatele,
                  zejména v jakýchkoli jiných případech. pokus o získání
                  citlivých informací o účtu, jako jsou uživatelské hesla.
                </>
              )}
              {language === 'de' && (
                <>
                  uns oder andere Nutzer zu betrügen, zu täuschen oder in die
                  Irre zu führen, insbesondere unter anderen Umständen.
                  versuchen, sensible Kontoinformationen zu erhalten, wie z. B.
                  Benutzer Passwörter.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Services, including features
                  that prevent or restrict the use or copying of any Content or
                  enforce limitations on the use of the Services and/or the
                  Content contained therein.
                </>
              )}
              {language === 'cs' && (
                <>
                  obcházet, znemožňovat nebo jinak zasahovat do bezpečnostních
                  systémů. funkce služeb, včetně funkcí, které zabraňují nebo
                  omezují používání nebo kopírování jakéhokoli obsahu nebo
                  vynucují omezení. používání Služeb a/nebo Obsahu v nich
                  obsaženého.
                </>
              )}
              {language === 'de' && (
                <>
                  Umgehen, Deaktivieren oder anderweitiges Stören von
                  sicherheitsrelevanten Funktionen der Dienste, einschließlich
                  Funktionen, die die die Nutzung oder das Kopieren von Inhalten
                  verhindern oder einschränken oder die Nutzung der Dienste
                  und/oder der darin enthaltenen Inhalte zu beschränken.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  znevažovat, poškozovat nebo jinak poškozovat podle našeho
                  názoru nás a/neboslužby.
                </>
              )}
              {language === 'de' && (
                <>
                  Unserer Meinung nach uns und/oder die Dienste herabsetzen,
                  beflecken oder anderweitig schädigen. die Dienste.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Use any information obtained from the Services in order to
                  harass, abuse, or harm another person.
                </>
              )}
              {language === 'cs' && (
                <>
                  používat jakékoli informace získané ze Služeb za účelem
                  obtěžování, zneužívat nebo poškozovat jinou osobu.
                </>
              )}
              {language === 'de' && (
                <>
                  Informationen, die Sie von den Diensten erhalten haben, zu
                  verwenden, um andere Personen zu belästigen, eine andere
                  Person zu missbrauchen oder zu schädigen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </>
              )}
              {language === 'cs' && (
                <>
                  nevhodně využívat naše podpůrné služby nebo podávat nepravdivá
                  hlášení. zneužití nebo nesprávného chování.
                </>
              )}
              {language === 'de' && (
                <>
                  unsere Unterstützungsdienste missbräuchlich in Anspruch zu
                  nehmen oder falsche Meldungen zu machen Missbrauch oder
                  Fehlverhalten zu melden.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Use the Services in a manner inconsistent with any applicable
                  laws or regulations.
                </>
              )}
              {language === 'cs' && (
                <>
                  používat Služby způsobem, který není v souladu s platnými
                  zákony. nebo předpisy.
                </>
              )}
              {language === 'de' && (
                <>
                  die Dienste in einer Weise zu nutzen, die nicht mit den
                  geltenden Gesetzen oder Vorschriften.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Engage in unauthorized framing of or linking to the Services.
                </>
              )}
              {language === 'cs' && (
                <>provádět neoprávněné rámování Služeb nebo na ně odkazovat.</>
              )}
              {language === 'de' && (
                <>Unerlaubtes Framing oder Verlinken mit den Diensten.</>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party’s
                  uninterrupted use and enjoyment of the Services or modifies,
                  impairs, disrupts, alters, or interferes with the use,
                  features, functions, operation, or maintenance of the
                  Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  nahrávat nebo přenášet (nebo se pokoušet nahrávat nebo
                  přenášet) viry, trojské koně nebo jiný materiál, včetně
                  nadměrného používání velkých písmen a rozesílání nevyžádané
                  pošty (neustálé zveřejňování opakujících se zpráv). textů),
                  který narušuje nepřerušené používání a odesílání dat kterékoli
                  strany. užívání služeb nebo modifikuje, poškozuje, narušuje,
                  mění, nebo zasahuje do používání, vlastností, funkcí, provozu
                  nebo údržby Služeb.
                </>
              )}
              {language === 'de' && (
                <>
                  Viren hochzuladen oder zu übertragen (oder zu versuchen, sie
                  hochzuladen oder zu übertragen), Trojanische Pferde oder
                  anderes Material, einschließlich der übermäßigen Verwendung
                  von Großbuchstaben und Spamming (kontinuierliches Posten von
                  sich wiederholenden Text), das die ununterbrochene Nutzung der
                  Dienste durch andere Parteien Nutzung der Dienste stört oder
                  die Nutzung, den Gebrauch oder die Inhalte der Dienste
                  modifiziert, beeinträchtigt, unterbricht, verändert oder die
                  Nutzung, Merkmale, Funktionen, den Betrieb oder die Wartung
                  der Wartung der Dienste.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction
                  tools.
                </>
              )}
              {language === 'cs' && (
                <>
                  používat systém automatizovaně, například pomocí skriptů.
                  odesílání komentářů nebo zpráv nebo používání jakéhokoli
                  vytěžování dat, robotů nebo jiných nástrojů. podobných
                  nástrojů pro shromažďování a získávání dat.
                </>
              )}
              {language === 'de' && (
                <>
                  eine automatisierte Nutzung des Systems vorzunehmen, wie z. B.
                  die Verwendung von Skripten zum Senden von Kommentaren oder
                  Nachrichten oder zur Verwendung von Data Mining, Robotern oder
                  ähnliche Tools zum Sammeln und Extrahieren von Daten.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </>
              )}
              {language === 'cs' && (
                <>
                  Odstranit upozornění na autorská práva nebo jiná vlastnická
                  práva z jakéhokoli obsahu.
                </>
              )}
              {language === 'de' && (
                <>
                  den Hinweis auf das Urheberrecht oder andere Eigentumsrechte
                  aus einem Inhalt.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </>
              )}
              {language === 'cs' && (
                <>
                  pokusit se vydávat za jiného uživatele nebo osobu nebo použít
                  uživatelské jméno. jiného uživatele.
                </>
              )}
              {language === 'de' && (
                <>
                  Der Versuch, sich als ein anderer Benutzer oder eine andere
                  Person auszugeben oder den Benutzernamen eines anderen
                  Benutzers zu verwenden.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, clear graphics interchange formats ("gifs"), 1×1
                  pixels, web bugs, cookies, or other similar devices (sometimes
                  referred to as "spyware" or "passive collection mechanisms" or
                  "pcms").
                </>
              )}
              {language === 'cs' && (
                <>
                  Nahrát nebo přenést (nebo se pokusit nahrát nebo přenést)
                  jakýkoli materiál, který slouží jako pasivní nebo aktivní sběr
                  informací. nebo přenosový mechanismus, včetně, ale bez
                  omezení, zřetelného grafické výměnné formáty ("gif"), pixely
                  1×1, webové chyby, soubory cookie nebo jiná podobná zařízení
                  (někdy označovaná jako "spyware" nebo "mechanismy pasivního
                  shromažďování" nebo "pcms").
                </>
              )}
              {language === 'de' && (
                <>
                  Hochladen oder Übertragen (oder der Versuch des Hochladens
                  oder Übertragens) von Material, das als passive oder aktive
                  Informationssammlung fungiert oder Übertragungsmechanismus
                  fungieren, einschließlich, aber nicht beschränkt auf, Clear
                  Graphics Interchange Formats ("Gifs"), 1×1 Pixel, Web Bugs,
                  Cookies oder andere ähnliche Vorrichtungen (manchmal auch als
                  "Spyware" oder "passive Erfassungsmechanismen" oder "pcms").
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Interfere with, disrupt, or create an undue burden on the
                  Services or the networks or services connected to the
                  Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  narušovat, rušit nebo nepřiměřeně zatěžovat Služby. nebo sítě
                  či služby připojené ke službám.
                </>
              )}
              {language === 'de' && (
                <>
                  disrupt, interfere with or unduly burden the Services. or
                  networks or services connected to the Services.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Services to
                  you.
                </>
              )}
              {language === 'cs' && (
                <>
                  obtěžovat, obtěžovat, zastrašovat nebo vyhrožovat kterémukoli
                  z našich zaměstnanců. poskytovat vám jakoukoli část Služeb.
                </>
              )}
              {language === 'de' && (
                <>
                  Belästigung, Verärgerung, Einschüchterung oder Bedrohung eines
                  unserer Mitarbeiter oder Agenten zu belästigen,
                  einzuschüchtern oder zu bedrohen, die mit der Bereitstellung
                  eines Teils der Dienste für Sie beschäftigt sind.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Attempt to bypass any measures of the Services designed to
                  prevent or restrict access to the Services, or any portion of
                  the Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  pokusit se obejít jakákoli opatření Služeb, která mají
                  zabránit. nebo omezit přístup ke Službám nebo jakékoli jejich
                  části. Služeb.
                </>
              )}
              {language === 'de' && (
                <>
                  Versuche, Maßnahmen der Dienste zu umgehen, die den Zugang zu
                  den den Zugang zu den Diensten oder einem Teil der Dienste zu
                  verhindern oder einzuschränken Dienste.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Copy or adapt the Services' software, including but not
                  limited to Flash, PHP, HTML, JavaScript, or other code.
                </>
              )}
              {language === 'cs' && (
                <>
                  kopírovat nebo upravovat software služeb, mimo jiné včetně.
                  Flash, PHP, HTML, JavaScript nebo jiný kód.
                </>
              )}
              {language === 'de' && (
                <>
                  Kopieren oder Anpassen der Software der Dienste,
                  einschließlich, aber nicht beschränkt auf Flash, PHP, HTML,
                  JavaScript oder anderen Code.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software
                  comprising or in any way making up a part of the Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  S výjimkou případů povolených příslušnými právními předpisy
                  dešifrovat, dekompilovat, rozebírat nebo zpětně analyzovat
                  jakýkoli software obsahující nebo jakýmkoli způsobem tvořit
                  součást Služeb.
                </>
              )}
              {language === 'de' && (
                <>
                  Außer in den Fällen, in denen es nach geltendem Recht zulässig
                  ist, die Software zu entschlüsseln, zu dekompilieren, zu
                  entschlüsseln, zu dekompilieren, zu disassemblieren oder ein
                  Reverse Engineering der Software vorzunehmen, die die in
                  irgendeiner Weise einen Teil der Dienste ausmacht.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Services, or use or launch any unauthorized
                  script or other software.
                </>
              )}
              {language === 'cs' && (
                <>
                  S výjimkou případů, kdy je výsledkem standardního vyhledávače
                  nebo internetu použití prohlížeče, používat, spouštět, vyvíjet
                  nebo distribuovat jakékoliv automatizované vyhledávače.
                  systému, včetně mimo jiné jakéhokoli pavouka, robota,
                  podvodníka nebo jiného systému. nástrojů, scraperů nebo
                  offline čteček, které přistupují ke službám, nebo používat
                  nebo spouštět jakýkoli neautorizovaný skript nebo jiný
                  software.
                </>
              )}
              {language === 'de' && (
                <>
                  Mit Ausnahme der Ergebnisse von Standard-Suchmaschinen oder
                  Internet-Browsern Nutzung, den Start, die Entwicklung oder die
                  Verbreitung von automatisierten System zu verwenden, zu
                  entwickeln oder zu verbreiten, einschließlich, aber nicht
                  beschränkt auf, Spider, Roboter, Cheat Dienstprogramm, Scraper
                  oder Offline-Leser, die auf die Dienste zugreifen, oder
                  unautorisierte Skripte oder andere Software zu verwenden oder
                  zu starten.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Use a buying agent or purchasing agent to make purchases on
                  the Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  Využijte nákupního agenta nebo nákupního zprostředkovatele pro
                  nákupy na Služby.
                </>
              )}
              {language === 'de' && (
                <>
                  Verwenden Sie einen Einkäufer oder Einkaufsagenten, um
                  Einkäufe über die Dienstleistungen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Make any unauthorized use of the Services, including
                  collecting usernames and/or email addresses of users by
                  electronic or other means for the purpose of sending
                  unsolicited email, or creating user accounts by automated
                  means or under false pretenses.
                </>
              )}
              {language === 'cs' && (
                <>
                  neoprávněně využívat Služby, včetně shromažďování.
                  uživatelských jmen a/nebo e-mailových adres uživatelů
                  elektronickou nebo jinou cestou. za účelem zasílání
                  nevyžádaných e-mailů nebo vytváření vytváření uživatelských
                  účtů automatizovanými prostředky nebo pod falešnou záminkou.
                </>
              )}
              {language === 'de' && (
                <>
                  Unbefugte Nutzung der Dienste, einschließlich des Sammelns von
                  Benutzernamen und/oder E-Mail-Adressen von Nutzern durch
                  elektronische oder andere mit elektronischen oder anderen
                  Mitteln zum Zweck des Versands unerwünschter E-Mails oder
                  Benutzerkonten mit automatisierten Mitteln oder unter
                  Vorspiegelung falscher Tatsachen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Use the Services as part of any effort to compete with us or
                  otherwise use the Services and/or the Content for any
                  revenue-generating endeavor or commercial enterprise.
                </>
              )}
              {language === 'cs' && (
                <>
                  používat Služby jako součást snahy konkurovat nám nebo jinak
                  využívat Služby a/nebo Obsah k jakémukoli výdělečné činnosti
                  nebo komerčního podnikání.
                </>
              )}
              {language === 'de' && (
                <>
                  die Dienste als Teil von Bemühungen zu nutzen, mit uns zu
                  konkurrieren oder die Dienste und/oder den Inhalt anderweitig
                  für ein einkommensschaffende Bestrebungen oder kommerzielle
                  Unternehmen.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>6. USER GENERATED CONTRIBUTIONS</>}
            {language === 'cs' && <>6. PŘÍSPĚVKY GENEROVANÉ UŽIVATELI</>}
            {language === 'de' && <>6. NUTZERGENERIERTE BEITRÄGE</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                The Services does not offer users to submit or post content. We
                may provide you with the opportunity to create, submit, post,
                display, transmit, perform, publish, distribute, or broadcast
                content and materials to us or on the Services, including but
                not limited to text, writings, video, audio, photographs,
                graphics, comments, suggestions, or personal information or
                other material (collectively, "Contributions"). Contributions
                may be viewable by other users of the Services and through
                third-party websites. As such, any Contributions you transmit
                may be treated in accordance with the Services' Privacy Policy.
                When you create or make available any Contributions, you thereby
                represent and warrant that:
              </>
            )}
            {language === 'cs' && (
              <>
                Služby nenabízejí uživatelům možnost odesílat nebo zveřejňovat
                obsah. Můžeme poskytnout možnost vytvářet, odesílat,
                zveřejňovat, zobrazovat, přenášet, předvádět, publikovat,
                distribuovat nebo vysílat obsah a materiálů nám nebo ve
                Službách, mimo jiné včetně textů, písemností, videí, zvuků,
                fotografií, grafiky, komentářů, návrhy nebo osobní informace či
                jiné materiály (dále jen "příspěvky"). Příspěvky mohou být
                zobrazeny ostatní uživatelé Služeb a prostřednictvím webových
                stránek třetích stran. Na adrese může být s jakýmikoliv
                Příspěvky, které předáte, nakládáno v souladu se zákonem o
                ochraně osobních údajů. se Zásadami ochrany osobních údajů
                Služeb. Když vytvoříte nebo zpřístupníte jakékoliv Příspěvky,
                prohlašujete a zaručujete, že:
              </>
            )}
            {language === 'de' && (
              <>
                Die Dienste bieten den Nutzern nicht die Möglichkeit, Inhalte
                einzureichen oder zu veröffentlichen. Wir können Ihnen die
                Möglichkeit geben, Inhalte zu erstellen, einzureichen, zu
                veröffentlichen, anzuzeigen, Inhalte und Materialien an uns oder
                die Dienste zu übermitteln, zu Materialien an uns oder die
                Dienste zu senden, einschließlich, aber nicht beschränkt auf
                Text, Schriften, Video, Audio, Fotos, Grafiken, Kommentare,
                Vorschläge, persönliche Informationen oder anderes Material
                (zusammenfassend als "Beiträge" bezeichnet). Beiträge können
                einsehbar sein für anderen Nutzern der Dienste und über Websites
                Dritter einsehbar sein. Als können alle von Ihnen übermittelten
                Beiträge in Übereinstimmung mit den der Datenschutzrichtlinie
                der Dienste behandelt werden. Wenn Sie Beiträge erstellen oder
                zur Verfügung stellen Beiträge erstellen oder zur Verfügung
                stellen, sichern Sie damit zu und gewährleisten, dass:
              </>
            )}
          </p>

          <ul className='list-disc ml-6'>
            <li>
              {language === 'en' && (
                <>
                  The creation, distribution, transmission, public display, or
                  performance, and the accessing, downloading, or copying of
                  your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vytváření, distribuce, přenos, veřejné vystavování nebo...
                  předvádění a zpřístupňování, stahování nebo kopírování vašich
                  dat. Příspěvky neporušují a nebudou porušovat vlastnická
                  práva, včetně mimo jiné autorských práv, patentů, ochranných
                  známek, obchodní tajemství nebo morální práva jakékoli třetí
                  strany.
                </>
              )}
              {language === 'de' && (
                <>
                  Die Erstellung, Verteilung, Übertragung, öffentliche
                  Darstellung oder Aufführung sowie das Zugreifen, Herunterladen
                  oder Kopieren Ihrer Beiträge verletzen nicht und werden nicht
                  gegen die Eigentumsrechte verstoßen, einschließlich, aber
                  nicht beschränkt auf Urheberrechte, Patente, Warenzeichen,
                  Geschäftsgeheimnisse oder moralische Rechte Dritter.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  You are the creator and owner of or have the necessary
                  licenses, rights, consents, releases, and permissions to use
                  and to authorize us, the Services, and other users of the
                  Services to use your Contributions in any manner contemplated
                  by the Services and these Legal Terms.
                </>
              )}
              {language === 'cs' && (
                <>
                  Jste autorem a vlastníkem nebo máte potřebné licence, práva,
                  souhlasy, uvolnění a oprávnění k používání a k nás, Služby a
                  ostatní uživatele Služeb k používání. vaše Příspěvky jakýmkoli
                  způsobem, který Služby předpokládají, a těmito právními
                  podmínkami.
                </>
              )}
              {language === 'de' && (
                <>
                  Sie sind der Ersteller und Eigentümer von oder verfügen über
                  die erforderlichen Lizenzen, Rechte, Zustimmungen, Freigaben
                  und Erlaubnisse zur Nutzung und zur uns, die Dienste und
                  andere Nutzer der Dienste zu ermächtigen, Ihre Ihre Beiträge
                  auf jede Art und Weise zu nutzen, die in den Diensten und
                  diesen rechtlichen Bedingungen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  You have the written consent, release, and/or permission of
                  each and every identifiable individual person in your
                  Contributions to use the name or likeness of each and every
                  such identifiable individual person to enable inclusion and
                  use of your Contributions in any manner contemplated by the
                  Services and these Legal Terms.
                </>
              )}
              {language === 'cs' && (
                <>
                  Máte písemný souhlas, uvolnění a/nebo svolení každého z nich.
                  a každé identifikovatelné osoby ve vašich příspěvcích, abyste
                  mohli používat jméno nebo podobiznu každé z těchto
                  identifikovatelných osob. osoby, aby bylo možné zahrnout a
                  používat vaše Příspěvků jakýmkoli způsobem, který
                  předpokládají Služby a tyto Podmínky. právními podmínkami.
                </>
              )}
              {language === 'de' && (
                <>
                  Sie haben die schriftliche Zustimmung, Freigabe und/oder
                  Erlaubnis von jeder jeder einzelnen identifizierbaren Person
                  in Ihren Beiträgen, um den Namen oder das Abbild jeder
                  einzelnen identifizierbaren Person zu verwenden Person zu
                  verwenden, um die Aufnahme und Verwendung Ihrer Beiträge in
                  jeglicher Art und Weise zu ermöglichen, die in den Diensten
                  und diesen Rechtliche Bedingungen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions are not false, inaccurate, or misleading.
                </>
              )}
              {language === 'cs' && (
                <>Vaše příspěvky nejsou nepravdivé, nepřesné ani zavádějící.</>
              )}
              {language === 'de' && (
                <>Ihre Beiträge sind nicht falsch, ungenau oder irreführend.</>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky nejsou nevyžádané ani neoprávněné. reklama,
                  propagační materiály, pyramidové systémy, řetězce dopisy,
                  spam, hromadné zásilky ani jiné formy získávání informací.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge sind keine unaufgeforderten oder unbefugten
                  Werbung, Promotionsmaterial, Schneeballsysteme, Kettenbriefe
                  Kettenbriefe, Spam, Massenmailings oder andere Formen der
                  Aufforderung.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky nejsou obscénní, oplzlé, chlípné, oplzlé,
                  násilné, obtěžující, pomlouvačné, hanlivé nebo jinak
                  znevažující. nevhodné (podle našeho rozhodnutí).
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge sind nicht obszön, unzüchtig, lasziv, schmutzig,
                  gewalttätig, belästigend, beleidigend, verleumderisch oder
                  anderweitig nicht anstößig (wie von uns bestimmt).
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky nezesměšňují, nezesměšňují, neznevažují,
                  nezastrašují, nikoho nezneužívají.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge dürfen niemanden lächerlich machen, verhöhnen,
                  verunglimpfen oder einschüchtern, oder beleidigen niemanden.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions are not used to harass or threaten (in the
                  legal sense of those terms) any other person and to promote
                  violence against a specific person or class of people.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky nejsou používány k obtěžování nebo vyhrožování
                  (v případě. v právním smyslu těchto pojmů) žádnou jinou osobu
                  a k propagaci násilí vůči konkrétní osobě nebo skupině osob.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge werden nicht dazu verwendet, andere Personen zu
                  belästigen oder zu bedrohen (im andere Personen zu belästigen
                  oder zu bedrohen (im juristischen Sinne dieser Begriffe) und
                  Gewalt gegen eine bestimmte Person oder eine Gruppe von
                  Personen zu fördern.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky neporušují žádné platné zákony, předpisy, nebo
                  pravidla.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge verstoßen nicht gegen geltende Gesetze,
                  Vorschriften oder Regeln, oder Regeln.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky neporušují práva na soukromí nebo publicitu.
                  žádné třetí strany.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge verletzen nicht die Datenschutz- oder
                  Veröffentlichungsrechte einer dritten Partei.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not violate any applicable law
                  concerning child pornography, or otherwise intended to protect
                  the health or well-being of minors.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky neporušují žádný platný zákon týkající se
                  dětské pornografie, ani jinak nesměřují k ochraně zdraví nebo
                  blaho nezletilých.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge verstoßen nicht gegen geltendes Recht in Bezug
                  auf Kinderpornographie verstoßen oder anderweitig zum Schutz
                  der Gesundheit oder des das Wohlergehen von Minderjährigen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not include any offensive comments that
                  are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky neobsahují žádné urážlivé komentáře, které jsou
                  související s rasou, národnostním původem, pohlavím,
                  sexuálními preferencemi, nebo tělesným postižením.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge dürfen keine beleidigenden Kommentare enthalten,
                  die die mit Rasse, nationaler Herkunft, Geschlecht, sexuellen
                  Vorlieben oder körperliche Behinderungen.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of these Legal Terms, or
                  any applicable law or regulation.
                </>
              )}
              {language === 'cs' && (
                <>
                  Vaše příspěvky jinak neporušují ani neodkazují na materiál.
                  porušují jakékoli ustanovení těchto právních podmínek nebo
                  jakýkoli jiný materiál. platné zákony nebo předpisy.
                </>
              )}
              {language === 'de' && (
                <>
                  Ihre Beiträge verstoßen nicht gegen oder verlinken nicht auf
                  Material die gegen eine Bestimmung dieser Nutzungsbedingungen
                  oder gegen ein geltende Gesetze oder Vorschriften.
                </>
              )}
            </li>
            <li>
              {language === 'en' && (
                <>
                  Any use of the Services in violation of the foregoing violates
                  these Legal Terms and may result in, among other things,
                  termination or suspension of your rights to use the Services.
                </>
              )}
              {language === 'cs' && (
                <>
                  Jakékoli použití Služeb v rozporu s výše uvedeným porušuje
                  tyto Právní podmínky a může mít za následek mimo jiné,
                  ukončení nebo pozastavení vašich práv na používání Služeb.
                </>
              )}
              {language === 'de' && (
                <>
                  Jede Nutzung der Dienste, die gegen das Vorstehende verstößt,
                  verletzt diese rechtlichen Bestimmungen und kann unter anderem
                  zur Folge haben Beendigung oder Aussetzung Ihrer Rechte zur
                  Nutzung der Dienste.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>7. CONTRIBUTION LICENSE</>}
            {language === 'cs' && <>7. LICENCE NA PŘÍSPĚVKY</>}
            {language === 'de' && <>7. BEITRAGSLIZENZ</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                You and Services agree that we may access, store, process, and
                use any information and personal data that you provide following
                the terms of the Privacy Policy and your choices (including
                settings).
              </>
            )}
            {language === 'cs' && (
              <>
                Vy a služby souhlasíte s tím, že můžeme přistupovat, ukládat,
                zpracovávat a používat. veškeré informace a osobní údaje, které
                jste poskytli v návaznosti na podmínek Zásad ochrany osobních
                údajů a vašich voleb (včetně nastavení).
              </>
            )}
            {language === 'de' && (
              <>
                Sie und die Dienste erklären sich damit einverstanden, dass wir
                auf folgende Informationen und personenbezogene Daten zugreifen,
                sie speichern, verarbeiten und nutzen dürfen Informationen und
                persönlichen Daten, die Sie uns zur Verfügung stellen, gemäß den
                den Bedingungen der Datenschutzrichtlinie und Ihren
                Entscheidungen (einschließlich Einstellungen).
              </>
            )}
          </p>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                By submitting suggestions or other feedback regarding the
                Services, you agree that we can use and share such feedback for
                any purpose without compensation to you.
              </>
            )}
            {language === 'cs' && (
              <>
                zasláním návrhů nebo jiné zpětné vazby týkající se Služeb,
                souhlasíte s tím, že takovou zpětnou vazbu můžeme použít a
                sdílet za jakýmkoli účelem. bez nároku na kompenzaci.
              </>
            )}
            {language === 'de' && (
              <>
                Indem Sie uns Vorschläge oder sonstiges Feedback zu den Diensten
                übermitteln, erklären Sie sich damit einverstanden, dass wir
                dieses Feedback für jeden Zweck nutzen und weitergeben können
                ohne Entschädigung für Sie.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Services. You are solely responsible for
                your Contributions to the Services and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
              </>
            )}
            {language === 'cs' && (
              <>
                Na vaše příspěvky si nečiníme nárok. Vy si ponecháváte plné
                vlastnictví všech vašich Příspěvků a veškerých duševních práv.
                práva na vlastnictví nebo jiná vlastnická práva spojená s vašimi
                příspěvky. Příspěvky. Nejsme odpovědní za jakákoli prohlášení
                nebo prohlášení ve vašich Příspěvcích, které jste poskytli v
                jakékoli oblasti na webu. Služeb. Za své Příspěvky nesete
                výhradní odpovědnost vy. Služby a výslovně souhlasíte s tím, že
                nás zprostíte odpovědnosti za jakékoli a veškerou odpovědnost a
                zdržíte se jakýchkoli právních kroků vůči nám. v souvislosti s
                vašimi Příspěvky.
              </>
            )}
            {language === 'de' && (
              <>
                Wir machen keine Eigentumsrechte an Ihren Beiträgen geltend. Sie
                behalten das Eigentum an allen Ihren Beiträgen und an allen
                geistigen Eigentumsrechte oder andere Eigentumsrechte, die mit
                Ihren Beiträgen Beiträge. Wir sind nicht haftbar für
                irgendwelche Aussagen oder Darstellungen in Ihren Beiträgen, die
                Sie in irgendeinem Bereich der den Diensten. Sie sind allein
                verantwortlich für Ihre Beiträge zu den die Dienste, und Sie
                erklären sich ausdrücklich damit einverstanden, uns von
                jeglicher Verantwortung freizustellen und von jeglichen
                rechtlichen Schritten gegen uns bezüglich Ihrer Beiträge zu
                unterlassen.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>8. THIRD-PARTY WEBSITES AND CONTENT</>}
            {language === 'cs' && <>8. WEBOVÉ STRÁNKY A OBSAH TŘETÍCH STRAN</>}
            {language === 'de' && <>8. WEBSITES UND INHALTE DRITTER</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                The Services may contain (or you may be sent via the Site) links
                to other websites ("Third-Party Websites") as well as articles,
                photographs, text, graphics, pictures, designs, music, sound,
                video, information, applications, software, and other content or
                items belonging to or originating from third parties
                ("Third-Party Content"). Such Third-Party Websites and
                Third-Party Content are not investigated, monitored, or checked
                for accuracy, appropriateness, or completeness by us, and we are
                not responsible for any Third-Party Websites accessed through
                the Services or any Third-Party Content posted on, available
                through, or installed from the Services, including the content,
                accuracy, offensiveness, opinions, reliability, privacy
                practices, or other policies of or contained in the Third-Party
                Websites or the Third-Party Content. Inclusion of, linking to,
                or permitting the use or installation of any Third-Party
                Websites or any Third-Party Content does not imply approval or
                endorsement thereof by us. If you decide to leave the Services
                and access the Third-Party Websites or to use or install any
                Third-Party Content, you do so at your own risk, and you should
                be aware these Legal Terms no longer govern. You should review
                the applicable terms and policies, including privacy and data
                gathering practices, of any website to which you navigate from
                the Services or relating to any applications you use or install
                from the Services. Any purchases you make through Third-Party
                Websites will be through other websites and from other
                companies, and we take no responsibility whatsoever in relation
                to such purchases which are exclusively between you and the
                applicable third party. You agree and acknowledge that we do not
                endorse the products or services offered on Third-Party Websites
                and you shall hold us blameless from any harm caused by your
                purchase of such products or services. Additionally, you shall
                hold us blameless from any losses sustained by you or harm
                caused to you relating to or resulting in any way from any
                Third-Party Content or any contact with Third-Party Websites.
              </>
            )}
            {language === 'cs' && (
              <>
                Služby mohou obsahovat (nebo vám mohou být prostřednictvím
                Stránek zaslány) odkazy na. na jiné webové stránky ("webové
                stránky třetích stran"), jakož i na články, fotografie, texty,
                grafiku, obrázky, návrhy, hudbu, zvuk a video, informace,
                aplikace, software a další obsah nebo položky. patřící třetím
                stranám nebo pocházející od třetích stran ("weby třetích
                stran"). Obsah třetích stran"). Tyto webové stránky třetích
                stran a obsah třetích stran nejsou zkoumány, monitorovány ani
                kontrolovány z hlediska přesnosti a vhodnosti, nebo úplnosti a
                my nejsme odpovědní za žádné jejich Webové stránky třetích
                stran, ke kterým je přístup prostřednictvím Služeb nebo
                jakéhokoli jiného obsahu třetích stran. Obsah třetích stran
                zveřejněný na Službách, dostupný jejich prostřednictvím nebo
                nainstalovaný ze Služeb. Služby, včetně obsahu, přesnosti,
                urážlivosti, názory, spolehlivost, zásady ochrany osobních údajů
                nebo jiné zásady těchto nebo obsažených na Webových stránkách
                třetích stran nebo v Obsahu třetích stran. Zahrnutí, odkazování
                na nebo umožnění používání nebo instalace jakýchkoli Webových
                stránek třetích stran nebo jakéhokoli Obsahu třetích stran
                neznamená, že je možné jejich schválení nebo podporu z naší
                strany. Pokud se rozhodnete opustit Služeb a přejít na Webové
                stránky třetích stran nebo používat či nainstalovat jakýkoli
                Obsah třetích stran, činíte tak na vlastní nebezpečí a měli
                byste si být vědomi toho, že tyto Právní podmínky se již neřídí.
                Měli byste se seznámit s platnými podmínkami a zásadami, včetně
                ochrany osobních údajů a postupů shromažďování dat, všech
                webových stránek, na které přejdete ze Služeb nebo které se
                vztahují k aplikacím, které používáte nebo instalujete ze
                Služeb. Veškeré nákupy, které uskutečníte prostřednictvím
                webových stránek třetích stran, budou probíhat prostřednictvím
                jiných webových stránek a od jiných společností a my neneseme
                žádnou odpovědnost v souvislosti s takovými nákupy, které jsou
                výhradně záležitostí mezi vámi a příslušnou třetí stranou.
                Souhlasíte a berete na vědomí, že neschvalujeme produkty nebo
                služby nabízené na Webových stránkách třetích stran, a budete
                nás činit bezúhonnými v případě jakékoli škody způsobené nákupem
                takových produktů nebo služeb. Kromě toho nás zbavujete viny za
                jakékoli ztráty, které utrpíte, nebo škody, které vám vzniknou v
                souvislosti s jakýmkoli obsahem třetích stran nebo jakýmkoli
                kontaktem s webovými stránkami třetích stran.
              </>
            )}
            {language === 'de' && (
              <>
                Die Dienste können Links zu anderen Websites ("Websites
                Dritter") enthalten (oder Ihnen über die Website zugesandt
                werden). anderen Websites ("Websites von Dritten") sowie
                Artikeln, Fotografien, Texte, Grafiken, Bilder, Designs, Musik,
                Ton, Video, Informationen, Anwendungen, Software und andere
                Inhalte oder Gegenstände die Dritten gehören oder von ihnen
                stammen ("Inhalte von Dritten Inhalt"). Solche Websites Dritter
                und Inhalte Dritter werden nicht nicht untersucht, überwacht
                oder auf Richtigkeit, Angemessenheit oder Vollständigkeit
                geprüft, oder Vollständigkeit überprüft, und wir sind nicht
                verantwortlich für Websites von Dritten, auf die über die
                Dienste zugegriffen wird, oder für Inhalte von Drittanbietern,
                die auf den Diensten veröffentlicht, über diese verfügbar sind
                oder von diesen installiert werden die Dienste, einschließlich
                des Inhalts, der Genauigkeit, der Beleidigung, Meinungen,
                Zuverlässigkeit, Datenschutzpraktiken oder andere Richtlinien
                von oder die auf den Websites Dritter oder in den Inhalten
                Dritter enthalten sind. Die Aufnahme von, die Verknüpfung mit
                oder die Erlaubnis zur Nutzung oder Installation von Websites
                von Drittanbietern oder Inhalten von Drittanbietern bedeutet
                nicht, dass keine Billigung oder Befürwortung durch uns. Wenn
                Sie sich entscheiden, die Dienste zu verlassen und auf die
                Websites von Dritten zuzugreifen oder Inhalte Dritter zu nutzen
                oder zu installieren, tun Sie dies auf eigenes Risiko und
                sollten Sie sollten sich bewusst sein, dass diese rechtlichen
                Bedingungen nicht mehr gelten. Sie sollten die geltenden
                Bedingungen und Richtlinien, einschließlich der Datenschutz- und
                Datenerfassungspraktiken, jeder Website prüfen, zu der Sie von
                den Diensten aus navigieren oder die sich auf Anwendungen
                bezieht, die Sie von den Diensten aus nutzen oder installieren.
                Alle Käufe, die Sie über Websites von Dritten tätigen, erfolgen
                über andere Websites und von anderen Unternehmen, und wir
                übernehmen keinerlei Verantwortung in Bezug auf solche Käufe,
                die ausschließlich zwischen Ihnen und dem betreffenden Dritten
                erfolgen. Sie erklären sich damit einverstanden und erkennen an,
                dass wir die auf Websites Dritter angebotenen Produkte oder
                Dienstleistungen nicht befürworten, und Sie halten uns von
                jeglichem Schaden frei, der durch den Kauf solcher Produkte oder
                Dienstleistungen entsteht. Darüber hinaus halten Sie uns von
                jeglichen Verlusten oder Schäden frei, die Sie im Zusammenhang
                mit Inhalten Dritter oder durch den Kontakt mit Websites Dritter
                erleiden.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>9. SERVICES MANAGEMENT</>}
            {language === 'cs' && <>9. SPRÁVA SLUŽEB</>}
            {language === 'de' && <>9. VERWALTUNG DER DIENSTLEISTUNGEN</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                We reserve the right, but not the obligation, to: (1) monitor
                the Services for violations of these Legal Terms; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Services in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Services.
              </>
            )}
            {language === 'cs' && (
              <>
                Vyhrazujeme si právo, nikoliv však povinnost: (1) monitorovat
                Služeb, zda nedochází k porušování těchto právních podmínek; (2)
                přijímat vhodná opatření. právní kroky proti komukoli, kdo podle
                našeho vlastního uvážení poruší tyto podmínky. zákon nebo tyto
                Právní podmínky, včetně, ale bez omezení, nahlášení takového
                uživatele orgánům činným v trestním řízení; (3) dle našeho
                výhradního uvážení. dle vlastního uvážení a bez omezení,
                odmítnout, omezit přístup, omezit přístup k webu, nebo
                dostupnost nebo zakázat (v rozsahu, v jakém je to technologicky
                možné). proveditelné) jakýkoli váš příspěvek nebo jeho část; (4)
                v případě, že je to možné, může dle našeho vlastního uvážení a
                bez omezení, upozornění nebo odpovědnosti. odstranit ze Služeb
                nebo jinak znepřístupnit všechny soubory a obsah které jsou
                nadměrně velké nebo jakýmkoli způsobem zatěžují naše systémy; a
                (5) jinak spravovat Služby způsobem, který je určen k tomu, aby
                k ochraně našich práv a majetku a k usnadnění řádné správy
                našich fungování Služeb.
              </>
            )}
            {language === 'de' && (
              <>
                Wir behalten uns das Recht, aber nicht die Pflicht vor,: (1) die
                Dienste zu überwachen Dienste auf Verstöße gegen diese
                rechtlichen Bestimmungen zu überwachen; (2) geeignete rechtliche
                Schritte gegen jeden einzuleiten, der nach unserem alleinigen
                Ermessen gegen gegen das Gesetz oder diese Nutzungsbedingungen
                verstößt, einschließlich und ohne Einschränkung,
                Strafverfolgungsbehörden zu melden; (3) nach unserem alleinigen
                Ermessen und ohne Einschränkung den Zugang zu verweigern,
                einzuschränken, die Verfügbarkeit einschränken oder deaktivieren
                (soweit technisch möglich) (4) nach eigenem Ermessen und ohne
                Einschränkung den Zugang zu Ihren Beiträgen oder Teilen davon
                nach unserem alleinigen Ermessen und ohne Einschränkung,
                Ankündigung oder Haftung, um aus den Diensten zu entfernen oder
                anderweitig alle Dateien und Inhalte zu deaktivieren zu
                entfernen oder anderweitig zu deaktivieren, die übermäßig groß
                sind oder unsere Systeme belasten; und (5) die Dienste
                anderweitig in einer Weise zu verwalten Rechte und unser
                Eigentum zu schützen und das ordnungsgemäße Funktionieren der
                Funktionieren der Dienste zu erleichtern.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>10. PRIVACY POLICY</>}
            {language === 'cs' && <>10. ZÁSADY OCHRANY OSOBNÍCH ÚDAJŮ</>}
            {language === 'de' && <>10. PRIVACY-POLITIK</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                We care about data privacy and security. Please review our
                Privacy Policy:
                https://www.planetopedia.agency/personal-data-protection. By
                using the Services, you agree to be bound by our Privacy Policy,
                which is incorporated into these Legal Terms. Please be advised
                the Services are hosted in Germany. If you access the Services
                from any other region of the world with laws or other
                requirements governing personal data collection, use, or
                disclosure that differ from applicable laws in Germany, then
                through your continued use of the Services, you are transferring
                your data to Germany, and you expressly consent to have your
                data transferred to and processed in Germany. Further, we do not
                knowingly accept, request, or solicit information from children
                or knowingly market to children. Therefore, in accordance with
                the U.S. Children’s Online Privacy Protection Act, if we receive
                actual knowledge that anyone under the age of 13 has provided
                personal information to us without the requisite and verifiable
                parental consent, we will delete that information from the
                Services as quickly as is reasonably practical.
              </>
            )}
            {language === 'cs' && (
              <>
                Záleží nám na ochraně osobních údajů a jejich zabezpečení.
                Přečtěte si prosím naše zásady ochrany osobních údajů Zásady
                ochrany osobních údajů:
                https://www.planetopedia.agency/personal-data-protection. Podle
                používáním služeb souhlasíte s tím, že se budete řídit našimi
                Zásadami ochrany osobních údajů, které jsou součástí těchto
                právních podmínek. Upozorňujeme vás, že Služby jsou hostovány v
                Německu. Pokud ke Službám přistupujete z jakéhokoli v jiné
                oblasti světa, kde platí zákony nebo jiné požadavky upravující
                shromažďování, používání nebo zveřejňování osobních údajů, které
                se liší od těchto pravidel platnými zákony v Německu, pak
                prostřednictvím vašeho dalšího používání Služeb Služeb,
                přenášíte své údaje do Německa a výslovně souhlasíte s tím, aby
                vaše údaje byly předávány a zpracovávány v Německu. Německu.
                Dále vědomě nepřijímáme, nevyžadujeme ani nepožadujeme.
                informace od dětí ani vědomě neprodáváme dětem. Proto v souladu
                s americkým zákonem o ochraně osobních údajů dětí na internetu
                (Children's Online Privacy). Privacy Protection Act, pokud
                získáme skutečné informace o tom, že kdokoli mladší věku 13 let
                nám poskytl osobní údaje, aniž bychom o tom věděli. požadovaného
                a ověřitelného souhlasu rodičů, tyto údaje vymažeme. informace
                ze služeb tak rychle, jak je to jen možné.
              </>
            )}
            {language === 'de' && (
              <>
                Datenschutz und Datensicherheit sind uns wichtig. Bitte lesen
                Sie unsere Datenschutz Richtlinie:
                https://www.planetopedia.agency/personal-data-protection. Durch
                Nutzung der Dienste erklären Sie sich mit unserer
                Datenschutzrichtlinie einverstanden, die Bestandteil dieser
                rechtlichen Bestimmungen ist. Bitte beachten Sie, dass die
                Dienste in Deutschland gehostet werden. Wenn Sie auf die Dienste
                von einer anderen Region einer anderen Region der Welt
                zugreifen, in der Gesetze oder andere Anforderungen an die die
                Erhebung, Verwendung oder Weitergabe personenbezogener Daten von
                den von den in Deutschland geltenden Gesetzen abweichen,
                übertragen Sie durch Ihre weitere Dienste Ihre Daten nach
                Deutschland, und Sie stimmen ausdrücklich Sie stimmen
                ausdrücklich zu, dass Ihre Daten nach Deutschland übertragen und
                in Deutschland. Darüber hinaus akzeptieren, erbitten oder
                fordern wir nicht wissentlich Informationen von Kindern an und
                vermarkten diese auch nicht wissentlich an Kinder. Daher werden
                wir in Übereinstimmung mit dem U.S. Children's Online Privacy
                Protection Act (Gesetz zum Schutz der Online-Privatsphäre von
                Kindern), wenn wir tatsächliche Kenntnis davon erhalten, dass
                eine Person unter Alter von 13 Jahren uns personenbezogene Daten
                zur Verfügung gestellt hat, ohne dass die ohne die erforderliche
                und überprüfbare elterliche Zustimmung zur Verfügung gestellt
                hat, werden wir diese Informationen so schnell wie möglich aus
                den Diensten löschen.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>11. TERM AND TERMINATION</>}
            {language === 'cs' && <>11. DOBA PLATNOSTI A UKONČENÍ</>}
            {language === 'de' && <>11. LAUFZEIT UND KÜNDIGUNG</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT
                ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </>
            )}
            {language === 'cs' && (
              <>
                Tyto právní podmínky zůstávají v plné platnosti a účinnosti,
                dokud se používáte Služby. BEZ OMEZENÍ JAKÉHOKOLI JINÉHO
                USTANOVENÍ TĚCHTO PRÁVNÍCH PODMÍNEK SI VYHRAZUJEME PRÁVO NA
                ZÁKLADĚ VLASTNÍHO UVÁŽENÍ A BEZ PŘEDCHOZÍHO UPOZORNĚNÍ NEBO
                ODPOVĚDNOSTI ODEPŘÍT PŘÍSTUP KE SLUŽBÁM A JEJICH POUŽÍVÁNÍ.
                (VČETNĚ ZABLOKOVÁNÍ URČITÝCH IP ADRES), A TO JAKÉKOLI OSOBĚ Z
                JAKÉHOKOLI DŮVODU. DŮVODU NEBO BEZ DŮVODU, VČETNĚ, ALE
                NEOMEZENĚ, Z DŮVODU PORUŠENÍ JAKÉHOKOLI PROHLÁŠENÍ, ZÁRUKY NEBO
                DOHODY OBSAŽENÉ V TĚCHTO PRÁVNÍCH PŘEDPISECH. NEBO JAKÉHOKOLI
                PLATNÉHO ZÁKONA NEBO NAŘÍZENÍ. MŮŽEME UKONČIT VAŠE POUŽÍVAT
                SLUŽBY NEBO SE NA NICH PODÍLET NEBO ODSTRANIT JAKÝKOLI OBSAH
                NEBO INFORMACE, KTERÉ JSTE ZVEŘEJNILI, KDYKOLI A BEZ VAROVÁNÍ V
                NAŠICH DLE VLASTNÍHO UVÁŽENÍ.
              </>
            )}
            {language === 'de' && (
              <>
                Diese rechtlichen Bestimmungen bleiben in vollem Umfang in
                Kraft, solange Sie die Dienste nutzen. OHNE EINSCHRÄNKUNG EINER
                ANDEREN BESTIMMUNG DIESER BEHALTEN WIR UNS DAS RECHT VOR, NACH
                UNSEREM ALLEINIGEN ERMESSEN UND DEN ZUGANG ZU UND DIE NUTZUNG
                DER DIENSTE OHNE ANKÜNDIGUNG ODER HAFTUNG ZU VERWEIGERN ZU
                VERWEIGERN (EINSCHLIESSLICH DER SPERRUNG BESTIMMTER
                IP-ADRESSEN), FÜR JEDE GRUND ODER OHNE GRUND ZU VERWEIGERN,
                EINSCHLIESSLICH UND OHNE EINSCHRÄNKUNG BEI EINER IN DIESEN
                RECHTLICHEN BESTIMMUNGEN ENTHALTENEN ZUSICHERUNG, GARANTIE ODER
                ZUSAGE ODER EINES GELTENDEN GESETZES ODER EINER VORSCHRIFT. WIR
                KÖNNEN IHRE NUTZUNG ODER TEILNAHME AN DEN DIENSTEN BEENDEN ODER
                JEGLICHE INHALTE ODER INFORMATIONEN, DIE SIE VERÖFFENTLICHT
                HABEN, JEDERZEIT UND OHNE VORWARNUNG NACH UNSEREM EIGENEM
                ERMESSEN.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </>
            )}
            {language === 'cs' && (
              <>
                Pokud z jakéhokoli důvodu ukončíme nebo pozastavíme váš účet,
                jste povinni. zakázáno registrovat a vytvářet nový účet pod
                vaším jménem. jménem, falešným nebo vypůjčeným jménem nebo
                jménem jakékoli třetí strany, a to i v případě, že jste si
                založili nový účet. i kdybyste jednali jménem třetí strany.
                Kromě toho zrušení nebo pozastavení vašeho účtu si vyhrazujeme
                právo přijmout podniknout příslušné právní kroky, včetně, ale
                bez omezení, stíhání občanskoprávní, trestněprávní a soudní
                nápravu.
              </>
            )}
            {language === 'de' && (
              <>
                Wenn wir Ihr Konto aus irgendeinem Grund kündigen oder
                aussetzen, ist es Ihnen ist es Ihnen untersagt, sich zu
                registrieren und ein neues Konto unter Ihrem Namen, einem
                gefälschten oder geliehenen Namen oder dem Namen einer dritten
                Partei auch wenn Sie im Namen eines Dritten handeln. Zusätzlich
                zur Ihr Konto zu kündigen oder zu sperren, behalten wir uns das
                Recht vor geeignete rechtliche Schritte einzuleiten,
                einschließlich, aber nicht beschränkt auf zivil-,
                strafrechtliche und unterlassungsrechtliche Rechtsmittel.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>12. MODIFICATIONS AND INTERRUPTIONS</>}
            {language === 'cs' && <>12. ZMĚNY A PŘERUŠENÍ</>}
            {language === 'de' && <>12. ÄNDERUNGEN UND UNTERBRECHUNGEN</>}
          </h2>

          <p className='mb-4'>
            {language === 'en' && (
              <>
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We also reserve the
                right to modify or discontinue all or part of the Services
                without notice at any time. We will not be liable to you or any
                third party for any modification, price change, suspension, or
                discontinuance of the Services.
              </>
            )}
            {language === 'cs' && (
              <>
                Vyhrazujeme si právo měnit, upravovat nebo odstraňovat obsah
                stránek. kdykoli a z jakéhokoli důvodu dle našeho uvážení. bez
                předchozího upozornění. Nejsme však povinni aktualizovat žádné
                informace v našich službách. Vyhrazujeme si rovněž právo upravit
                nebo kdykoli bez předchozího upozornění přerušit poskytování
                všech Služeb nebo jejich části. Nebudeme vám ani žádné třetí
                straně odpovídat za jakékoli úpravu, změnu ceny, pozastavení
                nebo ukončení poskytování služeb. Služeb.
              </>
            )}
            {language === 'de' && (
              <>
                Wir behalten uns das Recht vor, den Inhalt der Dienste jederzeit
                und ohne Angabe von Gründen zu ändern, zu modifizieren oder zu
                entfernen. der Dienste jederzeit und aus jedem Grund nach
                unserem alleinigen Ermessen ohne vorherige Ankündigung. Wir sind
                jedoch nicht verpflichtet, die Informationen Informationen auf
                unseren Diensten zu aktualisieren. Wir behalten uns außerdem das
                Recht vor, die die Dienste jederzeit und ohne Vorankündigung
                ganz oder teilweise einzustellen. Wir sind weder Ihnen noch
                Dritten gegenüber haftbar für jegliche Änderung, Preisänderung,
                Aussetzung oder Einstellung der Dienste Dienste.
              </>
            )}
          </p>

          <p>
            {language === 'en' && (
              <>
                We cannot guarantee the Services will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
              </>
            )}
            {language === 'cs' && (
              <>
                Nemůžeme zaručit, že Služby budou vždy dostupné. Na adrese . se
                mohou vyskytnout hardwarové, softwarové nebo jiné problémy nebo
                může být nutné je odstranit. provádět údržbu související se
                Službami, což může mít za následek přerušení, zpoždění nebo
                chyby. Vyhrazujeme si právo na změnu, revidovat, aktualizovat,
                pozastavit, přerušit nebo jinak upravovat Služby. Služby kdykoli
                a z jakéhokoli důvodu, aniž byste o tom byli informováni. Na
                adrese . souhlasíte s tím, že neneseme žádnou odpovědnost za
                jakoukoli ztrátu, škodu nebo poškození. nepříjemnosti způsobené
                vaší nemožností přístupu ke službám nebo jejich používání. během
                jakéhokoli výpadku nebo přerušení poskytování Služeb. Nic v
                těchto právních podmínkách vykládat tak, že nás zavazuje
                udržovat a udržovat podporovat Služby nebo poskytovat jakékoli
                opravy, aktualizace nebo změny. vydání v souvislosti s nimi.
              </>
            )}
            {language === 'de' && (
              <>
                Wir können nicht garantieren, dass die Dienste zu jeder Zeit
                verfügbar sind. Wir können Hardware-, Software- oder andere
                Probleme auftreten oder müssen Wartungsarbeiten im Zusammenhang
                mit den Diensten durchführen, was zu Unterbrechungen,
                Verzögerungen oder Fehlern führen. Wir behalten uns das Recht
                vor, die Dienste zu ändern, zu ändern, zu überarbeiten, zu
                aktualisieren, auszusetzen, einzustellen oder die Dienste
                jederzeit und ohne Angabe von Gründen zu ändern, zu
                überarbeiten, zu aktualisieren, einzustellen oder anderweitig zu
                modifizieren, ohne Sie darüber zu informieren. Sie erklären sich
                damit einverstanden, dass wir keinerlei Haftung für Verluste,
                Schäden oder Unannehmlichkeiten, die dadurch entstehen, dass Sie
                die Dienste nicht nutzen können während einer Ausfallzeit oder
                Unterbrechung der Dienste. Nichts in diesen rechtlichen
                Bedingungen ist so auszulegen, dass wir verpflichtet sind, die
                die Dienste zu warten und zu unterstützen oder Korrekturen,
                Aktualisierungen oder Freigaben in Verbindung damit.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>13. GOVERNING LAW</>}
            {language === 'cs' && <>13. ROZHODNÉ PRÁVO</>}
            {language === 'de' && <>13. GELTENDES RECHT</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                These Legal Terms are governed by and interpreted following the
                laws of Czechia, and the use of the United Nations Convention of
                Contracts for the International Sales of Goods is expressly
                excluded. If your habitual residence is in the EU, and you are a
                consumer, you additionally possess the protection provided to
                you by obligatory provisions of the law in your country to
                residence. Dominik Grössl and yourself both agree to submit to
                the non-exclusive jurisdiction of the courts of Němčice, which
                means that you may make a claim to defend your consumer
                protection rights in regards to these Legal Terms in Czechia, or
                in the EU country in which you reside.
              </>
            )}
            {language === 'cs' && (
              <>
                Tyto právní podmínky se řídí a vykládají podle zákonů. České
                republiky a používáním Úmluvy OSN o ochraně lidských práv a
                základních svobod. Smlouvy o mezinárodní koupi zboží je výslovně
                uvedeno v článku 2. vyloučeno. Pokud se vaše obvyklé bydliště
                nachází v EU a jste spotřebitelem, požíváte navíc ochrany,
                kterou vám poskytuje závaznými ustanoveními právních předpisů v
                zemi vašeho bydliště. Dominik Grössl i vy souhlasíte s tím, že
                se podrobíte nevýlučné soudní pravomoci soudů v Němčicích, což
                znamená, že že můžete podat žalobu na ochranu svých práv na
                ochranu spotřebitele ve vztahu k těmto právním podmínkám v České
                republice nebo v zemi EU, ve které se nachází ve které máte
                bydliště.
              </>
            )}
            {language === 'de' && (
              <>
                Diese Nutzungsbedingungen unterliegen dem tschechischen Recht
                und werden nach diesem ausgelegt. der Tschechischen Republik,
                und die Anwendung des Übereinkommens der Vereinten Nationen über
                Übereinkommens der Vereinten Nationen über Verträge über den
                internationalen Warenkauf wird ausdrücklich ausgeschlossen. Wenn
                Sie Ihren gewöhnlichen Aufenthalt in der EU haben und Sie ein
                Verbraucher sind, verfügen Sie zusätzlich über den Schutz, der
                Ihnen durch zwingenden Bestimmungen des Rechts in Ihrem
                Wohnsitzland. Dominik Grössl und Sie unterwerfen sich beide der
                nicht ausschließliche Zuständigkeit der Gerichte von Němčice,
                was bedeutet dass Sie eine Klage zur Verteidigung Ihrer
                Verbraucherschutzrechte einreichen können in Bezug auf diese
                rechtlichen Bestimmungen in Tschechien oder in dem EU-Land, in
                dem Sie in dem Sie Ihren Wohnsitz haben.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>14. DISPUTE RESOLUTION</>}
            {language === 'cs' && <>14. ŘEŠENÍ SPORŮ</>}
            {language === 'de' && <>14. STREITBEILEGUNG</>}
          </h2>

          <h4 className='mt-1 font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Informal Negotiations</>}
            {language === 'cs' && <>Neformální jednání</>}
            {language === 'de' && <>Informelle Verhandlungen</>}
          </h4>

          <p>
            {language === 'en' && (
              <>
                To expedite resolution and control the cost of any dispute,
                controversy, or claim related to these Legal Terms (each a
                "Dispute" and collectively, the "Disputes") brought by either
                you or us (individually, a "Party" and collectively, the
                "Parties"), the Parties agree to first attempt to negotiate any
                Dispute (except those Disputes expressly provided below)
                informally for at least __________ days before initiating
                arbitration. Such informal negotiations commence upon written
                notice from one Party to the other Party.
              </>
            )}
            {language === 'cs' && (
              <>
                Urychlit řešení a kontrolovat náklady případného sporu, sporů
                nebo nároků souvisejících s těmito právními podmínkami (dále jen
                "spor"). a společně "spory"), které jste vy nebo my zahájili.
                (jednotlivě "Strana" a společně "Strany"), je možné se obrátit
                na Strany se dohodly, že se nejprve pokusí vyjednat jakýkoli
                spor (s výjimkou sporů, které se týkají těch Sporů, které jsou
                výslovně uvedeny níže) neformálně po dobu nejméně __________ dnů
                před zahájením rozhodčího řízení. Takové neformální jednání
                začnou na základě písemného oznámení jedné ze stran druhé
                straně. druhé straně.
              </>
            )}
            {language === 'de' && (
              <>
                Beschleunigung der Beilegung und Kontrolle der Kosten von
                Streitfällen, Streitigkeiten oder Forderungen im Zusammenhang
                mit diesen Nutzungsbedingungen (jeweils eine "Streitigkeit" und
                gemeinsam die "Streitigkeiten"), die entweder von Ihnen oder von
                uns (einzeln eine "Partei" und zusammen die "Parteien"),
                vereinbaren die Parteien vereinbaren, zunächst zu versuchen,
                jede Streitigkeit zu verhandeln (außer Streitigkeiten, die unten
                ausdrücklich aufgeführt sind) informell für mindestens
                __________ Tage informell zu verhandeln, bevor sie ein
                Schiedsverfahren einleiten. Solche informellen Verhandlungen
                beginnen mit der schriftlichen Mitteilung einer Partei an die
                anderen Partei.
              </>
            )}
          </p>

          <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Binding Arbitration</>}
            {language === 'cs' && <>Závazná arbitráž</>}
            {language === 'de' && <>Verbindliche Schiedsgerichtsbarkeit</>}
          </h4>

          <p>
            {language === 'en' && (
              <>
                Any dispute arising out of or in connection with these Legal
                Terms, including any question regarding its existence, validity,
                or termination, shall be referred to and finally resolved by the
                International Commercial Arbitration Court under the European
                Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
                according to the Rules of this ICAC, which, as a result of
                referring to it, is considered as the part of this clause. The
                number of arbitrators shall be __________. The seat, or legal
                place, or arbitration shall be __________. The language of the
                proceedings shall be __________. The governing law of these
                Legal Terms shall be substantive law of __________.
              </>
            )}
            {language === 'cs' && (
              <>
                Jakýkoli spor vyplývající z těchto právních podmínek nebo v
                souvislosti s nimi, včetně jakýchkoli otázek týkajících se
                jejich existence, platnosti nebo a jeho ukončení, bude postoupen
                a s konečnou platností vyřešen prostřednictvím Mezinárodní
                obchodní arbitrážní soud podle Evropského rozhodčího soudu
                (Belgie, Brusel, Avenue Louise, 146). v souladu s Řádem tohoto
                ICAC, který v důsledku postoupení věci na něj, se považuje za
                součást této doložky. Počet rozhodců je __________. Sídlo nebo
                právní místo, popř. rozhodčího řízení je __________. Jednací
                jazyk je __________. Rozhodným právem pro tyto právní podmínky
                je hmotné právo __________.
              </>
            )}
            {language === 'de' && (
              <>
                Alle Streitigkeiten, die sich aus oder im Zusammenhang mit
                diesen rechtlichen Bestimmungen ergeben, einschließlich aller
                Fragen zu deren Existenz, Gültigkeit oder Beendigung, werden an
                das Internationale Handelsschiedsgericht Internationalen
                Handelsschiedsgericht bei der Europäischen Schiedskammer
                (Belgien, Brüssel, Avenue Louise, 146) gemäß der
                Schiedsgerichtsordnung dieses ICAC, das durch die Befassung als
                Teil der vorliegenden Klausel betrachtet wird. Die Anzahl der
                Schiedsrichtern ist __________. Der Sitz oder der rechtliche Ort
                des Schiedsgerichtsbarkeit ist __________. Die Sprache des
                Verfahrens ist __________. Das auf diese rechtlichen Bedingungen
                anwendbare Recht ist das materielle Recht von __________.
              </>
            )}
          </p>

          <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && <>Restrictions</>}
            {language === 'cs' && <>Omezení</>}
            {language === 'de' && <>Beschränkungen</>}
          </h4>

          <p>
            {language === 'en' && (
              <>
                The Parties agree that any arbitration shall be limited to the
                Dispute between the Parties individually. To the full extent
                permitted by law, (a) no arbitration shall be joined with any
                other proceeding; (b) there is no right or authority for any
                Dispute to be arbitrated on a class-action basis or to utilize
                class action procedures; and (c) there is no right or authority
                for any Dispute to be brought in a purported representative
                capacity on behalf of the general public or any other persons.
              </>
            )}
            {language === 'cs' && (
              <>
                Strany se dohodly, že rozhodčí řízení se omezí na. spor mezi
                stranami jednotlivě. V plném rozsahu povolen zákonem, (a) žádné
                rozhodčí řízení nesmí být spojeno s žádným jiným rozhodčím
                řízením. řízením; (b) neexistuje žádné právo ani oprávnění, aby
                byl jakýkoli spor řešen v rámci arbitrážního řízení. rozhodčího
                řízení na základě hromadné žaloby nebo využít hromadnou žalobu.
                a (c) neexistuje žádné právo ani oprávnění, aby jakýkoli spor
                byl řešen v třídním řízení. být zahájen jako údajný zástupce
                jménem všech účastníků sporu. široké veřejnosti nebo jiných
                osob.
              </>
            )}
            {language === 'de' && (
              <>
                Die Vertragsparteien vereinbaren, dass sich ein Schiedsverfahren
                auf die Streitigkeit zwischen den einzelnen Parteien beschränkt
                ist. Im vollen gesetzlich zulässigen Umfang (a) darf kein
                Schiedsverfahren mit einem anderen Verfahren verbunden werden
                Verfahren verbunden werden; (b) es besteht kein Recht und keine
                Befugnis, eine Streitigkeit Sammelklagen zu schlichten oder
                Sammelklagenverfahren zu verwenden und (c) es besteht kein Recht
                und keine Befugnis für eine Streitigkeit im Namen der
                Allgemeinheit oder anderer Personen in einer vermeintlich
                repräsentativen der Allgemeinheit oder anderer Personen
                vorzubringen.
              </>
            )}
          </p>

          <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'>
            {language === 'en' && (
              <>Exceptions to Informal Negotiations and Arbitration</>
            )}
            {language === 'cs' && (
              <>Výjimky z neformálního vyjednávání a rozhodčího řízení</>
            )}
            {language === 'de' && (
              <>Ausnahmen von informellen Verhandlungen und Schlichtung</>
            )}
          </h4>

          <p>
            {language === 'en' && (
              <>
                The Parties agree that the following Disputes are not subject to
                the above provisions concerning informal negotiations binding
                arbitration: (a) any Disputes seeking to enforce or protect, or
                concerning the validity of, any of the intellectual property
                rights of a Party; (b) any Dispute related to, or arising from,
                allegations of theft, piracy, invasion of privacy, or
                unauthorized use; and (c) any claim for injunctive relief. If
                this provision is found to be illegal or unenforceable, then
                neither Party will elect to arbitrate any Dispute falling within
                that portion of this provision found to be illegal or
                unenforceable and such Dispute shall be decided by a court of
                competent jurisdiction within the courts listed for jurisdiction
                above, and the Parties agree to submit to the personal
                jurisdiction of that court.
              </>
            )}
            {language === 'cs' && (
              <>
                Strany se dohodly, že následující spory nepodléhají výše
                uvedeným ustanovením o závaznosti neformálních jednání
                rozhodčího řízení: a) spory, jejichž předmětem je vymáhání nebo
                ochrana nebo týkající se platnosti jakéhokoli práva duševního
                vlastnictví. (b) jakékoli spory týkající se tvrzení nebo
                vyplývající z tvrzení o porušení práv duševního vlastnictví nebo
                z těchto tvrzení. z krádeže, pirátství, narušení soukromí nebo
                neoprávněného použití; a (c) jakýkoli nárok na soudní příkaz.
                Pokud bude toto ustanovení shledáno nezákonné nebo
                nevymahatelné, pak se žádná ze stran nerozhodne pro rozhodčí
                řízení. spor spadající pod tu část tohoto ustanovení, která byla
                shledána neplatnou. nezákonná nebo nevymahatelná, a takový spor
                bude rozhodnut rozhodcem. příslušný soud v rámci soudů uvedených
                v seznamu pro a strany souhlasí s tím, že se podřídí osobní
                příslušnosti rozhodce. tohoto soudu.
              </>
            )}
            {language === 'de' && (
              <>
                Die Parteien kommen überein, dass die folgenden Streitigkeiten
                nicht unter die obigen Bestimmungen über informelle
                Verhandlungen verbindliche Schiedsgerichtsbarkeit unterliegen:
                (a) alle Streitigkeiten, die die Durchsetzung oder den Schutz
                oder über die Gültigkeit von Rechten des geistigen Eigentums
                einer Vertragspartei; (b) alle Streitigkeiten im Zusammenhang
                mit oder aufgrund von Behauptungen des Diebstahls, der
                Piraterie, der Verletzung der Privatsphäre oder der unbefugten
                Nutzung; und (c) alle Ansprüche auf Unterlassungsansprüche.
                Sollte sich diese Bestimmung als rechtswidrig oder nicht
                durchsetzbar ist, wird sich keine Partei für ein
                Schiedsverfahren Streitigkeiten, die unter den für rechtswidrig
                oder nicht durchsetzbar befundenen Teil dieser Bestimmung fallen
                Rechtswidrigkeit oder Nichtdurchsetzbarkeit fällt, von einem
                Gericht der zuständigen Gerichtsbarkeit innerhalb der oben
                aufgeführten und die Parteien erklären sich damit einverstanden,
                sich der persönlichen Gerichtsbarkeit dieses Gerichts zu
                unterwerfen.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>15. CORRECTIONS</>}
            {language === 'cs' && <>15. OPRAVY</>}
            {language === 'de' && <>15. KORREKTUREN</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Services at any time, without prior notice.
              </>
            )}
            {language === 'cs' && (
              <>
                Ve Službách se mohou vyskytovat informace, které obsahují
                typografické chyby. chyby, nepřesnosti nebo opomenutí, včetně
                popisů, cen, dostupnost a různé další informace. Vyhrazujeme si
                právo opravovat jakékoli chyby, nepřesnosti nebo opomenutí a
                měnit nebo doplňovat informace. aktualizovat informace ve
                Službách, a to kdykoli, bez předchozího upozornění. upozornění.
              </>
            )}
            {language === 'de' && (
              <>
                Die Dienste können Informationen enthalten, die typografische
                Fehler Fehler, Ungenauigkeiten oder Auslassungen enthalten,
                einschließlich Beschreibungen, Preise Verfügbarkeit und
                verschiedene andere Informationen. Wir behalten uns das Recht
                vor Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und
                die Informationen in den Diensten jederzeit und ohne vorherige
                Ankündigung zu Ankündigung.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>16. DISCLAIMER</>}
            {language === 'cs' && <>16. VYHLÁŠKA</>}
            {language === 'de' && <>16. HAFTUNGSAUSSCHLUSS</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR
                THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
                ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE,
                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                CAUTION WHERE
              </>
            )}
            {language === 'cs' && (
              <>
                SLUŽBY JSOU POSKYTOVÁNY PODLE STAVU A DOSTUPNOSTI. VY SOUHLASÍTE
                S TÍM, ŽE SLUŽBY POUŽÍVÁTE NA VLASTNÍ NEBEZPEČÍ. NA V MAXIMÁLNÍM
                ROZSAHU POVOLENÉM ZÁKONEM SE ZŘÍKÁME VEŠKERÝCH ZÁRUK, VÝSLOVNÉ
                NEBO PŘEDPOKLÁDANÉ, V SOUVISLOSTI SE SLUŽBAMI A VAŠÍM
                POUŽÍVÁNÍM. VČETNĚ, ALE BEZ OMEZENÍ, PŘEDPOKLÁDANÝCH ZÁRUK NA
                PRODEJNOSTI, VHODNOSTI PRO URČITÝ ÚČEL A NEPORUŠOVÁNÍ PRÁV.
                NEPOSKYTUJEME ŽÁDNÉ ZÁRUKY ANI PROHLÁŠENÍ TÝKAJÍCÍ SE PŘESNOSTI
                NEBO ÚPLNOSTI OBSAHU SLUŽEB NEBO OBSAHU JAKÝCHKOLI WEBOVÝCH
                STRÁNEK NEBO MOBILNÍCH APLIKACÍ PROPOJENÝCH SE SLUŽBAMI A MY
                NEPŘEBÍRÁME ŽÁDNOU ODPOVĚDNOST ZA JAKÉKOLI (1) CHYBY, OMYLY NEBO
                NEPŘESNOSTI OBSAHU A MATERIÁLŮ, (2) OSOBNÍ CHYBY NEBO
                NEPŘESNOSTI V OBSAHU A MATERIÁLECH. ZRANĚNÍ NEBO ŠKODY NA
                MAJETKU, A TO JAKÉKOLI POVAHY, KTERÉ JSOU DŮSLEDKEM VAŠEHO
                PŘÍSTUPU KE SLUŽBÁM A JEJICH POUŽÍVÁNÍ, (3) JAKÉHOKOLI
                NEOPRÁVNĚNÉHO PŘÍSTUPU KE SLUŽBÁM A JEJICH POUŽÍVÁNÍ. K NAŠIM
                ZABEZPEČENÝM SERVERŮM A/NEBO K JAKÝMKOLI OSOBNÍM ÚDAJŮM, KTERÉ
                SE NACHÁZEJÍ NA NAŠICH ZABEZPEČENÝCH SERVERECH. INFORMACÍ A/NEBO
                FINANČNÍCH INFORMACÍ NA NICH ULOŽENÝCH, (4) JAKÉKOLI PŘERUŠENÍ
                NEBO UKONČENÍ PŘENOSU DO SLUŽEB NEBO ZE SLUŽEB, (5) JAKÝCHKOLI
                CHYB, VIRŮ, TROJSKÝCH KONÍ APOD., KTERÉ BY MOHLY BÝT (6)
                JAKÉKOLI CHYBY NEBO OPOMENUTÍ V JAKÉMKOLI OBSAHU A MATERIÁLECH
                NEBO ZA JAKÉKOLI ZTRÁTY NEBO ŠKODY JAKÉHOKOLI DRUHU VZNIKLÉ V
                DŮSLEDKU POUŽÍVÁNÍ JAKÝCHKOLI OBSAHU ZVEŘEJNĚNÉHO, PŘENÁŠENÉHO
                NEBO JINAK ZPŘÍSTUPNĚNÉHO PROSTŘEDNICTVÍM SLUŽBY. NEZARUČUJEME,
                NESCHVALUJEME, NERUČÍME ANI NEPŘEBÍRÁME ODPOVĚDNOST ZA JAKÝKOLI
                PRODUKT NEBO SLUŽBU INZEROVANOU NEBO NABÍZENOU SPOLEČNOSTÍ TŘETÍ
                STRANY PROSTŘEDNICTVÍM SLUŽEB, JAKÝCHKOLI HYPERTEXTOVÝCH ODKAZŮ
                NA WEBOVÉ STRÁNKY NEBO JAKÝCHKOLI JINÝCH SLUŽEB. WEBOVÉ STRÁNKY
                NEBO MOBILNÍ APLIKACE UVEDENÉ V JAKÉMKOLI BANNERU NEBO JINÉM
                ODKAZU. REKLAMĚ, A NEBUDEME STRANOU ANI ŽÁDNÝM ZPŮSOBEM NEBUDEME
                ZODPOVĚDNÝ ZA SLEDOVÁNÍ JAKÉKOLI TRANSAKCE MEZI VÁMI A JAKÝMKOLI
                POSKYTOVATELI PRODUKTŮ NEBO SLUŽEB TŘETÍCH STRAN. STEJNĚ JAKO
                PŘI NÁKUPU VÝROBKU NEBO SLUŽBY PROSTŘEDNICTVÍM JAKÉHOKOLI MÉDIA
                NEBO V JAKÉMKOLI PROSTŘEDÍ, MĚLI BYSTE SE ŘÍDIT SVÝM NEJLEPŠÍM
                ÚSUDKEM A ZACHOVÁVAT OBEZŘETNOST V PŘÍPADECH. PŘÍPUSTNÉ.
                PŘENÁŠENY DO SLUŽEB NEBO JEJICH PROSTŘEDNICTVÍM JAKOUKOLI TŘETÍ
                STRANOU, A/NEBO
              </>
            )}
            {language === 'de' && (
              <>
                DIE DIENSTE WERDEN AUF EINER AS-IS UND AS-AVAILABLE BASIS
                BEREITGESTELLT. SIE ERKLÄREN SICH DAMIT EINVERSTANDEN, DASS DIE
                NUTZUNG DER DIENSTE AUF IHR EIGENES RISIKO ERFOLGT. AN SOWEIT
                GESETZLICH ZULÄSSIG, LEHNEN WIR ALLE GARANTIEN AB, AUSDRÜCKLICH
                ODER STILLSCHWEIGEND IN VERBINDUNG MIT DEN DIENSTEN UND IHRER
                NUTZUNG EINSCHLIESSLICH, OHNE EINSCHRÄNKUNG, DER
                STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR
                EINEN BESTIMMTEN ZWECK UND NICHT-VERLETZUNG. WIR GEBEN KEINE
                GARANTIEN ODER ZUSICHERUNGEN ÜBER DIE GENAUIGKEIT ODER
                VOLLSTÄNDIGKEIT DES INHALTS DER DIENSTE ODER DES INHALTS VON
                WEBSITES ODER MOBILEN ANWENDUNGEN, DIE MIT DEN DIENSTEN VERLINKT
                SIND, UND WIR ÜBERNEHMEN KEINE HAFTUNG ODER VERANTWORTUNG FÜR
                (1) FEHLER, FEHLER ODER UNGENAUIGKEITEN VON INHALTEN UND
                MATERIALIEN, (2) PERSONEN- ODER PERSONEN- ODER SACHSCHÄDEN
                JEGLICHER ART, DIE SICH AUS IHREM ZUGRIFF AUF DIE SICH AUS IHREM
                ZUGRIFF AUF DIE DIENSTE UND DEREN NUTZUNG ERGEBEN, (3)
                UNBEFUGTEN ZUGRIFF AUF ODER DIE NUTZUNG UNSERER SICHEREN SERVER
                UND/ODER ALLER DARIN GESPEICHERTEN PERSÖNLICHEN DATEN UND/ODER
                DER DARIN GESPEICHERTEN FINANZDATEN, (4) JEGLICHE UNTERBRECHUNG
                ODER BEENDIGUNG DER ÜBERTRAGUNG ZU ODER VON DEN DIENSTEN, (5)
                JEGLICHE BUGS, VIREN, TROJANISCHE PFERDE ODER ÄHNLICHES, DIE DIE
                VON DRITTEN AN ODER DURCH DIE DIENSTE ÜBERTRAGEN WERDEN,
                UND/ODER (6) FÜR JEGLICHE FEHLER ODER AUSLASSUNGEN IN INHALTEN
                UND MATERIALIEN ODER FÜR JEGLICHE VERLUSTE ODER SCHÄDEN
                JEGLICHER ART, DIE DURCH DIE NUTZUNG VON INHALTE, DIE ÜBER DIE
                DIENSTLEISTUNGEN VERÖFFENTLICHT, ÜBERTRAGEN ODER ANDERWEITIG ZUR
                VERFÜGUNG GESTELLT DIENSTE. WIR ÜBERNEHMEN KEINE GEWÄHRLEISTUNG,
                UNTERSTÜTZUNG, GARANTIE ODER VERANTWORTUNG VERANTWORTUNG FÜR
                PRODUKTE ODER DIENSTLEISTUNGEN, DIE VON DRITTEN ÜBER DIE DRITTER
                ÜBER DIE DIENSTE, EINE VERLINKTE WEBSITE ODER EINE WEBSITE ODER
                MOBILE ANWENDUNG, DIE IN EINEM BANNER ODER EINER ANDEREN UND WIR
                SIND WEDER EINE PARTEI NOCH IN IRGENDEINER WEISE FÜR DIE FÜR DIE
                ÜBERWACHUNG VON TRANSAKTIONEN ZWISCHEN IHNEN UND EINEM
                DRITTANBIETERN VON PRODUKTEN ODER DIENSTLEISTUNGEN. WIE BEIM
                KAUF EINES PRODUKTS ODER EINER DIENSTLEISTUNG ÜBER EIN
                BELIEBIGES MEDIUM ODER IN EINER BELIEBIGEN UMGEBUNG, SOLLTEN SIE
                IHR BESTES URTEILSVERMÖGEN EINSETZEN UND VORSICHT WALTEN LASSEN,
                WO ANGEMESSEN. APPROPRIATE.
              </>
            )}
          </p>
        </div>
        17. OMEZENÍ ODPOVĚDNOSTI
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>17. LIMITATIONS OF LIABILITY</>}
            {language === 'cs' && <>17. OMEZENÍ ODPOVĚDNOSTI</>}
            {language === 'de' && <>17. HAFTUNGSBESCHRÄNKUNGEN</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </>
            )}
            {language === 'cs' && (
              <>
                V ŽÁDNÉM PŘÍPADĚ NENESEME MY ANI NAŠI ŘEDITELÉ, ZAMĚSTNANCI NEBO
                ZÁSTUPCI ODPOVĚDNOST ZA VÁM ANI ŽÁDNÉ TŘETÍ STRANĚ ZA JAKÉKOLI
                PŘÍMÉ, NEPŘÍMÉ, NÁSLEDNÉ, PŘÍKLADNÉ, NÁHODNÉ, ZVLÁŠTNÍ NEBO
                SANKČNĚ NAHRAZOVANÉ ŠKODY, VČETNĚ ZTRACENÝCH PENĚZ. UŠLÉHO
                ZISKU, UŠLÉHO PŘÍJMU, ZTRÁTY DAT NEBO JINÝCH ŠKOD VZNIKLÝCH V
                DŮSLEDKU Z VAŠEHO POUŽÍVÁNÍ SLUŽEB, A TO I V PŘÍPADĚ, ŽE JSME
                BYLI NA TYTO ŠKODY UPOZORNĚNI. MOŽNOST VZNIKU TAKOVÝCH ŠKOD.
              </>
            )}
            {language === 'de' && (
              <>
                IN KEINEM FALL SIND WIR ODER UNSERE GESCHÄFTSFÜHRER, MITARBEITER
                ODER VERTRETER HAFTBAR IHNEN ODER DRITTEN GEGENÜBER FÜR DIREKTE,
                INDIREKTE, FOLGESCHÄDEN, SCHÄDEN, EINSCHLIESSLICH ENTGANGENEN
                GEWINNS, ENTGANGENER EINNAHMEN ENTGANGENEN GEWINN, ENTGANGENE
                EINNAHMEN, DATENVERLUSTE ODER ANDERE SCHÄDEN, DIE AUS NUTZUNG
                DER DIENSTE ENTSTEHEN, SELBST WENN WIR AUF DIE MÖGLICHKEIT
                SOLCHER MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDEN.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>18. INDEMNIFICATION</>}
            {language === 'cs' && <>18. ODŠKODNĚNÍ</>}
            {language === 'de' && <>18. ENTSCHÄDIGUNG</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of: (1) use of the Services; (2) breach of these
                Legal Terms; (3) any breach of your representations and
                warranties set forth in these Legal Terms; (4) your violation of
                the rights of a third party, including but not limited to
                intellectual property rights; or (5) any overt harmful act
                toward any other user of the Services with whom you connected
                via the Services. Notwithstanding the foregoing, we reserve the
                right, at your expense, to assume the exclusive defense and
                control of any matter for which you are required to indemnify
                us, and you agree to cooperate, at your expense, with our
                defense of such claims. We will use reasonable efforts to notify
                you of any such claim, action, or proceeding which is subject to
                this indemnification upon becoming aware of it.
              </>
            )}
            {language === 'cs' && (
              <>
                Souhlasíte s tím, že nás budete bránit, odškodňovat a zbavovat
                odpovědnosti, včetně našich dceřiné společnosti, přidružené
                společnosti a všechny naše příslušné vedoucí pracovníky,
                zástupce, partnery a zaměstnance, před jakoukoli ztrátou,
                škodou, odpovědnosti, nároku nebo požadavku, včetně přiměřených
                nákladů na právní zastoupení. a výdajů, které vznese jakákoli
                třetí strana v důsledku nebo v důsledku: (1) používání Služeb;
                (2) porušení těchto právních podmínek; (3) jakéhokoli porušení
                těchto podmínek. vašich prohlášení a záruk uvedených v těchto
                právních podmínkách. (4) vašeho porušení práv třetí strany,
                včetně porušení těchto právních podmínek. mimo jiné práv
                duševního vlastnictví; nebo (5) jakéhokoli zjevného porušení
                práv duševního vlastnictví. škodlivý čin vůči jakémukoli jinému
                uživateli Služeb, s nímž se setkáváte. jste se prostřednictvím
                Služeb spojili. Bez ohledu na výše uvedené vyhrazujeme si právo
                převzít na vaše náklady výhradní obhajobu a kontrolu nad
                jakoukoli záležitostí, za kterou jste povinni poskytnout
                odškodnění. nás, a vy souhlasíte, že budete na své náklady
                spolupracovat s naší obhajobou v případě takových nároků.
                Vynaložíme přiměřené úsilí, abychom vás informovali o jakýchkoli
                takovém nároku, žalobě nebo řízení, na které se vztahuje tato
                smlouva. odškodnění, jakmile se o něm dozvíme. Translated with
                www.DeepL.com/Translator (free version)
              </>
            )}
            {language === 'de' && (
              <>
                Sie stimmen zu, uns zu verteidigen, zu entschädigen und schadlos
                zu halten, einschließlich unserer Tochtergesellschaften,
                verbundenen Unternehmen und alle unsere jeweiligen
                Führungskräfte, Vertreter, Partner und Mitarbeiter, von und
                gegen jegliche Verluste, Schäden Haftung, Anspruch oder
                Forderung, einschließlich angemessener Anwaltskosten und
                Ausgaben, die von Dritten aufgrund von oder in Folge von: (1)
                Nutzung der Dienste; (2) Verstoß gegen diese rechtlichen
                Bestimmungen; (3) Verstoß gegen Ihrer Zusicherungen und
                Gewährleistungen, die in diesen rechtlichen (4) Ihre Verletzung
                der Rechte eines Dritten, einschließlich, aber nicht beschränkt
                auf einschließlich, aber nicht beschränkt auf geistige
                Eigentumsrechte; oder (5) jede offenkundige schädigende Handlung
                gegenüber einem anderen Nutzer der Dienste, mit dem Sie über die
                Dienste verbunden sind. Ungeachtet des Vorangegangenen behalten
                wir uns behalten wir uns das Recht vor, auf Ihre Kosten die
                ausschließliche Verteidigung und die Kontrolle über jede
                Angelegenheit zu übernehmen, für die Sie entschädigt werden
                müssen zu übernehmen, und Sie erklären sich bereit, auf Ihre
                Kosten mit uns bei der Verteidigung solchen Ansprüchen zu
                kooperieren. Wir werden angemessene Anstrengungen unternehmen,
                um Sie über alle Ansprüchen, Klagen oder Verfahren zu
                informieren, die Gegenstand dieser unterliegt, sobald wir davon
                Kenntnis erlangen. Übersetzt mit www.DeepL.com/Translator
                (kostenlose Version)
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>19. USER DATA</>}
            {language === 'cs' && <>19. ÚDAJE O UŽIVATELI</>}
            {language === 'de' && <>19. BENUTZERDATEN</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
              </>
            )}
            {language === 'cs' && (
              <>
                Určité údaje, které předáte Službám, budeme uchovávat pro. za
                účelem správy výkonu Služeb, jakož i za účelem údaje týkající se
                vašeho používání Služeb. Přestože provádíme pravidelné rutinní
                zálohování dat, jste výhradně zodpovědní za všechny údaje. data,
                která přenášíte nebo která se týkají jakékoli činnosti, kterou
                jste provedli. provedené pomocí Služeb. Souhlasíte s tím, že
                nebudeme mít žádné odpovědnost za jakoukoli ztrátu nebo
                poškození takových dat a se tímto vzdáváte jakéhokoli práva na
                žalobu vůči nám vyplývajícího z jakýchkoli ztráty nebo poškození
                takových dat.
              </>
            )}
            {language === 'de' && (
              <>
                Wir werden bestimmte Informationen, die Sie den Diensten zur
                Verfügung stellen, aufbewahren für. zum Zweck der Verwaltung der
                Leistung der Dienste, sowie zum Zweck der Daten im Zusammenhang
                mit Ihrer Nutzung der Dienste. Obwohl wir regelmäßige
                routinemäßige Datensicherungen durchführen, sind Sie allein für
                alle Daten verantwortlich. Daten, die Sie übermitteln oder die
                sich auf eine von Ihnen durchgeführte Aktivität beziehen. die
                Sie mit den Diensten durchführen. Sie stimmen zu, dass wir keine
                keine Verantwortung für den Verlust oder die Beschädigung
                solcher Daten tragen; und Sie verzichten hiermit auf jedes
                Klagerecht gegen uns, das sich aus einem Verlust oder
                Beschädigung solcher Daten.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && (
              <>20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</>
            )}
            {language === 'cs' && (
              <>20. ELEKTRONICKÁ KOMUNIKACE, TRANSAKCE A PODPISY</>
            )}
            {language === 'de' && (
              <>
                20. ELEKTRONISCHE KOMMUNIKATION, TRANSAKTIONEN UND
                UNTERSCHRIFTEN
              </>
            )}
          </h2>

          <p>
            {language === 'en' && (
              <>
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Services,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights
                or requirements under any statutes, regulations, rules,
                ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic
                records, or to payments or the granting of credits by any means
                other than electronic means.
              </>
            )}
            {language === 'cs' && (
              <>
                Návštěva Služeb, zasílání e-mailů a vyplňování online formulářů.
                formuláře představují elektronickou komunikaci. Souhlasíte se
                zasíláním elektronickou komunikaci a souhlasíte s tím, že
                všechny dohody, oznámení, sdělení a další komunikace, které vám
                poskytujeme, jsou elektronické. elektronicky, prostřednictvím
                e-mailu a Služeb, splňují veškeré zákonné požadavky na ochranu
                osobních údajů. požadavek na písemnou formu takové komunikace.
                TÍMTO SOUHLASÍTE S TÍM, ŽE S POUŽÍVÁNÍM ELEKTRONICKÝCH PODPISŮ,
                SMLUV, OBJEDNÁVEK A JINÝCH DOKUMENTŮ, KTERÉ JSOU V ELEKTRONICKÉ
                PODOBĚ. ZÁZNAMŮ A S ELEKTRONICKÝM DORUČOVÁNÍM OZNÁMENÍ, ZÁSAD A
                INFORMACÍ, KTERÉ SE VZTAHUJÍ K VAŠÍ FIRMĚ. ZÁZNAMŮ O
                TRANSAKCÍCH, KTERÉ JSME ZAHÁJILI NEBO DOKONČILI MY NEBO
                PROSTŘEDNICTVÍM SLUŽBY. Tímto se vzdáváte jakýchkoli práv nebo
                požadavků vyplývajících z jakýchkoli zákonů, nařízení, předpisů,
                vyhlášek nebo jiných právních předpisů v jakémkoli státě.
                jurisdikci, které vyžadují originální podpis nebo doručení nebo
                uchovávání neelektronických záznamů, nebo na platby nebo
                poskytování služeb, které nejsou elektronické. úvěrů jinými než
                elektronickými prostředky.
              </>
            )}
            {language === 'de' && (
              <>
                Der Besuch der Dienste, das Senden von E-Mails an uns und das
                Ausfüllen von Online Formulare stellen elektronische
                Kommunikation dar. Sie stimmen zu, dass Sie Sie erklären sich
                mit dem Erhalt elektronischer Mitteilungen einverstanden und
                stimmen zu, dass alle Vereinbarungen, Bekanntmachungen,
                Offenlegungen und andere Mitteilungen, die wir Ihnen
                elektronisch, per E-Mail und über die Dienste, alle gesetzlichen
                Erfordernis der Schriftform für solche Mitteilungen erfüllen.
                SIE STIMMEN HIERMIT ZU DER VERWENDUNG VON ELEKTRONISCHEN
                UNTERSCHRIFTEN, VERTRÄGEN, BESTELLUNGEN UND ANDEREN
                AUFZEICHNUNGEN SOWIE DER ELEKTRONISCHEN ZUSTELLUNG VON
                MITTEILUNGEN, RICHTLINIEN UND AUFZEICHNUNGEN VON TRANSAKTIONEN,
                DIE VON UNS ODER ÜBER DIE DIENSTE INITIIERT ODER ABGESCHLOSSEN
                DIENSTE. Sie verzichten hiermit auf alle Rechte oder
                Anforderungen gemäß jeglicher Gesetzen, Vorschriften, Regeln,
                Verordnungen oder anderen Gesetzen in einer Rechtsprechung, die
                eine Originalunterschrift oder -übergabe oder oder die
                Aufbewahrung von nicht-elektronischen Aufzeichnungen oder auf
                Zahlungen oder die Gewährung von Krediten durch andere als
                elektronische Mittel.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>21. CALIFORNIA USERS AND RESIDENTS</>}
            {language === 'cs' && <>21. UŽIVATELÉ A OBYVATELÉ KALIFORNIE</>}
            {language === 'de' && (
              <>21. BENUTZER UND EINWOHNER VON KALIFORNIEN</>
            )}
          </h2>

          <p>
            {language === 'en' && (
              <>
                If any complaint with us is not satisfactorily resolved, you can
                contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 North Market Blvd., Suite N 112,
                Sacramento, California 95834 or by telephone at (800) 952-5210
                or (916) 445-1254.
              </>
            )}
            {language === 'cs' && (
              <>
                Pokud se vám nepodaří uspokojivě vyřešit jakoukoli stížnost,
                můžete. obrátit se na oddělení pro pomoc při řešení stížností
                Odboru pro ochranu spotřebitele. služeb kalifornského oddělení
                pro spotřebitelské záležitosti písemně na adrese 1625 North
                Market Blvd., Suite N 112, Sacramento, Kalifornie. 95834 nebo
                telefonicky na čísle (800) 952-5210 nebo (916) 445-1254.
              </>
            )}
            {language === 'de' && (
              <>
                Wenn eine Beschwerde bei uns nicht zufriedenstellend gelöst
                wird, können Sie sich an die Complaint Assistance Unit der
                Division of Consumer Services des Services of the California
                Department of Consumer Affairs schriftlich wenden unter der
                Adresse 1625 North Market Blvd, Suite N 112, Sacramento,
                Kalifornien 95834 oder telefonisch unter (800) 952-5210 oder
                (916) 445-1254.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>22. MISCELLANEOUS</>}
            {language === 'cs' && <>22. RŮZNÉ</>}
            {language === 'de' && <>22. VERSCHIEDENES</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                These Legal Terms and any policies or operating rules posted by
                us on the Services or in respect to the Services constitute the
                entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Legal Terms shall not operate as a waiver of such right or
                provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Legal Terms is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Legal Terms and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Legal Terms or use of the Services. You agree that these
                Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defenses you may have
                based on the electronic form of these Legal Terms and the lack
                of signing by the parties hereto to execute these Legal Terms.
              </>
            )}
            {language === 'cs' && (
              <>
                Tyto právní podmínky a veškeré zásady nebo provozní pravidla,
                které jsme zveřejnili. ve Službách nebo v souvislosti se
                Službami představují úplnou dohodu a ujednání mezi vámi a námi.
                Pokud se nám nepodaří uplatnit nebo vymáhat jakékoli právo nebo
                ustanovení těchto právních podmínek neznamená vzdání se takového
                práva nebo ustanovení. Tyto Právní podmínky platí v maximálním
                rozsahu povoleném zákonem. Můžeme kdykoli postoupit některá nebo
                všechna naše práva a povinnosti jiným osobám. kdykoli. Neneseme
                žádnou odpovědnost za jakékoli ztráty, škody, zpoždění nebo
                nečinnost způsobenou jakoukoli příčinou, která je mimo naše
                přiměřené kontroly. Pokud se některé ustanovení nebo část
                ustanovení těchto právních podmínek shledáno nezákonným,
                neplatným nebo nevymahatelným, je toto ustanovení neplatné.
                ustanovení nebo jeho část se považuje za oddělitelné od těchto
                podmínek. právních podmínek a nemá vliv na platnost a
                vymahatelnost těchto podmínek. ostatních ustanovení. Neexistuje
                žádný společný podnik, partnerství, mezi vámi a námi nevzniká
                žádný vztah, ani vztah zaměstnanecký, ani vztah
                zprostředkovatelský. v důsledku těchto právních podmínek nebo
                používání služeb. Souhlasíte s tím, že tyto právní podmínky
                nebudou vykládány v náš neprospěch na základě že jsme je
                vypracovali. Tímto se vzdáváte všech obranných prostředků, které
                byste mohli mít. na základě elektronické podoby těchto právních
                podmínek a nedostatku informací o nich. podepsání těchto
                právních podmínek smluvními stranami.
              </>
            )}
            {language === 'de' && (
              <>
                Diese rechtlichen Bestimmungen und alle von uns auf den Diensten
                oder in Bezug auf die Dienste veröffentlichten oder im
                Zusammenhang mit den Diensten veröffentlicht werden, stellen die
                gesamte Vereinbarung und das Verständnis zwischen Ihnen und uns.
                Unser Versäumnis Ausübung oder Durchsetzung eines Rechts oder
                einer Bestimmung dieser Rechtlichen Bedingungen gilt nicht als
                Verzicht auf ein solches Recht oder eine solche Bestimmung.
                Diese Rechtlichen Bedingungen gelten im vollen gesetzlich
                zulässigen Umfang. Wir können Rechte und Pflichten jederzeit
                ganz oder teilweise an Dritte abtreten. jederzeit. Wir sind
                nicht verantwortlich oder haftbar für jegliche Verluste,
                Schäden, Verzögerungen oder Untätigkeit, die durch eine Ursache
                außerhalb unserer Kontrolle liegt. Wenn eine Bestimmung oder ein
                Teil einer Bestimmung dieser rechtlichen Bestimmung oder ein
                Teil einer Bestimmung dieser rechtlichen Bestimmungen als
                ungesetzlich, nichtig oder nicht durchsetzbar Bestimmung oder
                ein Teil der Bestimmung als trennbar von diesen abtrennbar und
                berührt nicht die Gültigkeit und Durchsetzbarkeit der
                verbleibenden Bestimmungen. Es besteht kein Joint Venture, keine
                Partnerschaft, Arbeits- oder Vertretungsverhältnis zwischen
                Ihnen und uns, das oder der Nutzung der Dienste entsteht. Sie
                stimmen zu, dass diese rechtlichen Bestimmungen nicht gegen uns
                ausgelegt werden, weil wir sie dass wir sie verfasst haben. Sie
                verzichten hiermit auf alle Einreden, die Sie möglicherweise
                Einreden, die Sie aufgrund der elektronischen Form dieser
                Rechtlichen Bedingungen und der fehlenden Unterschrift der
                Vertragsparteien zur Unterzeichnung dieser rechtlichen
                Bestimmungen.
              </>
            )}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
            {language === 'en' && <>23. CONTACT US</>}
            {language === 'cs' && <>23. KONTAKTUJTE NÁS</>}
            {language === 'de' && <>23. KONTAKT</>}
          </h2>

          <p>
            {language === 'en' && (
              <>
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us at:
              </>
            )}
            {language === 'cs' && (
              <>
                Chcete-li vyřešit stížnost týkající se Služeb nebo získat další
                informace týkající se používání Služeb, kontaktujte nás prosím
                na adrese:
              </>
            )}
            {language === 'de' && (
              <>
                Um eine Beschwerde in Bezug auf die Dienste zu klären oder um
                weitere weitere Informationen zur Nutzung der Dienste zu
                erhalten, kontaktieren Sie uns bitte unter:
              </>
            )}
          </p>

          <ul className='list-disc ml-6'>
            <li>Dominik Grössl</li>
            <li>Němčice 26</li>
            <li>Němčice 34506</li>
            <li>Czechia</li>
            <li>+420 739 830 034</li>
            <li>info@planetopedia.agency</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
