import { Container, Box, ContentGames, GameLink } from "./styles"
import { SiNewyorktimes } from "react-icons/si"
import { VscChromeClose } from "react-icons/vsc"
import { GiBee } from "react-icons/gi"
import { MdGridOn } from "react-icons/md"
import { CgCardDiamonds } from "react-icons/cg"
import { SiAcademia } from "react-icons/si"


export default function Sidebar() {
  return (
    <Container>
      <Box>
        <div className="icon"><SiNewyorktimes/> </div>
        <div className="text"><h2> Games</h2> </div>
        <div className="close"><VscChromeClose/> </div>
      </Box>

      <p className="subtitle">MORE FROM NEW YORK TIMES GAMES</p>

      <div className="corpo">        
        <ContentGames>
            <GameLink target="_blank" href="https://www.nytimes.com/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
              <GiBee/>
              <p>Spelling Bee</p>
            </GameLink>
            <GameLink target="_blank" href="https://www.nytimes.com/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
              <MdGridOn/>
              <p>The Crossword</p>
            </GameLink>

          <div><CgCardDiamonds/></div>
          <div><p>The Mini</p></div>

          <div></div><p>Gameplay Stories</p><div></div>

          <p>More Games</p>
        </ContentGames>

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
