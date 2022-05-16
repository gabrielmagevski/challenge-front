import React, { useContext } from 'react';
import Logo from '../../../assets/images/logo/logoEplus.png';
import CartIconSVG from '../../../assets/shoppingCartIcon.svg';
import PersonIconSVG from '../../../assets/personIcon.svg';
import SearchIconSVG from '../../../assets/searchIcon.svg';

import './desktop.modules.scss';
import { Cart } from '../../Cart';
import { OpenCartContext } from '../../../context/OpenCart';

export function Desktop() {
  const { openCart, setOpenCart } = useContext(OpenCartContext)

  return (
    <>
      <header className="Topbar">
        <nav className="navDesktop">
          <div>
            <img className="logoStyle" src={Logo} alt="logo Eplus" />
          </div> 
          <ul className="list">
              <li>Lançamentos</li>
              <li>Destaques</li>
              <li>Eletrônicos</li>
              <li>Moveis</li>
              <li>Suporte</li>
          </ul>
          <div className="icons"> 
            {
              openCart ?
              (
                <>
                  <div className="icons">
                    <img src={SearchIconSVG} />
                    <img src={PersonIconSVG} />
                    <button className="buttonInvisible" onClick={() => setOpenCart!(!openCart)}>
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
                  <button className="buttonInvisible" onClick={() => setOpenCart!(!openCart)}>
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
