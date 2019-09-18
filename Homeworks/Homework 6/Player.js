import Dice from "./Dice.js";

export default class Player{
    constructor(name){
        this._name = name;
        this._position = 1;
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

    stringMove(){
        let string = this._name + " se ha movido a la posicion " + this._position;
        return string;
    }

    stringStair(){
        let string = this._name + " ha escalado a la posicion " + this._position;
        return string;
    }

    stringSnake(){
        let string = this._name + " ha resvalado a la posicion " + this._position;
        return string;
    }
}