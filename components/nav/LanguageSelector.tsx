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
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/useLanguage'

const languages = [
  {
    value: 'en',
    label: 'EN',
  },
  {
    value: 'cs',
    label: 'CZ',
  },
]

interface LanguageSelectorProps {
  black?: boolean
}

const LanguageSelector = ({ black }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'w-[70px] justify-between bg-transparent border-none hover:bg-transparent',
            black
              ? 'text-white hover:text-zinc-400'
              : 'text-black hover:text-zinc-600'
          )}
        >
          <span>
            {language === 'en' && 'EN'}
            {language === 'cs' && 'CZ'}
          </span>
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-min h-min z-[1001] bg-white backdrop-blur-lg border-none rounded-none p-0 m-0'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-1'>
            {languages.map(
              ({ value, label }: { value: string; label: string }) => (
                <CommandItem
                  key={value}
                  onSelect={() => {
                    setLanguage(value)
                    setOpen(false)
                  }}
                  className='!bg-transparent cursor-pointer'
                >
                  <span className='uppercase'>{label}</span>
                </CommandItem>
              )
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
