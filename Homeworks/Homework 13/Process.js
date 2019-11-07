export default class Process{
    constructor(/*id*/){
        //this._id = id;
        this._life = this._randomLife();
        this._next = null;
        this._previus = null;
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    get next(){
        return this._next;
    }
    set next(newNext){
        this._next = newNext;
        return this._next;
    }

    get previus(){
        return this._previus;
    }
    set previus(newValue){
        this._previus = newValue;
        return this._previus;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife;
        return this._life;
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    _randomLife(){
        let life = Math.trunc(
            (Math.random()*11+4)
        );
        return life;
    }
}