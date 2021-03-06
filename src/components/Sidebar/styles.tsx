import styled from "styled-components";


export const Box = styled.div`
  //border: 1px magenta solid;
  display: flex;
  align-items: center;
  margin: 1rem;
  padding-bottom: 1rem ;

`;

export const GameLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  //border: 1px solid magenta;
  padding: 0.5rem 1rem;
  z-index: 10;
  transition: all 100ms ease;

  &:hover{
    background-color: rgba(100, 100, 100, 0.1);
    transition: all 100ms ease;
  }
`;

export const ContentGames = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  & :nth-child(5) {
    border-bottom: 1px solid lightgray;
  }
  
`;

export const Container = styled.div`
  //border: 1px magenta solid;

  position: absolute;
  height: calc(100vh - 51px);
  width: 20vw;
  left: 0px;
  top:51px;
  

  box-shadow: 0.1px 15px 10px rgba(148, 148, 148, 0.582);

  .box {
    //border: 1px magenta solid;
    display: flex;
    align-items: center;
    margin: 1rem;
    padding-bottom: 1rem ;


    
  }

  a {
    //border: 1px magenta solid;
    text-decoration: none;
    color: inherit;

  }

  .icon {
    //border: 1px magenta solid;
    font-size: 18px;
    left: 10px;
    border-right: 1px gray solid;
  }
  
  .text {
    //border: 1px magenta solid;
    margin-left: 5px;
    flex-grow: 2;
    font-size: 13px;
    font-family: 'Suez One', times, serif;



  }

  .close {
    font-size: 20px;
  }

  .subtitle {
    margin: 1rem;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 1rem ;
  }

  .contentGames {
    //border: 1px magenta solid;
    display: grid;
    grid-template-columns: minmax(1rem, 1.5rem) 1fr ;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid lightgray ;
    align-items: center;


  }

  .contentJornal {
    //border: 1px magenta solid;
    display: grid;
    margin-top: 1rem;
    grid-template-columns: minmax(1rem, 1.5rem) 1fr ;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 8px;
    border-bottom: 1px solid lightgray ;
    align-items: center;
    grid-row-gap: 1rem;



  }



  .corpo {
    //border: 1px magenta solid;
    /* margin: 1rem; */


  } 

  .footer {
    border-top: 1px solid lightgray ;
    //height: 45vh;
    position: absolute;
    width: 18vw;
    bottom: 0;
    height: 3rem;
    margin-left: 1rem;

    &> * {
      //border: 1px magenta solid;
      position: relative;
      text-align: left;
      top:25%;
      width: 50%;
      
    }
    
  }

  div > p {
    //border: 1px magenta solid;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  `;