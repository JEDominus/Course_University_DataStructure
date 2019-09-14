import Player from "./Player.js";
import Buff from "./Buff.js";

export default class Board{
    constructor(large){
        this._large = large;
        this._playerOne = new Player("Player One");
        this._playerTwo = new Player("Player Two");
    }
}