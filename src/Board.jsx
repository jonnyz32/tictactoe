
import styles from './board.module.css';
import { useState } from 'react';
import Square from './Square';

function Board() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("X");
    const [gameOver, setIsgameOver] = useState(false);
    const [winner, setWinner] = useState("");

    function isGameOver(board, player) {
        console.log("isgameover Board: ", board);
        if (
        (board[0] === board[1] && board[1] === board[2] && board[2] !== "") ||
        (board[3] === board[4] && board[4] === board[5] && board[5] !== "") ||
        (board[6] === board[7] && board[7] === board[8] && board[8] !== "") ||
        (board[0] === board[3] && board[3] === board[6] && board[6] !== "") ||
        (board[1] === board[4] && board[4] === board[7] && board[7] !== "") ||
        (board[2] === board[5] && board[5] === board[8] && board[8] !== "") ||
        (board[0] === board[4] && board[4] === board[8] && board[8] !== "") ||
        (board[2] === board[4] && board[4] === board[6] && board[6] !== "")) {
            console.log("Game over")
            setIsgameOver(true)
            setWinner(player);
    }
}


    function changePlayer(){
        if (player === "X"){
            setPlayer("O")
        } else {
            setPlayer("X")
        }
        console.log("player", player)
    }

    function assignToSquare(index, player){
        console.log("from assignToSquare, player: ", player)
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);
        console.log("board: ", newBoard);
        isGameOver(newBoard, player);
        changePlayer()

    }

    return (
     <div>
        {gameOver && <h1>Game Over, winner is {winner}</h1>}
        <div className={styles.row}>
            <Square assignToSquare={assignToSquare} index={0} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={1} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={2} player={player} board={board}></Square>
        </div>
        <div className={styles.row}>
            <Square assignToSquare={assignToSquare} index={3} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={4} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={5} player={player} board={board}></Square>
       
        </div> 
        <div className={styles.row}>
            <Square assignToSquare={assignToSquare} index={6} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={7} player={player} board={board}></Square>
            <Square assignToSquare={assignToSquare} index={8} player={player} board={board}></Square>
       
        </div>
       
     </div>
    )
  }
  
  export default Board
  