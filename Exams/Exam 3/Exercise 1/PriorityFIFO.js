import Nodo from "./Nodo.js";

class PriorityFIFO{
    constructor(){
        this._primero = null;
    }

    agregar(nuevoNodo){
        if(nuevoNodo.priodad == 0){//Agrega cualquier 0 hasta el final de la cola
            let t = this._primero;

            while(t.siguiente!=null){
                t = t.siguiente;
            }

            t.siguiente = nuevoNodo;
        }
        
        if(nuevoNodo.prioridad == 1 && this._primero.prioridad == 0){//nuevo con prioridad 1 sin ningun 1 en toda la lista
            nuevoNodo.siguiente = this._primero;
            this._primero = nuevoNodo;
        }else if(nuevoNodo.prioridad == 1 && this._primero.prioridad == 1){//Nuevo con prioridad 1 y algun 1 en la cola
            let t = this._primero; //El primero es alguno con prioridad uno que no es el nuevo

            while(t.siguiente.prioridad != 0){//Busca entre los elementos con prioridad 1
                t = t.siguiente; //avanza entre los elementos con prioridad 1
            }
            //t es el ultimo elemento de la cola con prioridad 1

            nuevoNodo.siguiente = t.siguiente; //se le asigna al nuevo el siguiente de t
            t.siguiente = nuevoNodo; //se asigna al siguiente del t el nuevo con prioridad 1
        }
    }
}