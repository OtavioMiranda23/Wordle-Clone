import styled from "styled-components";

export const NavbarStyles = styled.nav`
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 51px;
  padding: 0 15px;

  div {
    /* border: 1px magenta solid; */
    display: flex;
    font-size: 25px;
    width: 57px;
    justify-content: space-between;    
  }

  h1 {
  font-family: 'Suez One', times, serif;
  font-weight: 600;
}
`;

export const Title = styled.h1`
  font-size: 30px;

`;

export const Content = styled.div`
border: 1px magenta solid;

display: flex;
`;

