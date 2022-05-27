import React from 'react'
import { useProducts } from '../../hooks/useProducts';
import { Item } from './Items';


export function CartItems() {
  const products = useProducts();

  return (
    <>
      { 
        products.map(product => <Item key={product.productId} data={product} /> )
      }
    </>
  )
}
