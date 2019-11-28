export default class Nodo{
    constructor(dato, prioridad, siguiente){
        this._dato = dato;
        this._prioridad = prioridad;
        this._siguiente = siguiente;
    }

    get dato(){
        return this._dato;
    }
    set dato(newDato){
        this._dato = newDato;
        return this._dato;
    }

    get prioridad(){
        return this._prioridad;
    }
    set prioridad(newPrio){
        this._prioridad = newPrio;
        return this._prioridad;
    }

    get siguiente(){
        return this._siguiente;
    }
    set siguiente(newSig){
        this._siguiente = newSig;
        return this._siguiente;
    }
}