import React from 'react'
import { useProducts } from '@/hooks/useProducts';
import { AreaPrice, TotalPrice } from './styles';

export function FinalTotalValue() {
  const { reducer } = useProducts();
  return (
    <AreaPrice>
      <TotalPrice>
        Total do pedido: 
        <span>
          {
            new Intl
            .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
            .format(reducer() / 100)
          }
        </span>
      </TotalPrice> 
   </AreaPrice>
  )
}
