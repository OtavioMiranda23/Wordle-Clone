import { useEffect, useState } from "react";
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

  const [ palavra, setPalavra ] = useState<string[]>([]);

  const quebrada = "ROSEA".split(""); // ["R","O","S","E","A"]

  palavra.forEach(letra =>{
    if(letra in quebrada) return "Letra está na palavra ideal"
  })
  
  function handleKey(evento:KeyboardEvent){
    console.log(evento.key);
    if(evento.key.length > 1) return;
    setPalavra(state => [...state, evento.key.toUpperCase()])
  }

  useEffect(() =>{
    window.addEventListener("keydown", handleKey);
    return () =>{
      window.removeEventListener("keydown", handleKey);
    }
  }, [])

  return (
    <Container>
      { palavra.map(letra => <p>{letra}</p>) }
    </Container>
  )
}
