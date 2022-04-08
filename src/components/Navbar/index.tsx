import { NavbarStyles, Title } from "./styles"
import { BiHelpCircle } from "react-icons/bi"
import { GrBarChart } from "react-icons/gr"
import { MdMenu } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import { BiBarChartAlt2 } from "react-icons/bi"


export default function Navbar() {
  
  return (
    <NavbarStyles>
      <div>
        <MdMenu/>
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


