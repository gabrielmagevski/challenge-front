import { ReactNode } from "react";

export type ProductsType = {
  productId: number;
  name: string;
  quantity: number;
  bestPriceFormated: string;
  bestPrice: number;
  image: string;
}

export type TypeContextProps = {
  children?: ReactNode;
  openCart?: boolean,
  setOpenCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TypeItem = {
  data: ProductsType;
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

export type TypeBurger = {
  isOpen: boolean;
}