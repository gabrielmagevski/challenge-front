import { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import '../../products.json';
import { ProductsType } from "../@types/TypesAll";

export function useProducts() {
  const[ products, setProducts ] = useState<ProductsType[]>([]);

  useEffect(() => { 
    try {
      api
      .get(`products.json`)
      .then(response => setProducts(response.data.cart.item))
    } 
    catch(err) {
      console.log(err);
    }
  }, []);

  const reducer = useCallback(() => {
     return products.reduce((acc, product) => {
        return acc += product.bestPrice;
    }, 0)
  }, [products]);

  return { products, reducer };
}

