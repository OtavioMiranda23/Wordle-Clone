import { useEffect, useRef, useState } from "react";
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


export default function GameGrid() {

  const [ palavraAtual, setPalavraAtual ] = useState<string[]>([]);

  const addKey = (key:string) => setPalavraAtual(state => state.length >= 5 ? state : [...state, key.toUpperCase()]);
  const rmvKey = () => setPalavraAtual(state => state.slice(0, -1));

  function handleKey(evento:KeyboardEvent){
    /* Expressão regular (RegEx) simples pra identificar caracteres de A a Z */
    if (/[a-z]/.test(evento.key) && evento.key.length === 1) addKey(evento.key); // adicionar a letra para a palavra
    else{
      // Lidar com outras teclas: Backspace, Enter
      if(evento.key === "Backspace") return rmvKey(); // Se tiver apertado backspace, apagar a última letra
    }
  }

  useEffect(() =>{
    window.addEventListener("keydown", handleKey);
    return () =>{
      window.removeEventListener("keydown", handleKey);
    }
  }, [])

  return (
    <Container>
      { palavraAtual.map(letra => <p>{letra}</p>) }
    </Container>
  )
}
