import styled, { css } from 'styled-components';
import { TotalPriceProps } from '../../@types/TypesAll';

export const AreaCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const AreaPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 25px;
  color: #7a7a7a;
`;

export const TotalPrice = styled.span<TotalPriceProps>`
  color: '#000';
  ${
     props => props.total && css` 
      color: #555555;
      font-weight: 700;
      `
   }
`;

