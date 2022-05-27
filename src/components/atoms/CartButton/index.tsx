import React from 'react';
import { TypeCartButton } from '@/@types/TypesAll';

import { ButtonCart } from './styles';

export function CartButton({ children, ...props }: TypeCartButton ) {
  return (
    <ButtonCart {...props}>
      {children}
    </ButtonCart>
  )
}
