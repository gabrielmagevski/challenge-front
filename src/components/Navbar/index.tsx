import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export function Navbar() {
  const mobile = useMediaQuery({query: '(max-width: 720px)'});
  return (
   <>
    {
      mobile ? (
        <Mobile />
      ) : (
        <Desktop />
      )
    }
   </>
  )
}
