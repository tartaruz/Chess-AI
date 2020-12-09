import Piece from "./piece.js"
class Queen extends Piece {
  constructor(color, pos){
    super(color, "queen")
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
    let map = []
    for(let x = -7; x < 8; x++){
        map.push([0,x],[x,0],[x,x],[-x,-x],[x,-x],[-x,x])
    }
    return map.map(pos => [this.y+pos[0],this.x+pos[1]]).filter(move => (( move[0]<=7 && move[1]<=7 ) && ( move[0]>=0 && move[1]>=0 && move !== [this.y, this.x])) )
  }
}

    // console.log(map)
export default Queen;
// console.log(map)