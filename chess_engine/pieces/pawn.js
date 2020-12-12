import Piece from "./piece.js"
class Pawn extends Piece {
  constructor(color, pos, board){
    super(color,pos, "pawn")
    this.value = 1;
    this.board = board;
  }

  moves = () =>{
    let movement_map = []
    if (this.round<=0){
        movement_map = [[-1,0], [-2,0]]
    }else{
        movement_map = [[-1,0]]        
    }
    this.round +=1
    
    if (this.type=="w"){
        console.log("Moves: ",movement_map.map(move =>  [ (move[0]-this.y ), (move[1]-this.x)  ] ))
        return movement_map.map(move =>  [ (move[0]-this.y ), (move[1]-this.x)  ] )
    }else{ 
        console.log("Moves: ",movement_map.map(move =>  [ (move[0]+this.y ), (move[1]+this.x)  ] ))
        return movement_map.map(move =>  [ (move[0]+this.y ), (move[1]+this.x)  ] )
    }
    // return map.map(move => [move[0]-this.y, move[1]-this.x])
    
  }


  test() {
    console.log('hello', this.type);
  }
}

export default Pawn;