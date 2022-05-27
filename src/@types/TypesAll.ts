import { ReactNode } from "react";

export type PropsProducts = {
  productId: number;
  name: string;
  quantity: number;
  bestPriceFormated: string;
  image: string;
}

export type TypeItem = {
  data: PropsProducts;
}

export type TypeListItems = {
  children?: ReactNode;
}

export type TypePropsSummaryInformation = {
  price?: boolean;
}

export type TotalPriceProps = {
  total?: boolean;
}

export type itemsPropsCart = {
  isVisible?: boolean;
}