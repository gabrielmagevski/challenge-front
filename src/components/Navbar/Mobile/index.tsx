import { useState } from "react";
import { Sidebar } from './Sidebar';
import LogoMobile from '../../../assets/images/logo/logoEplus.png';
import { HeaderMobile, NavMobile, Button } from './styles';
import { Burger } from "./Burger";

export function Mobile() {
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
          <Burger isOpen={open} />
        </Button>
      </NavMobile>
      { open && <Sidebar /> }
    </HeaderMobile>
  )
}