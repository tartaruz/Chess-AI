
class Piece {
    constructor(color, type) {
      this.height = height;
      this.width = width;
    }
  }
// let chess_board = [[P.b_rook, P.b_knight,P.b_bishop,P.b_queen,P.b_king,P.w_rook,P.w_rook,P.w_rook, ], 
// ]
let board = []
function init(){
    for (let y=0; y<8;y++){
        for (let x=0; x<8;x++){
            console.log(x,y)
        }
    }
}



const pieces = {
    w_king   :  "&#x2654;",
    w_queen  :  "&#x2655;",
    w_rook   :  "&#x2656;",
    w_bishop :  "&#x2657;",
    w_knight :  "&#x2658;",
    w_pawn   :  "&#x2659;",
    b_king   :  "&#x265A;",
    b_queen  :  "&#x265B;",
    b_rook   :  "&#x265C;",
    b_bishop :  "&#x265D;",
    b_knight :  "&#x265E;",
    b_pawn   :  "&#9823;"
};