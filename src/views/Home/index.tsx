import GameGrid from '../../components/GameGrid';
import Navbar from "../../components/Navbar";
import { Container } from "./styles"

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <GameGrid />
      </Container>
    </>
  )
}
