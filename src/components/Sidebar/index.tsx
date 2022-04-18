import { Container, Box, ContentGames, GameLink } from "./styles"
import { SiNewyorktimes } from "react-icons/si"
import { VscChromeClose } from "react-icons/vsc"
import { GiBee } from "react-icons/gi"
import { MdGridOn } from "react-icons/md"
import { CgCardDiamonds } from "react-icons/cg"
import { SiAcademia } from "react-icons/si"
import { MdAutoStories } from "react-icons/md"
import { BiCategoryAlt } from "react-icons/bi"


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

          <GameLink target="_blank" href="https://www.nytimes.com/crosswords/game/mini?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
            <CgCardDiamonds/>
            <p>The Mini</p>
          </GameLink>

          <GameLink target="_blank" href="https://www.nytimes.com/column/wordplay?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
            <MdAutoStories/>
            <p>Gameplay Stories</p>
          </GameLink>
          <GameLink target="_blank" href="https://www.nytimes.com/">
            <BiCategoryAlt/>
            <p>More Games</p>             
          </GameLink>
        
          <GameLink>
            <SiNewyorktimes target="_blank" href="https://www.nytimes.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav"/>
            <p>The New York Times</p>
          </GameLink>
          <GameLink target="_blank" href="https://cooking.nytimes.com/">
            <SiNewyorktimes/>
            <p>The New York Times Cooking</p>
          </GameLink>
          <GameLink target="_blank" href="https://www.nytimes.com/wirecutter/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
            <SiNewyorktimes/>
            <p>The New York Times Wirecutter</p>
          </GameLink>
          <GameLink target="_blank" href="https://theathletic.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav">
            <SiAcademia /> 
            <p>The Athletic</p>
          </GameLink>
        </ContentGames>
      </div>

      <div className="footer">
         <a target="_blank" href="https://www.nytimes.com/privacy/privacy-policy" rel="noreferrer" > Privacy Policy</a>
         </div>
      </Container>

      

      
  )
}
