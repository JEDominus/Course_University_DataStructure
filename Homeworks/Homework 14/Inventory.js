import Item from "./Item.js";

export default class Inventory{
    constructor(){
        this._root = null;
    }

//-------------------------------------------------------------------------------

    create(item){
        let itemX = new Item(item);

        if(this._root == null){
            this._root = itemX;
            console.log(this._root);
        }else{
            this._add(itemX, this._root);
        }
    }

    _add(newItem, root){//AGREGAR
        if(newItem.code > root.code){
            if(root.right == null){
                root.right = newItem;
                console.log("derecha");
                console.log(this._root);
            }else{
                this._add(newItem, root.right);
            }
        }else{
            if(root.left == null){
                root.left = newItem;
                console.log("izquierda");
                console.log(this._root);
            }else{
                this._add(newItem, root.left);
            }
        }
    }

    search(code){
        this._isTheObject(code, this._root);
    }

    _isTheObject(code, root){//BUSQUEDA
        if(code == root.code){
            console.log("Found");
            console.log(root);
            return root;
        }else{
            if(code > root.code){
                this._isTheObject(code, root.right);
            }else{
                this._isTheObject(code, root.left);
            }
        }
    }

//-------------------------------------------------------------------------------

    inOrder(){
        if(this._root == null){
            return;
        }else{
            return this._inOrder(this._root);
        }
    }

    _inOrder(root){//RETORNO
        if(root == null){
            return;
        }else{
            this._inOrder(root.left);
            console.log(root.code);
            this._inOrder(root.right);
        }
    }

    preOrder(){
        this._preOrder(this._root);
    }

    _preOrder(root){//RETORNO
        if(root == null){
            return;
        }else{
            console.log(root.code);

            this._preOrder(root.left);
            this._preOrder(root.right);
        }
    }

    postOrder(){
        this._postOrder(this._root);
    }

    _postOrder(root){//RETORNO
        if(root == null){
            return;
        }else{
            this._postOrder(root.left);
            this._postOrder(root.right);

            console.log(root.code);
        }
    }

//-------------------------------------------------------------------------------

    get root(){
        return this._root;
    }
    set root(newRoot){
        this._root = newRoot;
        return this._root;
    }
}
