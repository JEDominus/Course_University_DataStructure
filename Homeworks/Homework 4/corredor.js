export default class Corredor{
    constructor(){
        this._posicion=0;
    }

    get posicion(){
        return this._posicion;
    }

    set posicion(val){
        this._posicion = val;
    }

    jugarTurno(){
        let result = Math.trunc((Math.random()*100+1));
        return result;
    }
}