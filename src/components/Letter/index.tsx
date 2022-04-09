import { LetterState } from '../../context/game-context'
import styled from "styled-components"
import { memo } from 'react';

interface LetterProps {
  letter: string,
  state: LetterState
}

interface StyleProps{
  state: LetterState
}

const Container = styled.div<StyleProps>`
  width: clamp(48px, 7vh, 62px);
  height: clamp(48px, 7vh, 62px); // Usamos a função clamp no CSS para estipular um valor mínimo, máximo e relativo.
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #222;

  background-color: ${p => p.state === LetterState.rightPos ? "#538d4e" : "transparent"} ;
  border-color: ${p => p.state === LetterState.rightPos ? "#538d4e" : "#222"} ;
  color: ${p => p.state === LetterState.rightPos ? "#fff" : "#222"} ;
`;

const Letter = ({ letter, state }: LetterProps) => <Container state={state}>{letter}</Container>;

export default memo(Letter); 

/**
 * Usamos a função `memo` em componentes 
 * que mudam com pouca frequência.
 * 
 * Estamos dizendo ao react que ele não precisa 
 * checar se esse elemento mudou sempre que for 
 * re-renderizar a tela.
 * 
 * https://pt-br.reactjs.org/docs/react-api.html#reactmemo
 */