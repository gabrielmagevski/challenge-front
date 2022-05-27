import React from 'react';
import EPlusLogo from '@/assets/images/logo/logoEplus.png';

import { Navbar, Topbar } from './styles';
import { NavbarList } from '@/components/molecules/NavbarList';
import { NavbarIcons } from '@/components/molecules/NavbarIcons';

export function InterfaceDesktop() {

  return (
    <>
      <Topbar>
        <Navbar>
          <img 
            className="logoStyle"
            src={EPlusLogo}
            alt="logo Eplus"
          />
          <NavbarList />
          <NavbarIcons />
        </Navbar>
      </Topbar>
    </>
  )
}
