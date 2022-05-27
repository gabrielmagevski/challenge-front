import styled from 'styled-components';
import { TotalPriceProps } from '@/@types/TypesAll';

export const AreaPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: #7a7a7a;
`;

export const TotalPrice = styled.span<TotalPriceProps>`
  color: '#000';
  font-weight: bold;
  span {
    color: #00B914;
  }
`;
