import React from 'react'
import { TypePropsButton } from '../../@types/TypesAll';
import { Button } from './styles';

export function CartButton({ title }: TypePropsButton) {
  return (
   <>
    <Button>
      {title}
    </Button>
   </>
  ) 
}
