import { useState } from "react";

import LogoMobile from '@/assets/images/logo/logoEplus.png';
import { HeaderMobile, NavMobile, Button } from './styles';
import { NavbarBurger } from "@/components/molecules/NavbarBurger";
import { Sidebar } from "../Sidebar";


export function InterfaceMobile() {
  const[open, setOpen] = useState<boolean>(false);

  return(
    <HeaderMobile>
      <NavMobile>
        <div>
          <img
            className="logo"
            src={LogoMobile} 
            alt="Logo Eplus"
          />    
        </div>  
        <Button onClick={() => setOpen(!open)}>
          <NavbarBurger isOpen={open} />
        </Button>
      </NavMobile>
      { open && <Sidebar /> }
    </HeaderMobile>
  )
}