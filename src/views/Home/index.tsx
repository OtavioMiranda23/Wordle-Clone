import GameGrid from '../../components/GameGrid';
import { Keyboard } from '../../components/Keyboard';
import Navbar from "../../components/Navbar";
import { Container } from "./styles"

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <GameGrid />
        <Keyboard/>
      </Container>
    </>
  )
}
