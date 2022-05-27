import styled from "styled-components";

export const Topbar = styled.header`
  padding: 10px 30px;
  width: 95%;
  max-width: 1920px;
  background: #FFFF;
  margin: 0px 20px 0px 20px;
  font-size: 15px;
  -webkit-box-shadow: 2px 0px 2px -7px rgba(0,0,0,0.15); 
  box-shadow: 2px 10px 8px -7px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;  

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ButtonInvisible = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  cursor: pointer;
`;