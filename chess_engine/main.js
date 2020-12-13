
import Board from "./board.js"

class Game{
    constructor(){
        this.turns = 0
        this.chess = new Board()
        this.history = []
        this.chess.update()

    }
    
    // Move from one postiopn to an other
    // Checks that the positions are not the same and that the first one is actually a piece
    move = (pos1, pos2) => {
        let cord_1 =  this.position2cordinater(pos1) 
        let cord_2 =  this.position2cordinater(pos2) 
        let turn = (this.turns%2 == 0) ? "w" : "b"
        if (this.chess.isValidMove(cord_1, cord_2, turn)){
            console.log("TURN:",turn)
            this.chess.doMove(cord_1, cord_2, turn)
            this.turns += 1
        }else{
            console.log("TURN:",turn)
            console.log("Something went wrong")
        }   
    }
    


    // Turns string of format nr-nr to [nr, nr]
    position2cordinater = (pos) => { return [parseInt(pos[0]),parseInt(pos[2])] }


    // TODO: A way to create all DOM elements from JS. Pain in my assholes to do by hand
}




let GAME = new Game()

// Interaction with grid on html page
window.pressed = (clicked_id) => {
    GAME.history.push(clicked_id)
    if (GAME.history.length%2 == 0){
        GAME.move(GAME.history[GAME.history.length-2], GAME.history[GAME.history.length-1])
    }
    
}


