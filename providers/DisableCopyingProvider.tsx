'use client'

import { useEffect } from 'react'

const disableRightClick = (event: MouseEvent) => {
  event.preventDefault()
}

export const DisableCopyingProvider = () => {
  useEffect(() => {
    document.body.addEventListener('contextmenu', disableRightClick)

    return () => {
      document.body.removeEventListener('contextmenu', disableRightClick)
    }
  }, [])

  return <></>
}
