import Piece from "./piece.js"
class Pawn extends Piece {
  constructor(color, pos, board){
    super(color,pos, "pawn")
    this.value = 1;
    this.board = board;
    this.round = 0
  }

  moves = () =>{
    let movement_map = []
    if (this.round<=0){
        movement_map = [[1,0], [2,0]]
    }else{
        movement_map = [[1,0]]        
    }
    

    // console.log("Piece_pos:",this.pos, this.board.board[this.y-1][this.x-1])

    if (this.color=="w"){
        // Attack only if other player adjancent to square
        if (typeof this.board.board[this.y-1][this.x-1] !== "string"){
            if (this.board.board[this.y-1][this.x-1].color == "b"){
                movement_map.push([ 1,  1 ])
            }
        }
        if (typeof this.board.board[this.y-1][this.x+1] !== "string"){
            if (this.board.board[this.y-1][this.x+1].color == "b"){
                movement_map.push([ 1,  -1 ])
            }
        }
        return movement_map.map(move =>  [ (this.y - move[0]), (this.x - move[1]) ] )

    }else{
        console.log(typeof this.board.board[this.y+1][this.x-1], typeof this.board.board[this.y+1][this.x+1])
        // Attack only if other player adjancent to square
        if (typeof this.board.board[this.y+1][this.x-1] !== "string"){
            if (this.board.board[this.y+1][this.x-1].color == "w"){
                movement_map.push([ 1,  -1 ])
            }
        }
        if (typeof this.board.board[this.y+1][this.x+1] !== "string"){
            if (this.board.board[this.y+1][this.x+1].color == "w"){
                movement_map.push([ 1,  1 ])
            }
        } 
        return movement_map.map(move =>  [ (this.y + move[0]), (this.x + move[1])] )
    }
    // return map.map(move => [move[0]-this.y, move[1]-this.x])
    
  }


  test() {
    console.log('hello', this.type);
  }
}

export default Pawn;