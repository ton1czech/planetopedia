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
    checkbox_creation: z.boolean(),
    checkbox_influencer: z.boolean(),
    checkbox_managment: z.boolean(),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      brand: '',
      email: '',
      checkbox_creation: false,
      checkbox_influencer: false,
      checkbox_managment: false,
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
    <div className='sticky z-20 bg-white snap-start scroll-mt-20 w-screen h-[90vh]'>
      <Container className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80 w-full sm:w-[60%] lg:w-[35%]'>
        <h2 className='mb-5 text-2xl md:text-3xl 2xl:text-4xl font-bold text-center'>
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

            <div className='grid gap-3 my-3'>
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
                            <>Social Media Influencer Marketing Campaigns</>
                          ) : language === 'cs' ? (
                            <>Marketingové kampaně na sociální sítích</>
                          ) : language === 'de' ? (
                            <>
                              Influencer-Marketing-Kampagnen für soziale Medien
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
                name='checkbox_managment'
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
                            <>Social Media Managment / Takeovers</>
                          ) : language === 'cs' ? (
                            <>Správa Sociálních Médií / Převzetí</>
                          ) : language === 'de' ? (
                            <>Social Media Management / Übernahmen</>
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
                        rows={6}
                        className='border-black resize-none'
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' className='mt-4'>
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
