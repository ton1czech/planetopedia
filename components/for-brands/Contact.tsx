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
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Contact = () => {
  const { language } = useLanguage(state => state)

  const schema = z.object({
    name: z.string().min(1, {
      message:
        language === 'en'
          ? 'Name is required.'
          : language === 'cs'
          ? 'Jméno je povinné.'
          : language === 'de'
          ? 'Name ist erforderlich.'
          : '',
    }),
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
    brand: z.string().min(1, {
      message:
        language === 'en'
          ? 'Brand name is required.'
          : language === 'cs'
          ? 'Jméno značky je povinné.'
          : language === 'de'
          ? 'Name ist erforderlich.'
          : '',
    }),
    checkbox_management: z.boolean(),
    checkbox_creation: z.boolean(),
    checkbox_influencer: z.boolean(),
    checkbox_spot: z.boolean(),
    checkbox_web: z.boolean(),
    message: z.string().optional(),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      brand: '',
      email: '',
      checkbox_management: false,
      checkbox_creation: false,
      checkbox_influencer: false,
      checkbox_spot: false,
      checkbox_web: false,
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(data)

    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_BRANDS_HOTELS!,
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
    <div className='sticky z-[80] bg-white snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)]'>
      <Container className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80 w-full sm:w-[60%] lg:w-[35%]'>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='mb-5 text-2xl font-bold text-center md:text-3xl 2xl:text-4xl'
        >
          {language === 'en' ? (
            <>Let's create together</>
          ) : language === 'cs' ? (
            <>Pojďme tvořit spolu</>
          ) : language === 'de' ? (
            <>Lassen Sie uns gemeinsam etwas schaffen</>
          ) : null}
        </motion.h2>
        <Form {...form}>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>
                        {language === 'en' ? (
                          <>Full Name *</>
                        ) : language === 'cs' ? (
                          <>Celé jméno *</>
                        ) : language === 'de' ? (
                          <>Vollständiger Name *</>
                        ) : null}
                      </Label>
                      <Input
                        placeholder='john doe'
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
              name='brand'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>
                        {language === 'en' ? (
                          <>Brand / Company Name *</>
                        ) : language === 'cs' ? (
                          <>Název Společnosti / Značky *</>
                        ) : language === 'de' ? (
                          <>Markename / Firmenname *</>
                        ) : null}
                      </Label>
                      <Input
                        placeholder='Four seasons'
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
                        placeholder='fourseasons@gmail.com'
                        {...field}
                        className='border-black'
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid gap-3 mt-3'>
              <FormField
                name='checkbox_management'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Social Media Management</>
                          ) : language === 'cs' ? (
                            <>Správa Sociálních Médií</>
                          ) : language === 'de' ? (
                            <>Social Media Management</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_creation'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Content Creation for Social Media</>
                          ) : language === 'cs' ? (
                            <>Tvorba Obsahu pro Sociální Sítě</>
                          ) : language === 'de' ? (
                            <>Erstellung von Inhalten für soziale Medien</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_influencer'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Instagram feature</>
                          ) : language === 'cs' ? (
                            <>Sdílení na našem Instagramu</>
                          ) : language === 'de' ? (
                            <>Instagram-Funktion</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_spot'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Professional Short 4K Spot</>
                          ) : language === 'cs' ? (
                            <>Profesionální Krátký Spot 4K</>
                          ) : language === 'de' ? (
                            <>Professioneller kurzer 4K-Spot</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_web'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Web Development</>
                          ) : language === 'cs' ? (
                            <>Tvorba Webu</>
                          ) : language === 'de' ? (
                            <>Web-Entwicklung</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>
                        {language === 'en' ? (
                          <>Message</>
                        ) : language === 'cs' ? (
                          <>Zpráva</>
                        ) : language === 'de' ? (
                          <>Nachricht</>
                        ) : null}
                      </Label>
                      <Textarea
                        placeholder={
                          language === 'en'
                            ? 'Write a message...'
                            : language === 'cs'
                            ? 'Napište zprávu...'
                            : language === 'de'
                            ? 'Schreiben Sie eine Nachricht...'
                            : ''
                        }
                        rows={4}
                        className='border-black resize-none'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className='block mt-4 text-sm text-zinc-600'>
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
                  Kliknutím na Odeslat souhlasím se zpracováním osobních údajů.
                  Přečtěte si{' '}
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
                    href='/personal-data-protection'
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
          </motion.form>
        </Form>
      </Container>
    </div>
  )
}

export default Contact
