import Board from "./Board.js";
import Player from "./Player.js";
import Buff from "./Buff.js";

class Game{
    constructor(){
        this._turn = true;//Juega player 1
        this._board = new Board();
        this._player1 = new Player("EN");
        this._player2 = new Player("JE");
        this._stairs = [
            this._stair1 = new Buff(1, 10),
            this._stair2 = new Buff(2, 10),
            this._stair3 = new Buff(3, 10),
            this._stair4 = new Buff(4, 10),
            this._stair5 = new Buff(5, 10),
            this._stair6 = new Buff(6, 10)
        ];
        this._snakes = [
            this._snake1 = new Buff(10, -10),
            this._snake2 = new Buff(20, -10),
            this._snake3 = new Buff(30, -10),
            this._snake4 = new Buff(40, -10),
            this._snake5 = new Buff(50, -10),
            this._snake6 = new Buff(60, -10)
        ];

        document.querySelector("#btnTest").addEventListener("click", () => {
            this.playTurn();
        });
    }

    playTurn(){
        if(this._turn == true){
            this._player1.moveAlong();
            console.log("Se jugo el turno de EN. Posicion = " + this._player1.position);
            this._turn = false;
            return this._player1.position;
        }else{
            this._player2.moveAlong();
            console.log("Se jugo el turno de JE. Posicion = " + this._player2.position);
            this._turn = true;
            return this._player2.position;;
        }
    }

    /*checkBuff(){
        if(this._turn == true){
            if(this._player1.position == this._stairs){
                this._player1.position+=this._stairs.position;
                console.log("Cayo escalera, nueva posicion = " + this._player1.position);
            }
            //return this._player1.position;
        }else{
            //return this._player2.position;
        }
    }*/
}

let game = new Game();
game;