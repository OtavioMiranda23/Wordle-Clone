import { useEffect, useRef, useState } from 'react';
import GameGrid from '../../components/GameGrid';
import { Keyboard } from '../../components/Keyboard';
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import { Container, GameWrapper } from "./styles"

enum TeclaState {
  existe,
  existe_posErrada,
  nao_existe
}



export default function Home() {
  const [ palavraAtual, setPalavraAtual ] = useState<string>(""); // Mudei o state pra ser uma palavra ao invés de um Array de palavras

  const addKey = (key:string) => setPalavraAtual(state => state.length >= 5 ? state : state + key.toUpperCase());
  const rmvKey = () => setPalavraAtual(state => state.slice(0, -1));

  function handleKey(evento:KeyboardEvent){
    /* Expressão regular (RegEx) simples pra identificar caracteres de A a Z */
    if (/[a-z A-Z]/.test(evento.key) && evento.key.length === 1) addKey(evento.key);
    else{
      // Lidar com outras teclas: Backspace, Enter
      if(evento.key === "Backspace") return rmvKey();
    }
  }

  useEffect(() =>{
    window.addEventListener("keydown", handleKey);
    return () =>{
      window.removeEventListener("keydown", handleKey);
    }
  }, [])

  //Adiciona a lógica sidebar:

  const [sidebar, setSidebar] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null!)

  useEffect(()=> {
    document.addEventListener("mousedown", (event:any) => {
      if (!menuRef.current.contains(event.target)) { 
      setSidebar(false);
      console.log(sidebar)
    }})
  });



  return (
    <>
      <Navbar handleClick={() => setSidebar(true)}/>
      <Container>
        <GameWrapper>
          {sidebar && <Sidebar/>}
          {/* Div que permite fechar o componente */}
        <div className="Teste" ref={menuRef} ></div> 
          <GameGrid palavraAtual={palavraAtual}/>
          <Keyboard addKey={addKey} rmvKey={rmvKey}/>
        </GameWrapper>
      </Container>
    </>
  )
}
