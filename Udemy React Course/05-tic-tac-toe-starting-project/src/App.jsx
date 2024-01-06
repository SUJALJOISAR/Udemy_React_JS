import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer= 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X' ){
  currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  const [players,setPlayers] = useState({
    'X':'Player 1',
    'O':'Player 2'
  });

//  const [hasWinner,setWinner] = useState(false);
 const [gameTurns,setGameTurns] =useState([]);

// const [activePlayer,setactivePlayer] = useState('X');//let intial value of state variable be 'X'

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard=[...initialBoard.map(array => [...array])];

  for(const turn of gameTurns){
    const {square,player}=turn;
    const {row,col}=square;

    gameBoard[row][col]=player;
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol= gameBoard[combination[2].row][combination[2].column];
  
   if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
    winner = players[firstSquareSymbol];
   }
  } 

  const hasDraw= gameTurns.length === 9 && !winner;

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
      player : currentPlayer
    },
      ...prevTurns]

      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }
 
  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers =>{
      return{
        ...prevPlayers,
        [symbol]: newName
      }; 
    });
  }

  return (
    <main>
      <div id="game-container">
      {/* Players */}
      <ol id='players' className="highlight-player">
        <Player Intialname="Player-1" symbol="X" isActive={activePlayer === 'X'} onChangename={handlePlayerNameChange}/>
        <Player Intialname="Player-2" symbol="O" isActive={activePlayer === 'O'} onChangename={handlePlayerNameChange}/>
      </ol>

    { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}

      {/* Game Board */}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      {/*  Log */}
      <Log turns={gameTurns}/>
    </main>
   
  );
}

export default App;
