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
    name: z.string().min(1),
    email: z.string().email({
      message:
        language === 'en' ? 'Not a valid email' : 'E-mail nesplňuje požadavky',
    }),
    hotel: z.string().min(1),

    checkbox_content: z.boolean(),
    checkbox_spot: z.boolean(),
    checkbox_press: z.boolean(),
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
    <div className='sticky top-0 z-20 bg-zinc-200 pt-32 snap-start scroll-mt-20 w-screen'>
      <Container>
        <h2 className='mb-5 text-2xl md:text-3xl lg:text-4xl font-bold'>
          Let's create together
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>Full Name *</Label>
                      <Input placeholder='john doe' {...field} />
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
                      <Label>Hotel Name *</Label>
                      <Input placeholder='Four seasons' {...field} />
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
                      <Input placeholder='fourseasons@gmail.com' {...field} />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid gap-3 my-3'>
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
                        />
                        <Label>Content Creation for social media</Label>
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
                          Professional short 4K spot for your Hotel or Resort
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
                        />
                        <Label>Press + Media Trips</Label>
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
                      <Label>Message</Label>
                      <Textarea placeholder='write a message...' {...field} />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
