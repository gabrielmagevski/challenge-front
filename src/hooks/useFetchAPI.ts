import { useEffect, useState } from "react";
import api from "../services/api";
import '../../products.json';

export type PropsProducts = {
  productId: number;
  name: string;
  quantity: number;
  bestPriceFormated: string;
  image: string;
}

export function useFetchsAPI() {
  const[ products, setProducts ] = useState<PropsProducts[]>([]);

  const handleGetProducts = async () => {
    try {
      const fetch = await api
      .get(`products.json`)
      .then(response => setProducts(response.data.cart.item))
      return fetch;
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => { 
    handleGetProducts();
  }, []);
 
  return {
    products,
  }
}