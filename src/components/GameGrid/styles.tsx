import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  /* border: 2px solid #222; */
  /* gap: 5px; */
  border-radius: 3px;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap:5px;
  width: 330px;
`;