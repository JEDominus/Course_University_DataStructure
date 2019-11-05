export default class Process{
    constructor(/*id*/){
        //this._id = id;
        this._life = this._randomLife();
        this._next = null;
    }

//------------------------------------------------------------------------------------------------

    /*get turn(){
        return this._turn;
    }
    set turn(newTurn){
        this._turn = newTurn;
        return this._turn;
    }
   
    get id(){
    return this._id;
    }
    set id(newId){
        this._id = newId;
        return this._id;
    }
*/

    get next(){
        return this._next;
    }
    set next(newNext){
        this._next = newNext;
        return this._next;
    }


    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife;
        return this._life;
    }

//------------------------------------------------------------------------------------------------

    _randomLife(){
        let life = Math.trunc(
            (Math.random()*11+4)
        );
        return life;
    }
}