import { NavbarStyles, Title } from "./styles"
import { MdMenu } from "react-icons/md"
import { BiHelpCircle } from "react-icons/bi"
import { FaCog } from "react-icons/fa"
import { GrBarChart } from "react-icons/gr"

export default function Navbar() {
  return (
    <NavbarStyles>
      <div>
        <MdMenu />
        <BiHelpCircle />
      </div>
      <Title>Wordle</Title>
      <div>
        <GrBarChart />
        <FaCog />
      </div>
    </NavbarStyles>
  )
}


