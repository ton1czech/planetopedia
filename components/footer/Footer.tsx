'use client'

import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import Container from '../Container'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Caramel, Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const caramel = Caramel({ subsets: ['latin'], weight: '400' })

const Footer = () => {
  const pathname = usePathname()
  const { language } = useLanguage()

  const services =
    pathname.includes('/for-companies') || pathname.includes('/for-hospitality')

  return (
    <motion.footer
      initial={{ y: services ? 0 : 50, opacity: services ? 1 : 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className={cn(
        'text-zinc-400',
        services && 'sticky z-[120] snap-start scroll-mt-20 h-screen bg-black'
      )}
    >
      <Container className='hidden py-20 lg:block'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div>
            <Link
              href='/'
              className={cn(
                'text-xl md:text-2xl font-black text-white',
                montserrat.className
              )}
            >
              PLANETOPEDIA
            </Link>
            <p
              className={cn(
                'text-3xl text-gold drop-shadow-sm whitespace-nowrap',
                caramel.className
              )}
            >
              {language === 'en' && <>More than an agency</>}
              {language === 'cs' && <>Více než jen agentura</>}
              {language === 'de' && <>Mehr als eine Agentur</>}
            </p>
          </div>

          <div className='text-sm'>
            <h4 className='text-zinc-200 text-lg font-bold mb-2'>CONNECT</h4>
            <p>Dominik Grössl</p>
            <p>+420 739 830 034</p>
            <p>dominik@planetopedia.agency</p>
            <div className='flex gap-4 mt-1 underline'>
              <Link href='https://www.instagram.com/planetopedia/'>
                Instagram
              </Link>
              <Link href='https://www.linkedin.com/company/planetopedia/'>
                Linkedin
              </Link>
              <Link href='https://www.youtube.com/@myplanetopedia/videos'>
                YouTube
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full h-px bg-zinc-400/40 my-10' />

        <div className='text-sm flex flex-col md:flex-row justify-between'>
          <div>
            <p>
              {language === 'en' && (
                <>Dominik Grössl, Němčice 26, 34506 Němčice, Czech Republic</>
              )}
              {language === 'cs' && (
                <>Dominik Grössl, Němčice 26, 34506 Němčice, Česká Republika</>
              )}
              {language === 'de' && (
                <>
                  Dominik Grössl, Němčice 26, 34506 Němčice, Tsechische Republik
                </>
              )}
            </p>
            <p>
              {language === 'en' && <>ID No.: 14184397</>}
              {language === 'cs' && <>IČO: 14184397</>}
              {language === 'de' && <>ID No.: 14184397</>}
            </p>
          </div>

          <div>
            <p>
              &copy;{new Date().getFullYear()} Planetopedia,{' '}
              {language === 'en' && (
                <>founder Dominik Grössl. All rights reserved.</>
              )}
              {language === 'cs' && (
                <>zakladatel Dominik Grössl. Všechna práva vyhrazena.</>
              )}
              {language === 'de' && (
                <>Gründer Dominik Grössl. Alle Rechte vorbehalten.</>
              )}
            </p>

            <p className='mt-1 mb-5'>
              {language === 'en' && <>website created by </>}
              {language === 'cs' && <>webové stránky vytvořil </>}
              {language === 'de' && <>Website erstellt von </>}
              <Link
                href='https://github.com/ton1czech'
                target='_blank'
                className='underline'
              >
                Daniel Anthony Baudyš
              </Link>
              {language === 'en' && <> / earth model by </>}
              {language === 'cs' && <> / model planety od </>}
              {language === 'de' && <> / Erdmodell von </>}
              <Link
                href='https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4'
                target='_blank'
                className='underline'
              >
                @Abdullrahman
              </Link>
            </p>

            <Link
              href='/personal-data-protection'
              className='hover:underline text-sm'
            >
              {language === 'en' && 'Personal data protection'}
              {language === 'cs' && 'Ochrana osobních údajů'}
              {language === 'de' && 'Schutz personenbezogener Daten'}
            </Link>
          </div>
        </div>
      </Container>
    </motion.footer>
  )
}

export default Footer
