import React from 'react'
import { TypeBurger } from '@/@types/TypesAll';

import BurgerOpen from '@/assets/burger.svg';
import BurgerClose from  '@/assets/closed.svg';
import { BurgerStyled } from './styles';

export function NavbarBurger({ isOpen }: TypeBurger) {
  return (
    <>
      { 
        isOpen ? 
        <BurgerStyled
          src={BurgerClose}
          alt="Burger Close"
        />
        :
        <BurgerStyled
          src={BurgerOpen}
          alt="Burger Open"
        />
      }
    </>
  )
}
