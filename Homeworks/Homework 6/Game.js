import Board from "./Board.js";
import Player from "./Player.js";
import Buff from "./Buff.js";

document.querySelector("#btnTurn").addEventListener("click", playTurn);
document.querySelector("#btnFullGame").addEventListener("click", playFullGame);

let turn = true;//Juega player 1
let numTurn = 0;
let board = new Board(50);
let player1 = new Player("EN");
let player2 = new Player("JE");        
let buffs = [
    new Buff(1, 10),
    new Buff(2, 10),
    new Buff(3, 10),
    new Buff(4, 10),
    new Buff(5, 10),
    new Buff(6, 10),
    new Buff(10, -10),
    new Buff(20, -10),
    new Buff(30, -10),
    new Buff(40, -10),
    new Buff(50, -10),
    new Buff(60, -10)
];

function playFullGame(){
    while(player1.position<board.large && player2.position<board.large){
        if(turn == true){
            player1.moveAlong();
            console.log(numTurn + " Se jugo el turno de " + player1.name + ". Posicion actual = " + player1.position);
            turn = false;
            numTurn++;
        }else{
            player2.moveAlong();
            console.log(numTurn + " Se jugo el turno de " + player2.name + ". Posicion actual = " + player2.position);
            turn = true;
            numTurn++;
        }
    }
    console.log(gameOver());
}

function playTurn(){
    if(turn == true){
        player1.moveAlong();
        console.log(player1.name + " jugo el turno " + numTurn + ". Posicion actual = " + player1.position);
        turn = false;
        numTurn++;
    }else{
        player2.moveAlong();
        console.log(player2.name + " jugo el turno " + numTurn + ". Posicion actual = " + player2.position);
        turn = true;
        numTurn++;
    }
    
    if(player1.position>=board.large || player2.position>=board.large){
        console.log(gameOver());
    }
}

function gameOver(){
    let w =  winner();
    restartPosition();
    return w;
}

function restartPosition(){
    player1.position = 0;
    player2.position = 0;
    numTurn = 0;
    return;
}

function winner(){
    if(player1.position >= board.large){   
        let p1Winner = "Ganador: " + player1.name;
        return p1Winner;
    }else{
        let p2Winner = "Ganador: " + player2.name;
        return p2Winner;
    }
}

/*checkBuff(){
    if(turn == true){
        if(player1.position == board.findBuff(player1.position)){
            console.log("Buff, nueva posicion = " + player1.position);
            return player1.position;
        }
    }else{
        if(player2.position == board.findBuff(player2.position)){
            player2.position += board.findBuff(player2.position);
            console.log("Buff, nueva posicion = " + player2.position);
            return player2.position;
        }
    }
}*/

/*findBuff(location){
    for(let i = 0; i<=buffs.length; i++){
        if(location == buffs[i]._bPosition){
            return i;
        }
    }
}*/