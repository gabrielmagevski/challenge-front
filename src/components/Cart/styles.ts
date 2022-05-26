import styled from 'styled-components';
import { itemsPropsCart } from '../../@types/TypesAll';

export const SectionCart = styled.section<itemsPropsCart>`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;
`;

export const CartProducts = styled.div`
  background-color: #F0F0F0;
  width: 100;
  height: 500px;
  position: absolute;
  margin-top: 41px;
  overflow-y: scroll;
`;

export const CartTriangle = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-right: 12px;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 25px solid #F0F0F0;
`;