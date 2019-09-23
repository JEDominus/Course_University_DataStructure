import Ruta from "./Ruta.js";

export default class Salida{
    constructor(secuencia, horaInicio, horaFin){
        this._secuencia = secuencia;
        this._rutas = [
            new Ruta(1, 0),
            new Ruta(2, 0),
            new Ruta(3, 0),
            new Ruta(4, 0),
            new Ruta(5, 0),
        ];
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
    }

    get secuencia(){
        return this._secuencia;
    }

    get ruta(){
        return this._rutas;
    }

    get horaInicio(){
        return this._horaInicio;
    }

    get horaFin(){
        return this._horaFin;
    }

    set horaInicio(nuevaHora){ //Modificar el tiempo de inicio a laborar de cada salida de ruta
        return this._horaInicio = nuevaHora;
    }

    set horaFin(nuevaHora){ //Modificar el tiempo de fin a laborar de cada salida de ruta
        return this._horaFin = nuevaHora;
    }
}