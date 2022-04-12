import { NavbarStyles, Title } from "./styles"
import { BiHelpCircle } from "react-icons/bi"
import { GrBarChart } from "react-icons/gr"
import { MdMenu } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import { BiBarChartAlt2 } from "react-icons/bi"
import Help from "../Help"
import { useState } from "react"
import Modal from "../Modal"



interface INavbar{
  handleClickMenu: () => void ;
}


export default function Navbar(prop:INavbar) {

  // Adiciona componente Help
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  function closeModal() {
    setIsHelpModalOpen(false);
  }
  return (

    <NavbarStyles>
      <div>
        <MdMenu style={{cursor:"pointer"}} onClick={()=> prop.handleClickMenu()}/>
        <BiHelpCircle 
        onClick={()=> setIsHelpModalOpen(true)}/>
        {
          isHelpModalOpen && 
          <Modal titulo="Help" handleClick={() => setIsHelpModalOpen(false)}>
            <h4>Tópicos de ajuda</h4>
            <h4>Exemplos</h4>
            <p>PILLS</p>
          </Modal>
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

