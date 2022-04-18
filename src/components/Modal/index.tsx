import React from 'react'
import Modal from "react-modal"
import {IoClose} from 'react-icons/io5'
import { Container, Footer, Header } from '../Modal/styles'


interface ModalProps{
  titulo: string,
  children: JSX.Element | JSX.Element[],
  handleClickClose: () => void | boolean,
  isOpen: boolean,
  customStyle?: object,
  footer: string,
}

export default function ModeloModal({titulo, children, handleClickClose, isOpen, customStyle, footer}: ModalProps) {
  return (
    <Modal isOpen={isOpen}
    onRequestClose={handleClickClose}
    style={customStyle}

    >
      <Container>
          <IoClose className="botaoFechar"
          style={{cursor:"pointer"}} 
          onClick={handleClickClose} />
        <Header>
          <h4>{titulo}</h4>
        </Header>
          <div>
            {children}
          </div>
       </Container>  
        <Footer>
          <h5>{footer}</h5>
        </Footer>

      </Modal>
  )
}

