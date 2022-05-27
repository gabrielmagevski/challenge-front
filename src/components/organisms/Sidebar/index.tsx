import { useContext } from 'react';
import { OpenCartContext } from '@/context/OpenCart';
import ShoppingCart from '@/assets/shoppingCartIcon.svg'

import { Menu } from './styles';
import { NavbarList } from '@/components/molecules/NavbarList';
import { Cart } from '@/components/templates/Cart';


export function Sidebar() {
  const { openCart, setOpenCart } = useContext(OpenCartContext)
  return(
    <Menu>
      <NavbarList>
        <img 
          onClick={() => setOpenCart!(!openCart)}
          src={ShoppingCart} 
          alt="cart"
        />
        { openCart && <Cart /> }
      </NavbarList>
    </Menu>
  )
}