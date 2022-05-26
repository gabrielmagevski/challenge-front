import React, { useContext } from 'react';
import CartIconSVG from '../../assets/shoppingCartIcon.svg';
import PersonIconSVG from '../../assets/personIcon.svg';
import SearchIconSVG from '../../assets/searchIcon.svg';

import { Cart } from '../Cart';
import { OpenCartContext } from '../../context/OpenCart';
import ListItems from './ListItems';
import { Logo } from './Logo';
import {
  ButtonInvisible,
  Icons,
  Navbar, 
  Topbar, 
  Image 
} from './styles';

export function Header() {
  const { openCart, setOpenCart } = useContext(OpenCartContext);

  return (
    <>
      <Topbar>
        <Navbar>
          <Logo />
          <ListItems />
          <Icons> 
            <Icons>
              <Image src={SearchIconSVG} />
              <Image src={PersonIconSVG} />
              <ButtonInvisible onClick={() => setOpenCart!(!openCart)}>
                <Image src={CartIconSVG} />
              </ButtonInvisible> 
            </Icons>
            { openCart && <Cart /> }  
          </Icons>
        </Navbar>
      </Topbar>
    </>
  )
}


/*
  falta: responsivo e o
  mobile, animação do cart e Reducer para somar as contas.
*\
