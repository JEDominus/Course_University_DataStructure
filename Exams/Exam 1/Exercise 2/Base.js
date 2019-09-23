export default class Base{
    constructor(nombre, latitud, longitud){
        this._nombre = nombre;
        this._latitud = latitud; //X
        this._longitud = longitud; //Y
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