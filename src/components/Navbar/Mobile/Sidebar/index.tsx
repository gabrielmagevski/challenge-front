import { useContext } from 'react';
import { OpenCartContext } from '../../../../context/OpenCart';
import ShoppingCart from '../../../../assets/shoppingCartIcon.svg'

import { Menu } from './styles';
import ListItems from '../../ListItems';
import { Cart } from '../../../Cart';

export function Sidebar() {
  const { openCart, setOpenCart } = useContext(OpenCartContext)
  return(
    <Menu>
      <ListItems>
        <img onClick={() => setOpenCart!(!openCart)} src={ShoppingCart} alt="cart" />
        { openCart && <Cart /> }
      </ListItems>
    </Menu>
  )
}