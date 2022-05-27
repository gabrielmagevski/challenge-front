import React from 'react'
import { useProducts } from '@/hooks/useProducts';

import { CartProducts, AreaCart } from './styles';
import { FinalTotalValue } from '@/components/molecules/FinalTotalValue';
import { CartItem } from '@/components/molecules/CartItem';
import { CartButton } from '@/components/atoms/CartButton';
import swal from 'sweetalert';

export function CartProduct() {
  const { products } = useProducts();

  function handleSucessBuy() {
    swal(
      "Compra feita!", 
      "Sua compra foi realizada com sucesso!",
      "success"
    );
  }

  return (
    <CartProducts>
      { products.map(product => <CartItem key={product.productId} data={product} /> )}
      <AreaCart>
        <FinalTotalValue />
        <CartButton onClick={() => handleSucessBuy()}>
          Finalizar Compra
        </CartButton>
      </AreaCart>
    </CartProducts>
  )
}
