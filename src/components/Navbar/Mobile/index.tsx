import { useState } from "react";
import { Sidebar } from './Sidebar';
import BurgerOpen from '../../../assets/burger.svg';
import LogoMobile from '../../../assets/images/logo/logoEplus.png';
import { HeaderMobile, NavMobile } from './styles';

export function Mobile() {
  const[open, setOpen] = useState<boolean>(false);

  return(
    <HeaderMobile>
      <NavMobile>
        <div>
          <img className="logo" src={LogoMobile} alt="Logo Eplus" />    
        </div>
        <div>
          <img onClick={() => setOpen(!open)} className="buguer" src={BurgerOpen} alt="Burger" />
        </div>
      </NavMobile>
      {open && <Sidebar />}
    </HeaderMobile>
  )
}