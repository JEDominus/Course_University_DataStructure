export default class Ruta{
    constructor(ruta){
        this._nombre = ruta.nombre;
        this._tiempo = ruta.tiempo; //En segundos
    }

    get nombre(){
        return this._nombre;
    }

    get tiempo(){
        return this._tiempo;
    }

    set tiempo(tiempo){
        this._tiempo = tiempo; //Se le asoga el tiempo que va a laborar
    }
}