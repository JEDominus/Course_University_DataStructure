export default class Articulo{
    constructor(articulo){
        this._code = articulo.code;
        this._name = articulo.name;
        this._price = articulo.price;
        this._quantity = articulo.quantity;
        this._description = articulo.description;
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

    add2string(){
        let strng1 = "Se registraron " + this._quantity + " " + this._name + " al inventario de la tienda.";
        return strng1;
    }

    search2string(){
        let strng2 = "Se encontraron " + this._quantity + " " + this._name + " en el inventario de la tienda.";
        return strng2;
    }    
    
    del2string(){
        let strng3 = "Se elimino " + this._quantity + " " + this._name + " del inventario de la tienda.";
        return strng3;
    }
}