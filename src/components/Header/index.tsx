import React, { useState } from 'react';
import Logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import CartIconSVG from '../../assets/shoppingCartIcon.svg';
import PersonIconSVG from '../../assets/personIcon.svg';
import SearchIconSVG from '../../assets/searchIcon.svg';

import './header.modules.scss';
import { Cart } from '../Cart';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <header className="Topbar">
      <nav>
        <div>
          <img className="logoStyle" src={Logo} alt="logo Eplus" />
        </div> 
        <ul className="list">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
        <div className="icons"> 
          {
            isOpen ?
            (
              <>
                <div className="icons">
                  <img src={SearchIconSVG} />
                  <img src={PersonIconSVG} />
                  <button className="buttonInvisible" onClick={() => setIsOpen(!isOpen)}>
                    <img src={CartIconSVG} />
                    <div className="triangulo" />
                  </button> 
                </div>
                <Cart />
               </>
            ) :
            (
              <div className="icons">
                <img src={SearchIconSVG} />
                <img src={PersonIconSVG} />
                <button className="buttonInvisible" onClick={() => setIsOpen(!isOpen)}>
                  <img src={CartIconSVG} />
                </button> 
              </div>
            )
          }
        </div>
      </nav>
    </header>
    </>
  )
}
