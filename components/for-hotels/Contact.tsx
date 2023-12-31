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
    hotel: z.string().min(1, {
      message:
        language === 'en'
          ? 'Hotel name is required.'
          : language === 'cs'
          ? 'Jméno hotelu je povinné.'
          : language === 'de'
          ? 'Der Hotelname ist erforderlich.'
          : '',
    }),

    checkbox_content: z.boolean(),
    checkbox_spot: z.boolean(),
    checkbox_press: z.boolean(),
    checkbox_blog: z.boolean(),
    checkbox_web: z.boolean(),
    checkbox_management: z.boolean(),
    message: z.string().optional(),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      hotel: '',
      checkbox_content: false,
      checkbox_spot: false,
      checkbox_press: false,
      checkbox_blog: false,
      checkbox_web: false,
      checkbox_management: false,
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
    <div className='sticky z-40 bg-black snap-start scroll-mt-20 w-screen h-[calc(100vh-80px)]'>
      <Container className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80 w-full sm:w-[60%] lg:w-[35%]'>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='mb-5 text-2xl font-bold text-center text-white md:text-3xl 2xl:text-4xl'
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
                      <Label className='text-zinc-300'>
                        {language === 'en' ? (
                          <>Full Name *</>
                        ) : language === 'cs' ? (
                          <>Celé jméno *</>
                        ) : language === 'de' ? (
                          <>Vollständiger Name *</>
                        ) : null}
                      </Label>
                      <Input
                        className='text-white bg-black placeholder:text-zinc-400'
                        placeholder='john doe'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='hotel'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label className='text-zinc-300'>
                        {language === 'en' ? (
                          <>Hotel Name *</>
                        ) : language === 'cs' ? (
                          <>Název Hotelu *</>
                        ) : language === 'de' ? (
                          <>Hotelname *</>
                        ) : null}
                      </Label>
                      <Input
                        className='text-white bg-black placeholder:text-zinc-400'
                        placeholder='Four seasons'
                        {...field}
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
                      <Label className='text-zinc-300'>E-Mail *</Label>
                      <Input
                        className='text-white bg-black placeholder:text-zinc-400'
                        placeholder='fourseasons@gmail.com'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid gap-3 my-3 text-white'>
              <FormField
                name='checkbox_content'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                          className='border-white'
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Content Creation for social media</>
                          ) : language === 'cs' ? (
                            <>Tvorba obsahu pro sociální sítě</>
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
                name='checkbox_spot'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                          className='border-white'
                        />
                        <Label>
                          {language === 'en' ? (
                            <>
                              Professional short 4K spot for your Hotel or
                              Resort
                            </>
                          ) : language === 'cs' ? (
                            <>
                              Profesionální krátký spot ve 4K pro váš hotel nebo
                              resort
                            </>
                          ) : language === 'de' ? (
                            <>
                              Professioneller kurzer 4K-Spot für Ihr Hotel oder
                              Resort
                            </>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_press'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                          className='border-white'
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Press + Media Trips</>
                          ) : language === 'cs' ? (
                            <>Výlety pro Novináře a Média</>
                          ) : language === 'de' ? (
                            <>Presse und Medienreisen</>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_blog'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          {...field}
                          className='border-white'
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Blog Post / Instagram feature</>
                          ) : language === 'cs' ? (
                            <>
                              Příspěvek na blogu / Sdílení na našem Instagramu
                            </>
                          ) : language === 'de' ? (
                            <>Blogbeitrag / Instagram-Funktion</>
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
                          className='border-white'
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
                          className='border-white'
                        />
                        <Label>
                          {language === 'en' ? (
                            <>Social Media Management</>
                          ) : language === 'cs' ? (
                            <>Řízení sociálních médií</>
                          ) : language === 'de' ? (
                            <>Verwaltung der sozialen Medien</>
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
                      <Label className='text-zinc-300'>
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
                        className='text-white bg-black resize-none placeholder:text-zinc-400'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className='block mt-4 text-sm text-zinc-400'>
              {language === 'en' && (
                <>
                  By clicking on Submit I agree to the processing of personal
                  data. Read the{' '}
                  <Link href='/personal-data-protection' className='underline'>
                    GDPR
                  </Link>{' '}
                  for more information.
                </>
              )}
              {language === 'cs' && (
                <>
                  Kliknutím na Odeslat souhlasím se zpracováním osobních údajů.
                  Přečtěte si{' '}
                  <Link href='/personal-data-protection' className='underline'>
                    GDPR
                  </Link>{' '}
                  pro více informací.
                </>
              )}
              {language === 'de' && (
                <>
                  Durch Anklicken von Einreichen stimme ich der Verarbeitung
                  personenbezogener Daten Daten. Lesen Sie die{' '}
                  <Link href='/personal-data-protection' className='underline'>
                    GDPR
                  </Link>{' '}
                  für weitere Informationen.
                </>
              )}
            </p>

            <Button
              type='submit'
              className='mt-1 text-white bg-black border border-white hover:bg-white hover:text-black'
            >
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
