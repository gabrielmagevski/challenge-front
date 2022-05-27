import styled from 'styled-components';

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F0F0F0;
  max-height: 500px;
  max-width: 1920px;
  min-width: 300px;
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

