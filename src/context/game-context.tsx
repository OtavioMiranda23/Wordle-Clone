// import { createContext, ReactNode, useState } from "react";

export enum LetterState{
  empty = "EMPTY",
  default = "DEFAULT",
  wrongPos = "WRONG_POS",
  rightPos = "RIGHT_POS",
}

export interface Letter {
  letra: string,
  state: LetterState
}

// export interface GameContext{
//   currWord?: string,

// }

// const GameContext = createContext<GameContext>({});

// export function GameContextProvider({children}:{children:ReactNode[]}){

//   const [ state, setState ] = useState<GameContext>()


//   return(
//     <GameContext.Provider value={{currWord: "ROSEA"}}>
//       {children}
//     </GameContext.Provider>
//   )
// }


/**
 * 
 *  Provavelmente vamos acabar usando esse Context para
 *  armazenar e alterar informação global sobre o jogo (Palavra atual, palavras passadas)
 * 
 *  INFO: Vale a pena dar uma lida sobre a API Context do React!
 * 
 */



