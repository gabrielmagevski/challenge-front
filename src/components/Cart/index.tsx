import React from 'react'
import { CartButton } from '../CartButton';
import { CartItems } from '../CartItems';
import { CartPrices } from '../CartPrices';
import { SectionCart, CartProducts, CartTriangle } from './styles';

export function Cart() {
  return (
   <>
      <SectionCart>
       <CartTriangle />
        <CartProducts>
          <CartItems />
          <CartPrices />
          <CartButton title='Finalizar Compra' />
        </CartProducts>
      </SectionCart>
   </>
  )
}
