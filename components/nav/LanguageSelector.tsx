'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'

const languages = [
  {
    value: 'en',
    src: '/flags/en.webp',
  },
  {
    value: 'cs',
    src: '/flags/cs.webp',
  },
]

interface LanguageSelectorProps {
  black?: boolean
}

const LanguageSelector = ({ black }: LanguageSelectorProps) => {
  const { language, imgSrc, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'w-[70px] justify-between bg-transparent border-none hover:bg-zinc-100/20',
            black
              ? 'text-white hover:text-white'
              : 'text-black hover:text-black'
          )}
        >
          <Image src={imgSrc(language)} width={30} height={30} alt={language} />
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1112] bg-black/20 backdrop-blur-lg border-white/30'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-2'>
            {languages.map(({ src, value }: { src: string; value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setOpen(false)
                }}
                className='mb-2 !bg-transparent cursor-pointer hover:!bg-zinc-300/20'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-white',
                    language === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <Image src={src} width={30} height={30} alt={value} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
