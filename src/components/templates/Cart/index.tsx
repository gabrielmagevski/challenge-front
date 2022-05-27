import React from 'react'

import { CartProduct } from '@/components/organisms/CartProducts';
import { SectionCart, CartTriangle } from './styles';

export function Cart() {
  return (
    <SectionCart>
      <CartTriangle />
      <CartProduct />
    </SectionCart>
  )
}
