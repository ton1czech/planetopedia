// 'use client'

// import { useState } from 'react'
// import { Check, ChevronsUpDown } from 'lucide-react'

// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from '@/components/ui/command'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import { useLanguage } from '@/store/useLanguage'

// interface SkillsProps {
//   setSkill: any
// }

// export function Skills({ setSkill }: SkillsProps) {
//   const { language } = useLanguage(state => state)

//   const [open, setOpen] = useState(false)
//   const [value, setValue] = useState('')

//   console.log(value)

//   const skills = [
//     {
//       label:
//         language === 'en'
//           ? 'Photographer'
//           : language === 'cs'
//           ? 'Fotograf'
//           : language === 'de'
//           ? 'Fotograf'
//           : '',
//       value: 'Photographer',
//     },
//     {
//       label:
//         language === 'en'
//           ? 'Videographer'
//           : language === 'cs'
//           ? 'Videograf'
//           : language === 'de'
//           ? 'Videofilmer'
//           : '',
//       value: 'Videographer',
//     },
//     {
//       label:
//         language === 'en'
//           ? 'Hotels/Resorts'
//           : language === 'cs'
//           ? 'Hotely/Resorty'
//           : language === 'de'
//           ? 'Hotels/Resorts'
//           : '',
//       value: 'Hotels/Resorts',
//     },
//   ]

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant='outline'
//           role='combobox'
//           aria-expanded={open}
//           className='justify-between'
//         >
//           {value
//             ? skills.find(skill => skill.value === value)?.label
//             : language === 'en'
//             ? 'Select skill...'
//             : language === 'cs'
//             ? 'Vyberte dovednost...'
//             : language === 'de'
//             ? 'Fähigkeit auswählen...'
//             : ''}
//           <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='p-0'>
//         <Command>
//           <CommandGroup>
//             {skills.map(skill => (
//               <CommandItem
//                 key={skill.value}
//                 value={skill.value}
//                 onSelect={currentValue => {
//                   setValue(currentValue === value ? '' : currentValue)
//                   setSkill(currentValue === value ? '' : currentValue)
//                   setOpen(false)
//                 }}
//               >
//                 <Check
//                   className={cn(
//                     'mr-2 h-4 w-4',
//                     value === skill.value ? 'opacity-100' : 'opacity-0'
//                   )}
//                 />
//                 {skill.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }

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

interface SkillsProps {
  setSkill: any
}

export function Skills({ setSkill }: SkillsProps) {
  const { language } = useLanguage(state => state)

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

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
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
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
                  //   setSkill(currentValue === value ? '' : currentValue)
                  setSkill(
                    currentValue === 'photographer'
                      ? 'Photographer'
                      : currentValue === 'videographer'
                      ? 'Videographer'
                      : currentValue === 'hotels/resorts'
                      ? 'Hotels/Resorts'
                      : ''
                  )
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
