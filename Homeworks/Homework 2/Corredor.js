export default class Corredor{
    constructor(nCorredor){
        this._nCorredor=nCorredor;
        this.posicion=99;
    }

    correr(){
        let distancia=Math.trunc((Math.random()*6+1));

        if(distancia===1){
            this.posicion+=3;
        }else if(distancia===2 ||distancia===3 ||distancia===4){
            this.posicion+=2;
        }else{
            this.posicion+=1;
        }
        
        return this.posicion;
    }
}