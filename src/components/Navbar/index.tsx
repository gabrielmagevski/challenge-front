import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export function Navbar() {
  const isMobile = useMediaQuery({query: '(max-width: 820px)'});
  
  if(isMobile) {
    return <Mobile />
  }
  
  return <Desktop />
}
