
import styles from './square.module.css'

function Square(props) {
    console.log("props: ", props)

  return (
    <div className={styles.square} onClick={()=>{props.assignToSquare(props.index, props.player)}}>{props.board[props.index]}</div>
  )
}

export default Square;
