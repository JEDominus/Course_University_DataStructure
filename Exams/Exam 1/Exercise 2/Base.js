export default class Base{
    constructor(base){
        this._nombre = base.nombre;
        this._latitud = base.latitud; //X
        this._longitud = base.longitud; //Y
    }

    get nombre(){
        return this._nombre;
    }

    get latitud(){
        return this._latitud;
    }

    get longitud(){
        return this._longitud;
    }
}