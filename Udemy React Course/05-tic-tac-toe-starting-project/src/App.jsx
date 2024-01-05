import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

function deriveActivePlayer(gameTurns){
  let currentPlayer= 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X' ){
  currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

 const [hasWinner,setWinner] = useState(false);
 const [gameTurns,setGameTurns] =useState([]);

// const [activePlayer,setactivePlayer] = useState('X');//let intial value of state variable be 'X'

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex,colIndex){
    // setactivePlayer((curActivePlayer)=>curActivePlayer==='X' ? 'O' : 'X');//as it depends state updation depends upon previous state value,we cannot directly update it 
    setGameTurns(prevTurns => {

      // let currentPlayer= 'X';

      // if(prevTurns.length > 0 && prevTurns[0].player === 'X' ){
      //   currentPlayer = 'O';
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);


    const updatedTurns = [
    {
      square: {row:rowIndex , col:colIndex},
      player : activePlayer
    },
      ...prevTurns]

      return updatedTurns;
    });
  }


  return (
    <main>
      <div id="game-container">
      {/* Players */}
      <ol id='players' className="highlight-player">
        <Player Intialname="Player-1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player Intialname="Player-2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>

      {/* Game Board */}
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      {/*  Log */}
      <Log turns={gameTurns}/>
    </main>
   
  );
}

export default App;
