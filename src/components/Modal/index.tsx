import React from 'react'

interface ModalProps{
  titulo: string,
  children: JSX.Element | JSX.Element[],
  handleClick: () => void
}

export default function Modal({titulo, children, handleClick}: ModalProps) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div>
        {children}
      </div>
      <button onClick={handleClick}>Ok</button>
    </div>
  )
}

