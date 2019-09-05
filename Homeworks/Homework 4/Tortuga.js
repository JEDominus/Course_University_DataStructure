import Corredor from "./corredor.js";
export default class Tortuga extends Corredor{
    constructor(){
        super();
    }

    pasoLento(){
        this._posicion++;
        return this._posicion;
    }

    pasoRapido(){
        this._posicion+=3;
        return this._posicion;
    }

    resvalon(){
        this._posicion-=6;
        
        if(this._posicion<0){
            this._posicion=0;
            return this._posicion;
        }else{   
            return this._posicion;
        }
    }
}