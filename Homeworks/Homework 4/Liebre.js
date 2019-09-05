import Corredor from "./corredor.js";
export default class Liebre extends Corredor{
    constructor(){
        super();
    }

    saltoPequeño(){
        this._posicion++;
        return this._posicion;
    }

    saltoGrande(){
        this._posicion+=9;
        return this._posicion;
    }

    resvalonPequeño(){
        this._posicion-=2;

        if(this._posicion<0){
            this._posicion=0;
            return this._posicion;
        }else{   
            return this._posicion;
        }
    }

    resvalonGrande(){
        this._posicion-=12;
        
        if(this._posicion<0){
            this._posicion=0;
            return this._posicion;
        }else{   
            return this._posicion;
        }
    }

    dormir(){
        return this._posicion;
    }
}