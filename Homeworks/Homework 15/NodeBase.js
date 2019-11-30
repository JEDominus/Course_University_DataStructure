export default class NodeBase{
    constructor(val){
        this._val = val; //Valor del objeto (Operador o numero)
        this._previus = null;     //"Anterior", atriubuto de la lista doble
        this._next = null;        //"Siguiente", atributo de la lista doble
        this._left = null;        //"Izquierda", atributo del arbol
        this._right = null;       //"Derecha", Atributo del Arbol
    }

//METODOS DE LECTURA Y ESCRITURA DE ATRIBUTOS----------------------------------------------------------------------

    get val(){
        return this._val;
    }
    set val(newVal){
        this._val = newVal;
        return this._val;
    }

    get previus(){
        return this._previus;
    }
    set previus(newVal){
        this._previus = newVal;
        return this._previus;
    }

    get next(){
        return this._next;
    }
    set next(newVal){
        this._next = newVal;
        return this._next;
    }

    get left(){
        return this._left;
    }
    set left(newVal){
        this._left = newVal;
        return this._left;
    }

    get right(){
        return this._right;
    }
    set right(newVal){
        this._right = newVal;
        return this._right;
    }
}