import React, { useContext } from 'react';
import CartIconSVG from '@/assets/shoppingCartIcon.svg';
import PersonIconSVG from '@/assets/personIcon.svg';
import SearchIconSVG from '@/assets/searchIcon.svg';

import { OpenCartContext } from '@/context/OpenCart';


import { Icons, Image } from './styles';
import { Cart } from '@/components/templates/Cart';

export function NavbarIcons() {
  const { openCart, setOpenCart } = useContext(OpenCartContext);
  return (
    <Icons>
      <Image src={SearchIconSVG} />
      <Image src={PersonIconSVG} />
      <Image onClick={() => setOpenCart!(!openCart)} src={CartIconSVG} />
      { openCart && <Cart /> }  
    </Icons>
  )
}
