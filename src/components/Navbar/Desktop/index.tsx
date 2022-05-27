import React, { useContext } from 'react';
import CartIconSVG from '../../../assets/shoppingCartIcon.svg';
import PersonIconSVG from '../../../assets/personIcon.svg';
import SearchIconSVG from '../../../assets/searchIcon.svg';
import EPlusLogo from '../../../assets/images/logo/logoEplus.png';

import { Cart } from '../../Cart';
import { OpenCartContext } from '../../../context/OpenCart';
import ListItems from '../ListItems';

import {
  ButtonInvisible,
  Icons,
  Navbar, 
  Topbar, 
  Image 
} from './styles';

export function Desktop() {
  const { openCart, setOpenCart } = useContext(OpenCartContext);

  return (
    <>
      <Topbar>
        <Navbar>
          <img className="logoStyle" src={EPlusLogo} alt="logo Eplus" />
          <ListItems />
          <div> 
            <Icons>
              <Image src={SearchIconSVG} />
              <Image src={PersonIconSVG} />
              <ButtonInvisible onClick={() => setOpenCart!(!openCart)}>
                <Image src={CartIconSVG} />
              </ButtonInvisible> 
              { openCart && <Cart /> }  
            </Icons>
          </div>
        </Navbar>
      </Topbar>
    </>
  )
}
