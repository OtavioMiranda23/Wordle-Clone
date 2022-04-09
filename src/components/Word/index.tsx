import { LetterState } from "../../context/game-context"
import styled from "styled-components"
import { useEffect } from "react";
import Letter from "../Letter"

interface WordProps {
  word?: string,
}

export default function Word({word}: WordProps) {

  const splitted = word?.split("");                             // Dividindo a palavra em um array
  let toShow:string[] = Array(5).fill("");                      // Criando um array com exatamente 5 strings vazias ("")
  splitted?.forEach((letter, index) => toShow[index] = letter)  // Pra cada letra da palavra, substituir ela no índice equivalente no array com strings vazias

  return (
    <Container>
      {toShow.map(c => <Letter letter={c} state={LetterState.default}/>)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 5px;
`;
