'use client'

import Container from '@/components/Container'
import { useLanguage } from '@/store/useLanguage'

export default function Page() {
  const { language } = useLanguage(state => state)

  return (
    <div className='bg-white'>
      <Container className='pt-24 pb-20 md:pt-32 md:pb-32'>
        <h2 className='text-2xl md:text-3xl font-semibold lg:text-4xl'>
          {language === 'en' && (
            <>Data Protection and Consent for Data Processing</>
          )}
          {language === 'cs' && (
            <>Ochrana osobních údajů a souhlas se zpracováním dat</>
          )}
          {language === 'de' && (
            <>Datenschutz und Einwilligung zur Datenverarbeitung</>
          )}
        </h2>

        <p className='mb-4'>
          {language === 'en' && (
            <>
              Your privacy is important to us. When using this form, we collect
              certain personal data that are necessary to provide the requested
              information or services. Your data is protected according to our
              privacy policies and GDPR regulations.
            </>
          )}
          {language === 'cs' && (
            <>
              Vaše soukromí je pro nás důležité. Při používání tohoto formuláře
              shromažďujeme určité osobní údaje, které jsou nezbytné k
              poskytnutí požadovaných informací nebo služeb. Vaše údaje jsou
              chráněny podle našich zásad ochrany osobních údajů a nařízení
              GDPR.
            </>
          )}
          {language === 'de' && (
            <>
              Ihre Privatsphäre ist uns wichtig. Beim Verwenden dieses Formulars
              erfassen wir bestimmte personenbezogene Daten, die notwendig sind,
              um die angeforderten Informationen oder Dienstleistungen
              bereitzustellen. Ihre Daten werden gemäß unseren
              Datenschutzrichtlinien und den GDPR-Vorschriften geschützt.
            </>
          )}
        </p>

        <p className='mb-4'>
          {language === 'en' && (
            <>
              The information you provide will only be used for the purposes for
              which you provided it. We will not disclose it to third parties
              without your explicit consent, unless required by law.
            </>
          )}
          {language === 'cs' && (
            <>
              Vaše poskytnuté informace budou využity pouze k účelům, pro které
              jste je poskytli. Neposkytneme je třetím stranám bez vašeho
              výslovného souhlasu, pokud to není vyžadováno zákonem.
            </>
          )}
          {language === 'de' && (
            <>
              Die von Ihnen bereitgestellten Informationen werden nur für die
              Zwecke verwendet, für die Sie sie bereitgestellt haben. Wir werden
              sie ohne Ihre ausdrückliche Zustimmung nicht an Dritte
              weitergeben, es sei denn, dies ist gesetzlich vorgeschrieben.
            </>
          )}
        </p>

        <p className='mb-4'>
          {language === 'en' && (
            <>
              By providing this information, you consent to the collection,
              storage, and processing of your personal data in accordance with
              our privacy policies and GDPR.
            </>
          )}
          {language === 'cs' && (
            <>
              Poskytnutím těchto údajů souhlasíte se shromažďováním, uchováním a
              zpracováním vašich osobních údajů v souladu s našimi zásadami
              ochrany osobních údajů a GDPR.
            </>
          )}
          {language === 'de' && (
            <>
              Durch die Bereitstellung dieser Informationen stimmen Sie der
              Erhebung, Speicherung und Verarbeitung Ihrer personenbezogenen
              Daten gemäß unseren Datenschutzrichtlinien und der DSGVO zu.
            </>
          )}
        </p>

        <p className='mb-4'>
          {language === 'en' && (
            <>
              If you have any questions about how we process your data or if you
              wish to request the removal or modification of your data, please
              contact us using the provided email support@planetopedia.agency.
            </>
          )}
          {language === 'cs' && (
            <>
              Máte-li jakékoli dotazy ohledně způsobu, jakým zpracováváme vaše
              údaje, nebo chcete-li požádat o odstranění či úpravu vašich údajů,
              kontaktujte nás prostřednictvím emailu
              support@planetopedia.agency.
            </>
          )}
          {language === 'de' && (
            <>
              Wenn Sie Fragen dazu haben, wie wir Ihre Daten verarbeiten, oder
              wenn Sie die Löschung oder Änderung Ihrer Daten wünschen,
              kontaktieren Sie uns bitte unter den angegebenen Email
              support@planetopedia.agency.
            </>
          )}
        </p>

        <p>
          {language === 'en' && <>Thank you for trusting us.</>}
          {language === 'cs' && (
            <>Děkujeme za důvěru, kterou nám projevujete.</>
          )}
          {language === 'de' && <>Vielen Dank für Ihr Vertrauen.</>}
        </p>
      </Container>
    </div>
  )
}
