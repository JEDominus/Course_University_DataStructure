export default class Buff{
    constructor(bPosition, bEffect){
        this._bPosition = bPosition;
        this._bEffect = bEffect;
    }

    get bPosition(){
        return this._bPosition;
    }

    get bEffect(){
        return this._bEffect;
    }
}