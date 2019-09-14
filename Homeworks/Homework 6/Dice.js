export default class Dice{
    constructor(bases){
        this._bases = bases;
    }

    throw(){
        let number;
        
        number = Math.trunc(
            (Math.random()*this._bases+1)
        );
        return number;
    }
}