import { Container } from "./styles";

/**
 * 
 * Esse componente será responsável em construir a grid
 * que serão exibidos os caracteres.
 * 
 * Provavelmente acabaremos criando um componente de <Caractere /> ou algo do tipo.
*/

/**
 * [] validas
 * [] todas as palavras cada dia, diminui por 1
 * 
 * tentativa = tentativa - []todas
 * 
*/

interface GameGridProps {
  palavraAtual: string[]
} 

export default function GameGrid(props: GameGridProps) {
  
  return (
    <Container>
      { props.palavraAtual.map(letra => <p>{letra}</p>) }
    </Container>
  )
}
