import Board from "./Board.js";
import Player from "./Player.js";
import Buff from "./Buff.js";

class Game{
    constructor(){
        this.board = new Board();
        this.player = new Player("JE");
        this.buff = new Buff(5, 10);

        document.querySelector("#btnTest").addEventListener("click", () => {
            console.log(this.player.moveAlong());
        });
    }


}

let game = new Game();
game;