import { useContext } from 'react';
import { OpenCartContext } from '../../../../context/OpenCart';
import ShoppingCart from '../../../../assets/shoppingCartIcon.svg'

import './sidebar.modules.scss';
import { CartSide } from '../CartSide';

export function Sidebar() {
  const { openCart, setOpenCart } = useContext(OpenCartContext)
  return(
    <>
      {
        openCart ? (
          <div className="menu">
            <ul>   
              <li>Lançamentos</li>
              <li>Destaques</li>
              <li>Eletrônicos</li>
              <li>Moveis</li>
              <li>Suporte</li>
              <img onClick={() => setOpenCart!(!openCart)} src={ShoppingCart} alt="cart" />
              <CartSide /> 
            </ul>
          </div>
        ) : (
          <>
          <div className="menu">
            <ul>   
              <li>Lançamentos</li>
              <li>Destaques</li>
              <li>Eletrônicos</li>
              <li>Moveis</li>
              <li>Suporte</li>
              <img onClick={() => setOpenCart!(!openCart)} src={ShoppingCart} alt="cart" />
            </ul>
          </div>
         </>
        )
      }
    </>
  )
}