import { Container } from "./styles"
import { SiNewyorktimes } from "react-icons/si"
import { VscChromeClose } from "react-icons/vsc"
import { GiBee } from "react-icons/gi"
import { MdGridOn } from "react-icons/md"
import { CgCardDiamonds } from "react-icons/cg"
import { SiAcademia } from "react-icons/si"



export default function Sidebar() {


  return (
    <Container>
      <div className="box">
        <div className="icon"><SiNewyorktimes/> </div>
        <div className="text"><h2> Games</h2> </div>
        <div className="close"><VscChromeClose/> </div>
      </div>

      <p className="subtitle">MORE FROM NEW YORK TIMES GAMES</p>

      <div className="corpo">        
        <div className="contentGames">
          <div><GiBee/></div>          
            <a href="https://www.nytimes.com/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
              <div><p>Spelling Bee</p></div>
            </a>

          <div><MdGridOn/></div>
            <a href="https://www.nytimes.com/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
              <div><p>The Crossword</p></div>
            </a>

          <div><CgCardDiamonds/></div>
          <div><p>The Mini</p></div>

          <div></div><p>Gameplay Stories</p><div></div>

          <p>More Games</p>
        </div>

        <div className="contentJornal">
          <SiNewyorktimes /> <p>The New York Times</p>
          <SiNewyorktimes/> <p>The New York Times Cooking</p>
          <SiNewyorktimes/> <p>The New York Times Wirecutter</p>
          <SiAcademia /> <p>The Athletic</p>
        </div>
      </div>

      <div className="footer">
         <p>Privacy Policy</p>
         </div>
      </Container>

      

      
  )
}
