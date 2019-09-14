import Dice from "./Dice.js";

export default class Player{
    constructor(name){
        this._name = name;
        this._position = 0;
        this._dice = new Dice(6);
    }

    get name(){
        return this._name;
    }

    get position(){
        return this._position;
    }

    set position(newPosition){
        this._position = newPosition;
    }

    moveAlong(){
        this._position += this._dice.throw();
        return this._position;
    }
}