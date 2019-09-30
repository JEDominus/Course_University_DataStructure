import Elevador from "./Elevador.js";

class Main{
    constructor(){
        this._elevador=new Elevador(20, 100);
        let pTotalPisos=document.querySelector("#pTotalPisos");
        let pPisoActual=document.querySelector("#pPisoActual");
        let pPuerta=document.querySelector("#pPuerta");
        let pMensaje=document.querySelector("#pMensaje");

        pTotalPisos.textContent = this._elevador.totalPisos;
        pPisoActual.textContent = this._elevador.pisoActual;
        pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
        pMensaje.textContent = "Beinvenido al elevador";

        document.querySelector("#btnMover").addEventListener("click", () =>{//Mover elevador
            let iPiso = document.querySelector("#iPiso").value;

            if(iPiso==this._elevador._pisoActual){//El elevador ya estaba en ese piso
                pMensaje.textContent = "El elevador ya estaba en el piso " + iPiso;
                return;
            }else if(iPiso>this._elevador.totalPisos){//El elevador ira a un piso mas alto de los totales
                pMensaje.textContent = "Piso inexistente. Numero de pisos totales: del 0 al "+ this._elevador.totalPisos
            }else if(this._elevador.puerta===true){//El elevador no puede moverse con las puertas abiertas
                pMensaje.textContent = "No se puede mover con la puerta abierta, favor de cerrarla";
                return
            }else if(iPiso==""){//No se introdujo un piso
                pMensaje.textContent = "Inserte un numero de piso antes de mover el elvador";
                return
            }else if(iPiso<0){//Se introdujo pisos en valores negativos
                pMensaje.textContent = "Piso no disponible";
                return
            }else{//El elevador se mueve
                this._elevador.pisoActual=iPiso;
                this._elevador.abrirPuerta();//Accion basica de un elevador al llegar a un piso
                this._elevador.cerrarPuerta();//Accion basica de un elevador al llegar a un piso
                pMensaje.textContent = "El elevador se ha movido al piso " + this._elevador.pisoActual;
                pPisoActual.textContent = this._elevador.pisoActual;
                return
            }
        });

        document.querySelector("#btnAbrir").addEventListener("click", () =>{//Abrir puerta
            if(this._elevador.puerta===false){//Se pueden abrir las puertas porque estaba cerradas
                this._elevador.abrirPuerta();
                pMensaje.textContent = "Se ha abierto la puerta";
                pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
                return;
            }else{
                pMensaje.textContent = "La puerta ya estaba abierta";
                return;
            }
        });

        document.querySelector("#btnCerrar").addEventListener("click", () =>{//Cerrar puerta
            if(this._elevador.puerta===true){//Se pueden cerrar las puertas porque estaban abiertas
                this._elevador.cerrarPuerta();
                pMensaje.textContent = "Se ha cerrado la puerta";
                pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
                return;
            }else{
                pMensaje.textContent = "La puerta ya estaba cerrada";
                return;
            }
        });
    }
}

let m = new Main();

