'use client'

import { useEffect, useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useLanguage } from '@/store/useLanguage'

interface SkillsProps {
  setSkill: any
}

const skillLabels: { [key: string]: string } = {
  photographer: 'Photographer',
  videographer: 'Videographer',
  'hotels/resorts': 'Hotels/Resorts',
}

export function Skills({ setSkill }: SkillsProps) {
  const { language } = useLanguage(state => state)

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    setSkill(skillLabels[value] || '')
  }, [value, setSkill])

  const skills = [
    {
      label:
        language === 'en'
          ? 'Photographer'
          : language === 'cs'
          ? 'Fotograf'
          : language === 'de'
          ? 'Fotograf'
          : '',
      value: 'photographer',
    },
    {
      label:
        language === 'en'
          ? 'Videographer'
          : language === 'cs'
          ? 'Videograf'
          : language === 'de'
          ? 'Videofilmer'
          : '',
      value: 'videographer',
    },
    {
      label:
        language === 'en'
          ? 'Hotels/Resorts'
          : language === 'cs'
          ? 'Hotely/Resorty'
          : language === 'de'
          ? 'Hotels/Resorts'
          : '',
      value: 'hotels/resorts',
    },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between'
        >
          {value
            ? skills.find(skill => skill.value === value)?.label
            : language === 'en'
            ? 'Select skill...'
            : language === 'cs'
            ? 'Vyberte dovednost...'
            : language === 'de'
            ? 'Fähigkeit auswählen...'
            : ''}
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <CommandGroup>
            {skills.map(skill => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue)
                  setSkill(skillLabels[currentValue] || '')
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === skill.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
