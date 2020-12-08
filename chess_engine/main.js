import {King} from "./pieces/king" 
let board = []
function setup(){
    for (let y=0; y<8;y++){
        let row = []
        for (let x=0; x<8;x++){
            if(y==0){
                p = new King("w")
                row.push(p)
            }else{
                row.push([])
            }
        }
        board.push(row)
    }
}

// function board_show(){
//     for (let y=0; y<8;y++){
//         let row = []
//         for (let x=0; x<8;x++){
//             if(y==0){
//                 p = new 
//                 row.push(p)
//             }else{
//                 row.push([])
//             }
//         }
//         board.push(row)
//     }
// }

// function init(){

// }

setup()
