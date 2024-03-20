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
  },
  {
    value: 'cs',
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
            'w-[70px] justify-between bg-transparent border-none',
            black
              ? 'text-white hover:text-white hover:bg-zinc-100/10'
              : 'text-black hover:text-black hover:bg-zinc-800/10'
          )}
        >
          <span className='uppercase'>{language}</span>
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1001] bg-white backdrop-blur-lg border-zinc-500/40'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-2'>
            {languages.map(({ value }: { value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setOpen(false)
                }}
                className='mb-2 !bg-transparent cursor-pointer hover:!bg-zinc-400/20'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-black',
                    language === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <span className='uppercase'>{value}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
