const pieces = {
  w_king   :  "&#x2654;", w_queen  :  "&#x2655;", w_rook   :  "&#x2656;", w_bishop :  "&#x2657;", w_knight :  "&#x2658;", w_pawn   :  "&#x2659;",
  b_king   :  "&#x265A;", b_queen  :  "&#x265B;", b_rook   :  "&#x265C;", b_bishop :  "&#x265D;", b_knight :  "&#x265E;", b_pawn   :  "&#9823;"
};
const pieces_position_row = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight","rook" ]

class Piece {
    constructor(color, type) {
      this.color = color;
      this.type = type;
      this.symbol = pieces[this.color+"_"+this.type]

    }
    toString=()=> this.symbol;
}


export default Piece;