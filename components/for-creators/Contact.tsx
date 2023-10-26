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
            : 'uživatelské jméno musí začínat "@"',
      }),
    email: z.string().email({
      message:
        language === 'en' ? 'Not a valid email' : 'E-mail nesplňuje požadavky',
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
        language === 'en' ? 'Sent Successfully.' : 'Úspěšně odesláno.'
      )
    } catch (error) {
      console.log('Error sending email:', error)

      toast.error(
        language === 'en'
          ? 'Something went wrong, please try again later.'
          : 'Něco se pokazilo, zkuste to prosím později.'
      )
    } finally {
      form.reset()
    }
  }

  return (
    <div className='sticky top-0 z-30 bg-zinc-200 pt-32 snap-start scroll-mt-20 w-screen'>
      <Container>
        <h2 className='mb-5 text-2xl md:text-3xl lg:text-4xl'>
          Be <span className='font-bold'> part of our community </span>and get
          your creation among the target group!
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name='instagram'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>Instagram Account *</Label>
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
                        <Label>To become the creator of Planetopedia</Label>
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
                        <Label>Access to our WhatsApp group</Label>
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
                        <Label>Access to our platform</Label>
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
                        <Label>Engagement Group</Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit' className='mt-4'>
              {language === 'en' ? <>Submit</> : <>Odeslat</>}
            </Button>
          </form>
        </Form>
      </Container>
    </div>
  )
}

export default Contact
