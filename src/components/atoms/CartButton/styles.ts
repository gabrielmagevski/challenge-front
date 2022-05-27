import styled from 'styled-components';

export const ButtonCart = styled.button`
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
