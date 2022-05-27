import { useEffect, useState } from "react";
import api from "../services/api";
import '../../products.json';
import { PropsProducts } from "../@types/TypesAll";

export function useProducts() {
  const[ products, setProducts ] = useState<PropsProducts[]>([]);

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
 
  return products;
}