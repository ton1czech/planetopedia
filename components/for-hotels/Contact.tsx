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
          ? "Username must start with '@'"
          : language === 'cs'
          ? 'Uživatelské jméno musí začínat "@"'
          : language === 'de'
          ? "Der Benutzername muss mit '@' beginnen"
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
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(data)

    try {
      //   const emailResponse = await emailjs.send(
      //     process.env.NEXT_PUBLIC_SERVICE_ID!,
      //     process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      //     data,
      //     process.env.NEXT_PUBLIC_PUBLIC_API!
      //   )

      //   console.log(emailResponse)

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
    <div className='sticky z-40 bg-black snap-start scroll-mt-20 w-screen h-[90vh]'>
      <Container className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80 w-full lg:w-[35%]'>
        <h2 className='mb-5 text-2xl md:text-3xl 2xl:text-4xl font-bold text-center text-white'>
          {language === 'en' ? (
            <>Let's create together</>
          ) : language === 'cs' ? (
            <>Pojďme tvořit spolu</>
          ) : language === 'de' ? (
            <>Lassen Sie uns gemeinsam etwas schaffen</>
          ) : null}
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        className='bg-black placeholder:text-zinc-400'
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
                        className='bg-black placeholder:text-zinc-400'
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
                        className='bg-black placeholder:text-zinc-400'
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
                            <>Příspěvek na blogu / Funkce Instagramu</>
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
                name='checkbox_media'
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
                            <>Social Media Development</>
                          ) : language === 'cs' ? (
                            <>Vývoj sociálních médií</>
                          ) : language === 'de' ? (
                            <>Entwicklung sozialer Medien</>
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
                        className='bg-black placeholder:text-zinc-400 resize-none'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              className='mt-4 text-white bg-black hover:bg-white hover:text-black border border-white'
            >
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
    </div>
  )
}

export default Contact
