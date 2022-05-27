import React from 'react'
import { InterfaceDesktop } from '@/components/organisms/InterfaceDesktop';
import { InterfaceMobile } from '@/components/organisms/InterfaceMobile';
import { useMediaQuery } from 'react-responsive';


export function Navbar() {
  const isMobile = useMediaQuery({query: '(max-width: 820px)'});
  
  if(isMobile) {
    return <InterfaceMobile />
  }
  
  return <InterfaceDesktop />
}
