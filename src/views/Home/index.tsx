import { useEffect, useState } from 'react';
import GameGrid from '../../components/GameGrid';
import { Keyboard } from '../../components/Keyboard';
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import { Container } from "./styles"

enum TeclaState {
  existe,
  existe_posErrada,
  nao_existe
}

export default function Home() {
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
    <>
      <Navbar />
      <Container>
        <GameGrid palavraAtual={palavraAtual}/>
        <Keyboard addKey={addKey}/>
        <Sidebar/>
      </Container>
    </>
  )
}
