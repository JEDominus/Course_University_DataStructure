import Articulo from "./Articulos.js";

export default class Inventario{
    constructor(){
        this._primero = null;
        this._ultimo = null;
    }

    get primero(){
        return this._primero;
    }

    set primero(valor){
        this._primero = valor;
        return this._primero;
    }

    get ultimo(){
        return this._ultimo;
    }

    set ultimo(valor){
        this._ultimo = valor;
        return this._ultimo;
    }

    _createFirst(articulo){
        let art = new Articulo(articulo);
        this._primero = art;
        this._ultimo = art;
        console.log(this._primero);
    }

    _createAnother(articulo){
        let art = new Articulo(articulo);
        this._ultimo.siguiente = art;
        this._ultimo = art;
        console.log(this._primero);
    }

    addArticulo(articulo){
        if(this._primero==null){
            this._createFirst(articulo);
        }else{
            this._createAnother(articulo);
        }
    }

    countObjects(){
        let something = this._primero;
        let count = 0;

        if(something == null){
            console.log(count);
            return count;
        }else{
            while(something.siguiente != null){
                something = something.siguiente;
                count++;
            }
        }
        count++;

        //console.log(count); ESTE LINEA MUESTRA EN CONSOLA EL TOTAL DE OBJETOS CREADOS
        return count
    }

    findArticulo(code){
        let something = this._primero;
        let times = this.countObjects();
        let flag = 0;

        for(let i = 0; i <= times; i++){
            if(something == null){
                break
            }else{
                if(something.code == code){
                    flag++;
                    break;
                }
    
                if(something.siguiente != null){
                    something = something.siguiente;
                }else{
                    i = times;
                }
            }
        }

        if(flag == 1){
            console.log("ENCONTRÓ")
            console.log(something);
            return something;
        }else{
            console.log("NO ENCONTRÓ");
            return null;
        }
    }

    delArticulo(code){
        let something = this._primero;
        let o2d = this.findArticulo(code);

        while(something.siguiente != o2d){
            something = something.siguiente
        }

        something.siguiente = o2d.siguiente;
        o2d.siguiente = null;
        console.log(this._primero);
    }

    /*addArticuloV2(articulo,  ultimo){
        if(ultimo.siguiente == null){
            ultimo = articulo;
            console.log(ultimo);
        }else{
            console.log(ultimo);
            this.addArticuloV2(articulo, ultimo.siguiente);
        }
    }*/
}