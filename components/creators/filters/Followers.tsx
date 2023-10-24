import { useState, useEffect } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup } from '@/components/ui/command'
import { useLanguage } from '@/store/useLanguage'

interface FollowersProps {
  setFollowers: any
}

export function Followers({ setFollowers }: FollowersProps) {
  const { language } = useLanguage(state => state)
  const [open, setOpen] = useState(false)
  const [selectedRange, setSelectedRange] = useState<{
    min: number
    max: number
  } | null>(null)

  const followerRanges = [
    { label: '1 - 1,000', min: 1, max: 1000 },
    { label: '1,001 - 10,000', min: 1001, max: 10000 },
    { label: '10,001 - 100,000', min: 10001, max: 100000 },
    { label: '100,001+', min: 100001, max: Infinity },
  ]

  useEffect(() => {
    setFollowers({ min: 0, max: Infinity })
  }, [])

  const applyFilter = (min: number, max: number) => {
    setFollowers({ min, max })
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between'
        >
          {selectedRange
            ? `${selectedRange.min} - ${selectedRange.max}`
            : language === 'en'
            ? 'Select followers range...'
            : language === 'cs'
            ? 'Vyberte rozsah sledujících'
            : language === 'de'
            ? 'Anhängerbereich auswählen...'
            : ''}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <CommandGroup>
            {followerRanges.map(({ label, min, max }) => (
              <div
                key={label}
                className={`cursor-default hover:bg-gray-100 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${
                  selectedRange?.min === min && selectedRange?.max === max
                    ? 'bg-gray-100'
                    : ''
                }`}
                onClick={() => {
                  if (
                    selectedRange?.min === min &&
                    selectedRange?.max === max
                  ) {
                    setSelectedRange(null)
                    applyFilter(0, Infinity)
                  } else {
                    setSelectedRange({ min, max })
                    applyFilter(min, max)
                  }
                }}
              >
                {selectedRange?.min === min && selectedRange?.max === max && (
                  <Check className='mr-2 h-4 w-4' />
                )}
                {label}
              </div>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
