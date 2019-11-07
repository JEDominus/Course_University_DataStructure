import Process from "./Process.js";

export default class Microprocessor{
    contructor(){
        this._queue = null;
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    get queue(){
        return this._queue;
    }
    set queue(newProcess){
        this._queue = newProcess;
        return this._queue;
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    processAll(){
        let proccessSuccesfull = 0;
        let outOfProcess = 0;
        let totalProcess = 0;

        for(let i = 0; i <=300; i++){//300 ciclos del procesador
            let nProcess = this._processPrefab(); //Creacion o no de nuevo proceso al inicio del ciclo

                if(nProcess != null){
                    this._enqueue(nProcess);
                    totalProcess++;
                    
                    console.log(nProcess);
                }

                if(this._queue != null){
                    this._queue.life--;

                    if(this._queue.life == 0){//Posible error
                        this._queue.previus.next = this._queue.next;
                        this._queue.next.previus = this._queue.previus;
                        this._queue = this._queue.next;
                        proccessSuccesfull++;
                    }else{
                        this._queue = this._queue.next;
                    }


                }

                if(this._queue == null){
                    outOfProcess++;
                }
            

        }//Termina for
        
        let ciclesLeft = 0;
        let procesLeft = 0;
        
        let a = this._queue;

        while(a != this._queue.next){//Suma los ciclos faltantes
            ciclesLeft += this._queue.life;
            procesLeft++;
            this._queue = this._queue.next;
        }
        
        console.log(totalProcess + " Procesos creados");
        console.log(proccessSuccesfull + " Procesos completados exitosamente");
        console.log(procesLeft + " Procesos en cola");
        console.log(ciclesLeft + " Ciclos faltantes para completar procesos en cola");
        console.log(outOfProcess + " Ciclos sin procesos que atender");
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    _enqueue(process){//Metodo que mete a la cola y liga los procesos
        if(this._queue == null){
            this._queue = process;
            this._queue.next = process;
            this._queue.previus = process;
        }else{
            let something = this._queue;

            while(something.next != this._queue){
                something = something.next;
            }

            something.next = process;
            this._queue.previus = process;
            process.previus = something;
            process.next = this._queue;
        }
    }

    _processPrefab(){//Generador de procesos
        let prefab = this._probability();

        if(prefab <= 39){
            let process = new Process();
            this._totalProcess++;
            return process;
        }else{
            return;
        }
    }

    _probability(){//Metodo que arroja numero del 1 al 100 aleatoriamente
        let probability = Math.trunc((Math.random()*100+1));
        return probability;
    }
}