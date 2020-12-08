const pieces = {
    w_king   :  "&#x2654;", w_queen  :  "&#x2655;", w_rook   :  "&#x2656;", w_bishop :  "&#x2657;", w_knight :  "&#x2658;", w_pawn   :  "&#x2659;",
    b_king   :  "&#x265A;", b_queen  :  "&#x265B;", b_rook   :  "&#x265C;", b_bishop :  "&#x265D;", b_knight :  "&#x265E;", b_pawn   :  "&#9823;"
};

const pieces_position_row = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight","rook" ]

let board = []

let initBoard=()=>{
    for(let y = 0; y<8;y++){
        let row = []
        for (let x = 0; x<8 ;x++){
            if(y==0 || y==7){
                if (y==0){
                    row.push([pieces["b_"+pieces_position_row[x]]])
                }else{
                    row.push([pieces["w_"+pieces_position_row[x]]])
                }
            }else if(y==1 || y==6){
                if (y==1){
                    row.push([pieces["b_pawn"]])
                }else{
                    row.push([pieces["w_pawn"]])
                }
            }
            else{
                row.push([""])
            }
        }
        board.push(row)
    }
    update()
}

let update =  () =>{
    console.log("UPDATE")
    for(let y = 0; y<8;y++){
        for (let x = 0; x<8 ;x++){
            document.getElementById(y+"-"+x).innerHTML = board[y][x];
        }
    }
}

let click_count = new Array();

let pressed=(clicked_id)=>{
    let id = clicked_id;
    let el = document.getElementById(id)

    console.log(clicked_id.length, clicked_id)
    click_count.push("Kiwi");   

      
}

let move =(pos1,pos2)=> {
    console.log(pos1,pos2)
}
initBoard()
console.log("Restart?")
