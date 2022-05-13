import React from 'react';
import Logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import CartIconSVG from '../../assets/shoppingCartIcon.svg';
import PersonIconSVG from '../../assets/personIcon.svg';
import SearchIconSVG from '../../assets/searchIcon.svg';

import './header.modules.scss';

export function Header() {
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
          <img src={SearchIconSVG} />
          <img src={PersonIconSVG} />
          <img src={CartIconSVG} />
        </div>
      </nav>
    </header>
    </>
  )
}
