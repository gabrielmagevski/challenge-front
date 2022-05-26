import styled, { css } from "styled-components"; 
import { TypePropsSummaryInformation } from "../../@types/TypesAll";

export const Items = styled.div`
  display: flex;
  flex-direction: column;     
  padding: 10px;
`;

export const GroupProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const Title = styled.h3`
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
`;

export const GroupQuantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 10px;
`;

export const SummaryInformation = styled.span<TypePropsSummaryInformation>`
  color: '#000';
  ${props => props.price && css`
    color: #00BC0E;
    font-weight: 700;
  `}
`;

export const Line = styled.hr`
  margin-top: 10px;
  width: 100%;
  border: 1px solid #E7E7E7;  
`;


