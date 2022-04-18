import { Content, NavbarStyles, Title } from "./styles"
import { BiHelpCircle } from "react-icons/bi"
import { GrBarChart } from "react-icons/gr"
import { MdMenu } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import { BiBarChartAlt2 } from "react-icons/bi"
import { useState } from "react"
import ModeloModal from "../Modal"
import { Container } from '../Modal/styles'



interface INavbar{
  handleClickMenu: () => void ;
}


export default function Navbar(prop:INavbar) {

  // Adiciona componente Help
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  function closeModal() {
    setIsHelpModalOpen(false);
  }
  const customStylesModalHelp = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    content: {
      top:'0%',
      left:'35%',
      right:'35%',
      margin: '0',
      border: 'none'
    }
  }
  return (

    <NavbarStyles>
      <div>
        <MdMenu style={{cursor:"pointer"}} onClick={()=> prop.handleClickMenu()}/>
        <BiHelpCircle style={{cursor:"pointer"}}
          onClick={()=> setIsHelpModalOpen(true)}/>

          { isHelpModalOpen &&
            <ModeloModal isOpen={isHelpModalOpen} 
            titulo="HOW TO PLAY"
            handleClickClose={() => setIsHelpModalOpen(false)}
            footer="A new WORDLE will be available each day!"
            customStyle= {customStylesModalHelp} 
            
            >
              <Container>
                <p>Guess the WORDLE in six tries.</p>
                <p>Each guess must be a valid five-letter word. Hit the enter
                   button to submit.</p>
                <p>After each guess, the color of the tiles will change to show
                   how close your guess was to the word.</p>

                <h3>Exemples</h3>
                <div className="exemples">
                  <div className="linhas">
                    <p> /* Inserir linha com letras especiais */</p>
                    <p>The letter W is in the word and in the correct spot.</p>
                      
                  </div>
                </div>
              </Container>

            </ModeloModal>
          }
        
      </div>
      <Title>Wordle</Title>
      <div>
        <BiBarChartAlt2 />
        <FaCog />
      </div>
    </NavbarStyles>
  )
}

