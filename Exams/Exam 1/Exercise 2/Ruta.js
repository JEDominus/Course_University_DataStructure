import Base from "./Base.js";

export default class Ruta{
    constructor(nombre){
        this._nombre = nombre;
        this._tiempo = 0; //En minutos
        this._base1 = new Base("Base 1", 0, 0);
        this._base2 = new Base("Base 2", 100, 100);
        this._base3 = new Base("Base 3", 200, 0);
        this._base4 = new Base("Base 4", 50, -150);
        this._base5 = new Base("Base 5", -50, -150);
    }

    get nombre(){
        return this._nombre;
    }

    get tiempo(){
        return this._tiempo;
    }

    set tiempo(nextBase){
        this._tiempo += nextBase; //Tiempo que demora en llegar a la siguiente base
    }
}