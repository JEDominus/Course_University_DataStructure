export default class Punto{
    constructor(posicionX, posicionY){
        this._posicionX=posicionX;
        this._posicionY=posicionY;
    }

    get id(){
        return this._id
    }

    get posicionX(){
        return this._posicionX;
    }

    set posicionX(val){
        if(val<=100 && val>=-100){
            this._posicionX = val;
            return this._posicionX;
        }else{
            return this._posicionX;
        }
    }

    get posicionY(){
        return this._posicionY;
    }

    set posicionY(val){
        if(val<=100 && val>=-100){
            this._posicionY = val;
            return this._posicionY;
        }else{
            return this._posicionY;
        }
    }

    toString(){
        let result = "Posicion actual del punto "+ this._id + ": " + "(" + this._posicionX + "," + this._posicionY + ")";
        return result;
    }

    cDistancia(punto){
        let result = Math.sqrt(
           Math.pow(
               (Number(punto.posicionX) - Number(this._posicionX)), 2
            ) + Math.pow(
               (Number(punto.posicionY) - Number(this._posicionY)), 2
            )
        );
        return result;
    }
}