import React from 'react'
import { TypeListItems } from '@/@types/TypesAll'
import { List } from './styles'

export function NavbarList({ children }: TypeListItems) {
  return (
   <>
      <List>
        <li>Lançamentos</li>
        <li>Destaques</li>
        <li>Eletrônicos</li>
        <li>Moveis</li>
        <li>Suporte</li>
        {children}
      </List>
   </>
  )
}
