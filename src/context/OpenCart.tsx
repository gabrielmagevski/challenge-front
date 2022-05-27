import { createContext, ReactNode, useState } from "react";
import { TypeContextProps } from "../@types/TypesAll";

export const OpenCartContext = createContext({} as TypeContextProps)

export function OpenCartProvider({ children }: TypeContextProps) {
  const [ openCart, setOpenCart ] = useState(false);
  
  return (
    <OpenCartContext.Provider 
      value={{ openCart, setOpenCart }}
    >
      {children}
    </OpenCartContext.Provider>
  )
}