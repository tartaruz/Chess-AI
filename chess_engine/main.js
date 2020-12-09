
import Board from "./board.js"

let board = new Board()
board.update()


let history = []
// let pressed = (clicked_id) => {
//     history.push(clicked_id)
//     if (history.length % 2 == 0) {
//         let movement = history.slice(history.length - 2, history.length + 1)
//         move(movement[0], movement[1])
//     }
//     // let id = clicked_id;
//     // let el = document.getElementById(id)
//     // console.log(clicked_id.length, clicked_id)
//     // click_count.push("Kiwi");   
//     // console.log(clicked_id, typeof clicked_id
// }

window.pressed = (clicked_id) => {

    let pos_y = parseInt(clicked_id.charAt(0))
    let pos_x = parseInt(clicked_id.charAt(2))
    if (board.board[pos_y][pos_x]){
        let p = board.board[pos_y][pos_x]
        console.log(p.moves().filter(move => {
            let squre = board.board[move[0]][move[1]]
            if (squre.color !==p.color){
                document.getElementById(move[0]+"-"+move[1]).style.background = "green"
                return move
            }
        }))
    }
}


let move = (pos1, pos2) => {
    let movePiece = board[parseInt(pos1.charAt(0))][parseInt(pos1.charAt(2))]
    console.log(movePiece[0].length, movePiece)

    if (movePiece[0].length !== 0 && pos1!==pos2) {
        board[parseInt(pos1.charAt(0))][parseInt(pos1.charAt(2))] = ""
        board[parseInt(pos2.charAt(0))][parseInt(pos2.charAt(2))] = movePiece
    }else{
        console.log("invalid")
    }


}

// board.initBoard()

