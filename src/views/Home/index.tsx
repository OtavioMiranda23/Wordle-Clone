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

  function handleSideMenuClick(event:any){

    // menuRef.current.contains(event.target as Element) ? console.log("Dentro da div") : console.log("Fora da div");
    
    if (!menuRef.current.contains(event.target as Element)) {
      console.log("Fora do sidebar")
      setSidebar(false);
      console.log(sidebar)
    }
  }
    
  useEffect(()=> {
    document.addEventListener("mousedown", handleSideMenuClick)
    return () => {
      window.removeEventListener("mousedown", handleSideMenuClick )
    }
  }, []);
  
  return (
    <>
      <Navbar handleClickMenu={() => setSidebar(s => !s)}/>
      <Container>
        <GameWrapper>
          {sidebar && <div ref={menuRef}><Sidebar /></div>}
          {/* Div que permite fechar o componente */}
          <GameGrid palavraAtual={palavraAtual}/>
          <Keyboard addKey={addKey} rmvKey={rmvKey}/>
        </GameWrapper>
      </Container>
    </>
  )
}
