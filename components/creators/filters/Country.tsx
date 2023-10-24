'use client'

import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useLanguage } from '@/store/useLanguage'

interface CountryProps {
  setCountryCode: any
}

export function Country({ setCountryCode }: CountryProps) {
  const { language } = useLanguage(state => state)

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const countries = [
    {
      label:
        language === 'en'
          ? '🇨🇿 Czech republic'
          : language === 'cs'
          ? '🇨🇿 Česká republika'
          : language === 'de'
          ? '🇨🇿 Tschechische Republik'
          : '',
      value: 'cz',
    },
    {
      label:
        language === 'en'
          ? '🇺🇸 USA'
          : language === 'cs'
          ? '🇺🇸 USA'
          : language === 'de'
          ? '🇺🇸 USA'
          : '',
      value: 'us',
    },
    {
      label:
        language === 'en'
          ? '🇩🇪 Germany'
          : language === 'cs'
          ? '🇩🇪 Německo'
          : language === 'de'
          ? '🇩🇪 Deutschland'
          : '',
      value: 'de',
    },
    {
      label:
        language === 'en'
          ? '🇮🇹 Italy'
          : language === 'cs'
          ? '🇮🇹 Itálie'
          : language === 'de'
          ? '🇮🇹 Italien'
          : '',
      value: 'it',
    },
    {
      label:
        language === 'en'
          ? '🇫🇷 France'
          : language === 'cs'
          ? '🇫🇷 Francie'
          : language === 'de'
          ? '🇫🇷 Frankreich'
          : '',
      value: 'fr',
    },
    {
      label:
        language === 'en'
          ? '🇬🇪 Georgia'
          : language === 'cs'
          ? '🇬🇪 Georgia'
          : language === 'de'
          ? '🇬🇪 Georgie'
          : '',
      value: 'ge',
    },
    {
      label:
        language === 'en'
          ? '🇮🇳 India'
          : language === 'cs'
          ? '🇮🇳 Indie'
          : language === 'de'
          ? '🇮🇳 Indien'
          : '',
      value: 'ind',
    },
    {
      label:
        language === 'en'
          ? '🇬🇧 Great Britain'
          : language === 'cs'
          ? '🇬🇧 Velká Británie'
          : language === 'de'
          ? '🇬🇧 Großbritannien'
          : '',
      value: 'gb',
    },
    {
      label:
        language === 'en'
          ? '🇮🇨 Canary Islands'
          : language === 'cs'
          ? '🇮🇨 Kanárské ostrovy'
          : language === 'de'
          ? '🇮🇨 Kanarische Inseln'
          : '',
      value: 'esp',
    },
    {
      label:
        language === 'en'
          ? '🇳🇱 Netherlands'
          : language === 'cs'
          ? '🇳🇱 Nizozemsko'
          : language === 'de'
          ? '🇳🇱 Netherlands'
          : '',
      value: 'nz',
    },
    {
      label:
        language === 'en'
          ? '🇨🇭 Switzerland'
          : language === 'cs'
          ? '🇨🇭 Švýcarsko'
          : language === 'de'
          ? '🇨🇭 Schweiz'
          : '',
      value: 'ch',
    },
    {
      label:
        language === 'en'
          ? '🇫🇮 Finland'
          : language === 'cs'
          ? '🇫🇮 Finsko'
          : language === 'de'
          ? '🇫🇮 Finnland'
          : '',
      value: 'fin',
    },
    {
      label:
        language === 'en'
          ? '🇲🇾 Malaysia'
          : language === 'cs'
          ? '🇲🇾 Malajsie'
          : language === 'de'
          ? '🇲🇾 Malaysia'
          : '',
      value: 'my',
    },
    {
      label:
        language === 'en'
          ? '🇵🇹 Portugal'
          : language === 'cs'
          ? '🇵🇹 Portugalsko'
          : language === 'de'
          ? '🇵🇹 Portugal'
          : '',
      value: 'pt',
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
            ? countries.find(country => country.value === value)?.label
            : language === 'en'
            ? 'Select country...'
            : language === 'cs'
            ? 'Vyberte zemi...'
            : language === 'de'
            ? 'Land auswählen...`'
            : ''}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <CommandInput
            placeholder={
              language === 'en'
                ? 'Search country...'
                : language === 'cs'
                ? 'Hledat zemi...'
                : language === 'de'
                ? 'Land suchen...'
                : ''
            }
          />
          <CommandEmpty>
            {language === 'en' ? (
              <>No country found.</>
            ) : language === 'cs' ? (
              <>Nebyla nalezena žádná země.</>
            ) : language === 'de' ? (
              <>Kein Land gefunden.</>
            ) : null}
          </CommandEmpty>
          <CommandGroup>
            {countries.map(country => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue)
                  setCountryCode(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === country.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {country.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
