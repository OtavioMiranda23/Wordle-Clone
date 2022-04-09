import { NavbarStyles, Title } from "./styles"
import { BiHelpCircle } from "react-icons/bi"
import { GrBarChart } from "react-icons/gr"
import { MdMenu } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import { BiBarChartAlt2 } from "react-icons/bi"
import { useState } from "react"
import Sidebar from "../Sidebar"


interface INavbar{
  handleClick: () => void;
}


export default function Navbar(prop:INavbar) {
  return (

    <NavbarStyles>
      <div>
        <MdMenu onClick={()=> prop.handleClick()}/>        
        <BiHelpCircle />
      </div>
      <Title>Wordle</Title>
      <div>
        <BiBarChartAlt2 />
        <FaCog />
      </div>
    </NavbarStyles>
  )
}


