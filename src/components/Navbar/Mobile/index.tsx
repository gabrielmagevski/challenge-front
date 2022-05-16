import { useState } from "react";
import { Sidebar } from './Sidebar';
import BurgerOpen from '../../../assets/burger.svg';
import BurgerClose from "../../../assets/closed.svg";
import LogoMobile from '../../../assets/images/logo/logoEplus.png';

import './mobile.modules.scss';
export function Mobile() {
  const[open, setOpen] = useState<boolean>(false);

  return(
    <>
      {
       open ? (
          <>
            <header className="headerMobile">
              <nav className="navMobile">
                <div>
                  <img className="logo" src={LogoMobile} alt="Logo Eplus" />    
                </div>
                <div>
                  <img onClick={() => setOpen(!open)} className="buguer" src={BurgerClose} alt="Close" />
                </div>
              </nav>
              <Sidebar />
            </header>
          </>
        )
        :   
        (
          <header className="headerMobile">
            <nav className="navMobile">
              <div>
                <img className="logo" src={LogoMobile} alt="Logo Eplus" />    
              </div>
              <div className="mini-bar">
                <img onClick={() => setOpen(!open)} className="buguer" src={BurgerOpen} alt="Open" />
              </div>
            </nav>
          </header>
        ) 
      }
    </>
  )
}