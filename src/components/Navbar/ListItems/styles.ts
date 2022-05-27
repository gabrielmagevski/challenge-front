import styled from "styled-components";   

export const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  cursor: pointer;
  
  @media (max-width: 820px) {
    flex-direction: column;
    > img {
      width: 10%;
    }
  }
`;