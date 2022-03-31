import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  display: grid;
  border: 1px solid #222;
  grid-template-columns: repeat(5, 1fr); // A função 'repeat' literalmente só repete uma mesma informação várias vezes
  grid-template-rows: repeat(5, 1fr);
  /* 
    a medida 'fr' é uma unidade de medida relativa que indica uma fração igual do espaço disponível,

    logo, com esses comandos estamos dizendo que queremos 5 colunas de tamanho exatamente igual
  */
  height: 400px;
  width: 400px;

  /* 
    Esse seletor '&' representa essa mesma tag que estamos editando, a <main> 
    usando o > * estamos dizendo que todas(*) as tags filhas deste componente(>)
    devem usar esses estilos.
  */
  & > *{
    border: 1px solid #222;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
  }

`;