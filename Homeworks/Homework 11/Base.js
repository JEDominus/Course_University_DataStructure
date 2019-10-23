export default class Base{
    constructor(base){
        this._name = base.name;
        this._minutes = base.minutes;
        this._next = null;
    }

    get name(){
        return this._name;
    }
    
    get minutes(){
        return this._minutes;
    }

    get next(){
        return this._next;
    }
    set next(newNext){
        this._next = newNext;
        return this._next;
    }
}