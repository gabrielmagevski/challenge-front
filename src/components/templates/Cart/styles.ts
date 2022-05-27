import styled, { keyframes } from 'styled-components';
import { itemsPropsCart } from '@/@types/TypesAll';


const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SectionCart = styled.section<itemsPropsCart>`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  position: absolute;
  display: flex;
  top: 48px;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    position: relative;
  }
`;


export const CartTriangle = styled.div`
  display: flex;
  left: 215px;
  position: absolute;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 25px solid #F0F0F0;
  
  @media (max-width: 820px) {
    display: none;
  }
`;
