import NodeBase from "./NodeBase.js";

export default class Manager{
    constructor(){
        this._first = null; //Lista doble
        this._root = null;  //Arbol
    }

//METODOS DE LECTURA Y ESCRITURA DE ATRIBUTOS----------------------------------------------------------------------

    get first(){
        return this._first;
    }
    set first(newVal){
        this._first = newVal;
        return this._first;
    }

    get root(){
        return this._root;
    }
    set root(newVal){
        this._root = newVal;
        return this._root;
    }

//METODOS DE CREACION Y VINCULACION DE OBJETOS EN LA LISTA CIRCULAR------------------------------------------------

    stringDestroyer(strng){
        for(let i = 0; i<= strng.length-1; i++){
            this._createNodeBase(strng[i]);
            console.log(strng[i]);
        }

        console.log(this._first);
    }

    explodeExpression(){    
        this._first = null;
        this._root = null;
        console.log(this._first);
    }

    _createNodeBase(nodeBase){
        let nodeBaseX = new NodeBase(nodeBase);

        if(this._first == null){
            this._first = nodeBaseX;
        }else{
            this._linkNodeBase(nodeBaseX);
        }
    }

    _linkNodeBase(nodeBase){
        let something = this._first;

        while(something.next != null){
            something = something.next;
        }

        something.next = nodeBase;
        nodeBase.previus = something;
    }

//METODOS DE BUSQUEDA Y LECTURA DEL ARBOL---------------------------------------------------------------------------

    

//INORDER

//POSTORDER

}

