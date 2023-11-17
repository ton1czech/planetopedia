'use client'

import { useLanguage } from '@/store/useLanguage'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Container from '../Container'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Contact = () => {
  const { language } = useLanguage(state => state)

  const schema = z.object({
    instagram: z.string().min(1),
    email: z.string().email({
      message:
        language === 'en'
          ? 'Not a valid email'
          : language === 'cs'
          ? 'E-mail nesplňuje požadavky'
          : language === 'de'
          ? 'Keine gültige E-Mail'
          : '',
    }),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      instagram: '',
      email: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(data)

    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_CREATORS!,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_API!
      )

      console.log(emailResponse)

      toast.success(
        language === 'en'
          ? 'Sent Successfully.'
          : language === 'cs'
          ? 'Úspěšně odesláno.'
          : language === 'de'
          ? 'Erfolgreich gesendet.'
          : ''
      )
    } catch (error) {
      console.log('Error sending email:', error)

      toast.error(
        language === 'en'
          ? 'Something went wrong, please try again later.'
          : language === 'cs'
          ? 'Něco se pokazilo, zkuste to prosím později.'
          : language === 'de'
          ? 'Es ist ein Fehler aufgetreten, bitte versuchen Sie es später noch einmal.'
          : ''
      )
    } finally {
      form.reset()
    }
  }

  return (
    <div className='sticky bg-white snap-start scroll-mt-20 w-screen z-40 h-[calc(100vh-80px)]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-28 w-full sm:w-[60%] lg:w-[45%]'>
          <h2 className='mb-5 text-2xl md:text-3xl 2xl:text-4xl font-bold text-center'>
            {language === 'en' ? (
              <>A new era begins with Planetopedia.</>
            ) : language === 'cs' ? (
              <>Nová éra začíná s Planetopedia</>
            ) : language === 'de' ? (
              <>Eine neue Ära beginnt mit Planetopedia.</>
            ) : null}
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name='instagram'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <>
                        <Label>
                          {language === 'en' ? (
                            <>Instagram Account *</>
                          ) : language === 'cs' ? (
                            <>Instagram Účet*</>
                          ) : language === 'de' ? (
                            <>Instagram-Account *</>
                          ) : null}
                        </Label>
                        <Input
                          placeholder='@username'
                          {...field}
                          className='border-black'
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <>
                        <Label>E-Mail *</Label>
                        <Input
                          placeholder='email@email.com'
                          {...field}
                          className='border-black'
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className='text-zinc-600 text-sm block mt-4'>
                {language === 'en' && (
                  <>
                    By clicking on Submit I agree to the processing of personal
                    data. Read the{' '}
                    <Link
                      href='/personal-data-protection'
                      target='_blank'
                      className='underline'
                    >
                      GDPR
                    </Link>{' '}
                    for more information.
                  </>
                )}
                {language === 'cs' && (
                  <>
                    Kliknutím na Odeslat souhlasím se zpracováním osobních
                    údajů. Přečtěte si{' '}
                    <Link
                      href='/personal-data-protection'
                      target='_blank'
                      className='underline'
                    >
                      GDPR
                    </Link>{' '}
                    pro více informací.
                  </>
                )}
                {language === 'de' && (
                  <>
                    Durch Anklicken von Einreichen stimme ich der Verarbeitung
                    personenbezogener Daten Daten. Lesen Sie die{' '}
                    <Link
                      href='/perosnal-data-protection'
                      className='underline'
                      target='_blank'
                    >
                      GDPR
                    </Link>{' '}
                    für weitere Informationen.
                  </>
                )}
              </p>

              <Button type='submit' className='mt-1'>
                {language === 'en' ? (
                  <>Submit</>
                ) : language === 'cs' ? (
                  <>Odeslat</>
                ) : language === 'de' ? (
                  <>Einreichen</>
                ) : null}
              </Button>
            </form>
          </Form>
        </Container>
      </motion.div>
    </div>
  )
}

export default Contact
