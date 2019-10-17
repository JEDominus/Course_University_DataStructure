import Item from "./Item.js";

export default class Inventory{
    constructor(){
        this._first = null;
        this._last = null;
    }

    get first(){
        return this._first;
    }

    get last(){
        return this._last;
    }

    createItem(item){
        let itemX = new Item(item);

        this._linkItem(itemX);
    }

    _linkItem(item){
        if(this._first == null){
            this._first = item;
            this._last = item;
            console.log("1");
            console.log(this._first);
        }else{
            this._findPosition(item);
        }
    }

    _findPosition(item){
        let something = this._first;
        let times = this.countObjects();

        /*while(something.code < item.code){
            if(stop<=times){
                return
            }else{
                something = something.next;
                stop++;
            }
        }*/

        for(let i = 1; i <=times; i++){
            if(item.code>something.code && something.next!=null){//No ha encontrado su posicion
                something = something.next;
            }else{//Su posicion es la ultima
                if(item.code>something.code){
                    something.next = item;
                    item.previus = something;
                    this._last = item;
                    console.log("2");
                    console.log(this._first);
                    return
                }else{
                    item.previus = something.previus;
                    something.previus = item;
                    item.next = something;
                    item.previus.next = item;
                    console.log("3");
                    console.log(this._first);
                    return
                }
            }
        }
    }

    countObjects(){
        let something = this._first;
        let count = 0;

        if(something == null){
            return count;
        }else{
            while(something.next != null){
                something = something.next;
                count++;
            }
        }

        count++;
        return count
    }

    findItem(code){
        let something = this._first;
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
    
                if(something.next != null){
                    something = something.next;
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

    deleteItem(code){
        let something = this._first;
        let i2d = this.findItem(code);

        while(something.next != i2d){
            something = something.next
        }

        something.next = i2d.next;
        i2d.next.previus = something;
        console.log(this._primero);
    }
}