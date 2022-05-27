import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export function Header() {
  const isMobile = useMediaQuery({query: '(max-width: 820px)'});
  
  return (
    <>
      {
      isMobile ? (
        <Mobile />
      ) : (
        <Desktop />
      )
    }
    </>
  )
}
