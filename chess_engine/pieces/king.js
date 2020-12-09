import Piece from "./piece.js"
class King extends Piece {
  constructor(color, pos){
    super(color, "king")
    this.value = 10;
    this.pos = pos
    this.x = null
    this.y = null
    this.getX_Y()
  }
  getX_Y = () =>{
    this.x = parseInt(this.pos.charAt(2))
    this.y = parseInt(this.pos.charAt(0))

  }
  moves = () =>{
    let map = [ [-1,-1], [-1, 0], [-1, 1],
                [ 0,-1],[ 0, 1],
                [ 1,-1],  [1, 0],  [ 1, 1]]
    
    return map.map(pos => [this.y+pos[0],this.x+pos[1]]).filter(move => (( move[0]<=7 && move[1]<=7 ) && ( move[0]>=0 && move[1]>=0 )) )
  }

  test() {
    console.log('hello', this.type);
  }
}

export default King;