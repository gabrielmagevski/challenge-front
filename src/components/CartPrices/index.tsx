import React from 'react'
import { AreaCart, AreaPrice, TotalPrice } from './styles'

export function CartPrices() {
  return (
    <>
      <AreaCart>
        <AreaPrice>
          <TotalPrice>Total do pedido:</TotalPrice> 
          <TotalPrice total={true}>R$ 20.356,95</TotalPrice>
        </AreaPrice>
      </AreaCart>
    </>
  )
}
