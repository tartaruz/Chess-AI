import Piece from "./piece.js"
class King extends Piece {
  constructor(color, pos, board){
    super(color,pos, "king")
    this.value = 10;
    this.board = board;
  }

  moves = () =>{
    let map = [ [-1,-1], [-1, 0], [-1, 1],
                [ 0,-1],[ 0, 1],
                [ 1,-1],  [1, 0],  [ 1, 1]]
  
      
    
  }


  test() {
    console.log('hello', this.type);
  }
}

export default King;