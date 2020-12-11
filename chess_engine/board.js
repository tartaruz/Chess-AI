import King from "./pieces/king.js"
import Queen from "./pieces/queen.js"


const pieces = {
    w_king: "&#x2654;", w_queen: "&#x2655;", w_rook: "&#x2656;", w_bishop: "&#x2657;", w_knight: "&#x2658;", w_pawn: "&#x2659;",
    b_king: "&#x265A;", b_queen: "&#x265B;", b_rook: "&#x265C;", b_bishop: "&#x265D;", b_knight: "&#x265E;", b_pawn: "&#9823;"
};


class Board {
    constructor(){
        this.pieces_position_row = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
        this.board = []
        this.initBoard()
    }    

    getAllPieces=()=>{ this.board }

    // Returns true if move is legal
    isValidMove = (cord_1, cord_2, turn) => {
        console.log(this.board[cord_1[0]][cord_1[1]].color, turn)
        if (!this.board[cord_1[0]][cord_1[1]]){ 
            return false

        
        }else if (this.board[cord_1[0]][cord_1[1]].color !== turn){
            return false
        }else if (cord_1 == cord_2){
            return false
        }else{
            return true
        }
    }

    // Peforme a move. Has been validated before 4 sure
    doMove = (cord_1, cord_2, turn) => {
        let piece = this.board[cord_1[0]][cord_1[1]]
        this.board[cord_1[0]][cord_1[1]] = []
        this.board[cord_2[0]][cord_2[1]] = piece
        this.update()
    }

    move = (pos, newPos) =>{
        let piece = this.board[pos[0]][pos[1]]
    }

    initBoard = () => {
        for (let y = 0; y < 8; y++) {
            let row = []
            for (let x = 0; x < 8; x++) {
                // if (y == 0 || y == 7) {
                //     if (y == 0) {
                //         row.push([pieces["b_" + this.pieces_position_row[x]]])
                //     } else {
                //         row.push([pieces["w_" + this.pieces_position_row[x]]])
                //     }
                // } else if (y == 1 || y == 6) {
                //     if (y == 1) {
                //         row.push([pieces["b_pawn"]])
                //     } else {
                //         row.push([pieces["w_pawn"]])
                //     }
                // }
                // else {
                //     row.push([""])
                // }
                row.push("")
            }
            this.board.push(row)
        }

        this.board[5][5] = new King("b", "5-5", self)

        this.board[4][4] = new King("w", "4-4", self)

    }
    
    update = () => {
        console.log("UPDATE")
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                document.getElementById(y + "-" + x).innerHTML = this.board[y][x];
            }
        }
    }
    
}

export default Board;