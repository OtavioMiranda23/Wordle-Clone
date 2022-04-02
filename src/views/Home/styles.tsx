import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 51px);
  /* 
    A funçao 'calc' serve pra que o css
    consiga calcular valores a partir de medidas dinâmicas

    Nesse caso, a medida vh é equivalente às dimensões de
    altura da tela (vh = viewport height)

    Assim, estou estipulando que o esse componente <main>
    deve ocupar toda a altura da tela (100vh) menos
    os 51px de altura da nossa Navbar
  */
`;