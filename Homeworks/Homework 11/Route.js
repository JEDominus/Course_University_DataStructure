import Base from "./Base.js";

export default class Route{
    constructor(){
        this._first = null;
        this._last = null;
        this._bucket = null;
    }

    get first(){
        return this._first;
    }
    set first(newFirst){
        this._first = newFirst;
        return this._first;
    }

    get last(){
        return this._last;
    }
    set last(newLast){
        this._last = newLast;
        return this._last;
    }

    get bucket(){
        return this._bucket;
    }
    set bucket(newBucket){
        this._bucket = newBucket;
        return this._bucket;
    }

    createBase(base){
        let baseX = new Base(base);

        this._linkBase(baseX);
    }

    findBase(name){
        let something = this._first;
        let times = this._countObjects();
        let flag = 0;

        for(let i = 0; i <= times; i++){
            if(something == null){
                break
            }else{
                if(something.name == name){
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

    deleteBase(name){
        let something = this._first;
        let b2d = this.findBase(name);

        while(something.next != b2d){
            something = something.next
        }

        something.next = b2d.next;
        console.log(this._first);
    }

    _linkBase(base){
        if(this._first == null){
            this._first = base;
            this._last = base;
            this._bucket = base;
            console.log(this._first);
        }else{
            this._bucket.next = base;
            this._bucket = base;
            base.next = this._first;
            console.log(this._first);
        }
    }

    _countObjects(){
        let something = this._first;
        let count = 0;

        if(something == null){
            return count;
        }else{
            while(something.next != this._first){
                something = something.next;
                count++;
            }
        }

        count++;
        return count
    }

    validate(iH, iM, eH, eM){//Funcion que valida que los datos de los campos sean correctos
        let incomplete = 0;
        let invalid = 1;
        let nope = 2;
    
        if(iH === "" || iM === "" || eH === "" || eM === ""){
            return incomplete;
        }else if(this._diference(this.a2m(iH, iM), this.a2m(eH, eM)) < 0){
            return nope;
        }else if(iH<0||iH>23){
            return invalid;
        }else if(iM<0||iM>59){
            return invalid;
        }else if(eH<0||eH>23){
            return invalid;
        }else if(eM<0||eM>59){
            return invalid;
        }else{
            return true;
        }
    }

    a2m(h, m){
        let minute = Number(h)*60;
        let total = Number(m) + Number(minute);
    
        return total;
    }

    _diference(iT, eT){
        let result = Number(eT) - Number(iT);
        result;
        return result;
    }

    startRoute(base, itm, ftm){
        let workTime = this._diference(itm, ftm);
        let someBase = this.findBase(base);

        while(someBase.next.minutes <= workTime){
            console.log(someBase.name);
            console.log(workTime);
            console.log("----------------------");
            workTime -= someBase.minutes;
            someBase = someBase.next;
        }
    }
}