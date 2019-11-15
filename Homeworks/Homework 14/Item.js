export default class Item{
    constructor(item){
        this._code = item.code;
        this._name = item.name;
        this._price = item.price;
        this._quantity = item.quantity;
        this._description = item.description;
        this._left = null;
        this._right = null;
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

    get left(){
        return this._left;
    }
    set left(newValue){
        this._left = newValue;
        return this._left;
    }

    get right(){
        return this._right;
    }
    set right(newValue){
        this._right = newValue;
        return this._right;
    }
}   