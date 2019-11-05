import Process from "./Process.js";

export default class Microprocessor{
    contructor(){
        this._queue = null; //First
        /*this._totalProcess = 0;//Numero de proceso
        this._outOfProcess = 0;//Ciclos sin procesos
        this._proccessSuccesfull = 0;//Procesos completados*/
    }

//------------------------------------------------------------------------------------------------

    get queue(){
        return this._queue;
    }
    set queue(newProcess){
        this._queue = newProcess;
        return this._queue;
    }

    /*get totalProcess(){
        return this._totalProcess;
    }
    set totalProcess(newTotal){
        this._totalProcess = newTotal;
        return this._totalProcess;
    }

    get outOfProcess(){
        return this._outOfProcess;
    }
    set outOfProcess(newValue){
        this._outOfProcess = newValue;
        return this._outOfProcess;
    }

    get proccessSuccesfull(){
        return this._proccessSuccesfull;
    }
    set proccessSuccesfull(newValue){
        this._proccessSuccesfull = newValue;
        return this._proccessSuccesfull;
    }*/

//------------------------------------------------------------------------------------------------

    processAll(){
        let proccessSuccesfull = 0;
        let outOfProcess = 0;
        let totalProcess = 0;

        for(let i = 0; i <=300; i++){//300 ciclos del procesador
            let nProcess = this._processPrefab();//Creacion o no de nuevo proceso al inicio del ciclo

            if(nProcess != null){//Condicional que revisa si se genero o no un proceso y lo encola
                this._enqueue(nProcess);
                totalProcess++;
                console.log(nProcess);
            }

            if(this._queue == null){
                outOfProcess++;
            }

            if(this._queue != null){//Resta un punto de vida al proceso atendido... SI lo hay
                this._queue.life--
            }

            if(this._queue != null && this._queue.life==0){//Condicional que revisa si el proceso fue atendido por completo
                if(this._queue.next != null){    
                    this._queue = this._queue.next;//Le pasa el turno al siguiente proceso
                    proccessSuccesfull++;
                }
            }
        }//Termina for

        let ciclesLeft = 0;
        let procesLeft = 0;

        while(this.queue != null){
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

//------------------------------------------------------------------------------------------------

    _enqueue(process){//Metodo que mete a la cola y liga los procesos
        if(this._queue == null){
            this._queue = process;
        }else{
            let something = this._queue;

            while(something.next != null){
                something = something.next;
            }

            something.next = process;
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