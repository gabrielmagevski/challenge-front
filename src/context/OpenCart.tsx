import { createContext, ReactNode, useState } from "react";

type TypeContextProps = {
  children?: ReactNode;
  openCart?: boolean,
  setOpenCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenCartContext = createContext({} as TypeContextProps)

export function OpenCartProvider({ children }: TypeContextProps) {
  const [ openCart, setOpenCart ] = useState(false);
  
  return (
    <OpenCartContext.Provider value={{ openCart, setOpenCart }}>
      {children}
    </OpenCartContext.Provider>
  )
}