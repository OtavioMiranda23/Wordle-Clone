import { Container, Fileira } from "./styles";

export function Keyboard () {
    const fileira1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const fileira2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const fileira3 = ['ENTER','Z', 'X', 'C', 'V', 'B', 'N', 'M', '<X'];
    
    return (
        <Container>
            
            <Fileira>
                { fileira1.map(tecla => <button>{tecla}</button>) }
            </Fileira>

            <Fileira>
                { fileira2.map(tecla => <button>{tecla}</button>) }
            </Fileira>

            <Fileira>
            { fileira3.map(tecla => <button>{tecla}</button>) }
            </Fileira>

        </Container>
       
    )};