import React from 'react'
import { useProducts } from '../../hooks/useProducts';
import { CartItem } from '../CartItem';
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
  const { products, reducer } = useProducts();
  return (
    <SectionCart>
      <CartTriangle />
        <CartProducts>
         { products.map(product => <CartItem key={product.productId} data={product} /> )}
          <AreaCart>
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
            <CartButton>
              Finalizar Compra
            </CartButton>
          </AreaCart>
        </CartProducts>
    </SectionCart>
  )
}
