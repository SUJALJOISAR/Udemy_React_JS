import { useState} from "react";

const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onSelectSquare,turns}){

    // const [gameBoard,setgameBoard] =useState(initialBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setgameBoard((prevGameBoard)=>{  
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare(); 
    // }

    let gameBoard=initialBoard;

    for(const turn of turns){
      const {square,player}=turn;
      const {row,col}=square;

      gameBoard[row][col]=player;
    }


    return(
        <ol id="game-board">
          {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {/* {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)} */}
                {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button></li>)}
            </ol>
          </li>)}
        
        </ol>
    );
}