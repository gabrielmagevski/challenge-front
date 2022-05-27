import styled from 'styled-components';
import { itemsPropsCart, TotalPriceProps } from '../../@types/TypesAll';

export const SectionCart = styled.section<itemsPropsCart>`
  position: absolute;
  display: flex;
  flex-direction: flex-end;
  top: 48px;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }
`;

export const CartTriangle = styled.div`
  position: absolute;
  left: 258px;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 25px solid #F0F0F0;
  
  @media (max-width: 820px) {
    display: none;
  }
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F0F0F0;
  width: 40vh;
  max-height: 500px;
  margin-top: 20px;
  overflow-y: auto;

  @media (max-width: 820px) {
    position: absolute;
    width: 100%;
  }
`;


export const AreaCart = styled.div`
  background-color: #F0F0F0;
  display: flex;
  flex-direction: column;
`;


export const AreaPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: #7a7a7a;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  transition: filter 0.2ms;
  background-color: #00BC0E;
  border: none;
  color: #ffff;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const TotalPrice = styled.span<TotalPriceProps>`
  color: '#000';
  font-weight: bold;
  span {
    color: #00B914;
  }
`;
