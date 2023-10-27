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

const Contact = () => {
  const { language } = useLanguage(state => state)

  const schema = z.object({
    instagram: z
      .string()
      .min(1)
      .startsWith('@', {
        message:
          language === 'en'
            ? "Username must start with '@'"
            : language === 'cs'
            ? 'Uživatelské jméno musí začínat "@"'
            : language === 'de'
            ? ''
            : '',
      }),
    email: z.string().email({
      message:
        language === 'en'
          ? 'Not a valid email'
          : language === 'cs'
          ? 'E-mail nesplňuje požadavky'
          : language === 'de'
          ? ''
          : '',
    }),
    checkbox_creator: z.boolean(),
    checkbox_whatsapp: z.boolean(),
    checkbox_platform: z.boolean(),
    checkbox_engagement: z.boolean(),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      instagram: '',
      email: '',
      checkbox_creator: false,
      checkbox_whatsapp: false,
      checkbox_platform: false,
      checkbox_engagement: false,
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
          ? ''
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
          ? ''
          : ''
      )
    } finally {
      form.reset()
    }
  }

  return (
    <div className='sticky top-0 z-30 bg-zinc-200 pt-32 snap-start scroll-mt-20 w-screen'>
      <Container>
        <h2 className='mb-5 text-2xl md:text-3xl lg:text-4xl'>
          {language === 'en' ? (
            <>
              Be <span className='font-bold'> part of our community </span>and
              get your creation among the target group!
            </>
          ) : language === 'cs' ? (
            <>
              Staň se<span className='font-bold'> členem komunity </span> a
              dostaň svojí tvorbu mezi cílovou skupinu!
            </>
          ) : language === 'de' ? (
            <></>
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
                          <></>
                        ) : language === 'de' ? (
                          <></>
                        ) : null}
                      </Label>
                      <Input placeholder='@username' {...field} />
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
                      <Input placeholder='email@email.com' {...field} />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid gap-3 my-3'>
              <FormField
                name='checkbox_creator'
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
                            <>To become the creator of Planetopedia</>
                          ) : language === 'cs' ? (
                            <></>
                          ) : language === 'de' ? (
                            <></>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_whatsapp'
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
                            <>Access to our WhatsApp group</>
                          ) : language === 'cs' ? (
                            <></>
                          ) : language === 'de' ? (
                            <></>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_platform'
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
                            <>Access to our platform</>
                          ) : language === 'cs' ? (
                            <></>
                          ) : language === 'de' ? (
                            <></>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='checkbox_engagement'
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
                            <>Engagement Group</>
                          ) : language === 'cs' ? (
                            <></>
                          ) : language === 'de' ? (
                            <></>
                          ) : null}
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit' className='mt-4'>
              {language === 'en' ? (
                <>Submit</>
              ) : language === 'cs' ? (
                <>Odeslat</>
              ) : language === 'de' ? (
                <></>
              ) : null}
            </Button>
          </form>
        </Form>
      </Container>
    </div>
  )
}

export default Contact
