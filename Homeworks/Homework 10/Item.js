export default class Item{
    constructor(item){
        this._code = item.code;
        this._name = item.name;
        this._price = item.price;
        this._quantity = item.quantity;
        this._description = item.description;
        this._previus = item.previus;
        this._next = item.next;
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get quantity(){
        return this._quantity;
    }

    get description(){
        return this._description;
    }

    get previus(){
        return this._previus;
    }

    set previus(value){
        this._previus = value;
        return;
    }

    get next(){
        return this._next;
    }

    set next(value){
        this._next = value;
        return;
    }
}   