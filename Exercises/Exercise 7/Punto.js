export default class Punto{
    constructor(id){
        this._id=id;
        this._posicionX=0;
        this._posicionY=0;
    }

    get posicionX(){
        return this._posicionX;
    }

    set posicionX(val){
        if(val<=100 && val>=-100){
            this._posicionX = val;
            this._posicionX;
        }else{
            return;
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
            return;
        }
    }

    toStrigng(){
        let result = "(" + this._posicionX + "," + this._posicionY + ")";
        return result;
    }
}