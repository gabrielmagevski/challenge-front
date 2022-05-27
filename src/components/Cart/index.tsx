import React from 'react'
import { CartItems } from '../CartItems';
import { 
  SectionCart,
  CartProducts,
  CartTriangle,
  CartButton,
  AreaCart,
  AreaPrice,
  TotalPrice
} from './styles';

export function Cart() {
  return (
    <SectionCart>
      <CartTriangle />
        <CartProducts>
          <CartItems />
          <AreaCart>
            <AreaPrice>
              <TotalPrice>Total do pedido: <span>R$ 20.356,95</span></TotalPrice> 
            </AreaPrice>
            <CartButton>
              Finalizar Compra
            </CartButton>
          </AreaCart>
        </CartProducts>
    </SectionCart>
  )
}
