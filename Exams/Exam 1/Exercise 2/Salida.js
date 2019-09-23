import Ruta from "./Ruta.js";
import Base from "./Base.js";

class Salida{
    constructor(secuencia, ruta, base, horaInicio, horaFin){
        this._secuencia = secuencia;
        this._ruta = new Ruta(ruta); //Objeto local como parametro
        this._base = new Base(base); //Objeto local como parametro
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
    }

    get secuencia(){
        return this._secuencia;
    }

    get ruta(){
        return this._ruta;
    }

    get base(){
        return this._base;
    }

    get horaInicio(){
        return this._horaInicio;
    }

    get horaFin(){
        return this._horaFin;
    }

    set horaInicio(nuevaHora){
        return this._horaInicio = nuevaHora;
    }

    set horaFin(nuevaHora){
        return this._horaFin = nuevaHora;
    }
}