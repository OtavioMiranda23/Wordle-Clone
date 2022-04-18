import styled from "styled-components"

export const Container = styled.div`
    div {
        //border: 1px black solid;
        font-size: 14px;
    }
    margin: 0px;
    box-sizing: border-box;
    line-height: 2;
    border-bottom: 1px solid lightgray;
    
    .botaoFechar{
        position: absolute;
        top: 1.2rem;
        right: 1rem;
        font-size: 24px;
    }
`;

export const Header = styled.header`
    //border: 1px green solid;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-bottom: 1rem;
`;

export const Footer = styled.div`
    border-top: 0.1 solid lightgray;
`;

export const LetterHelp = styled.div`
    border: 1px lightgray solid;
`;