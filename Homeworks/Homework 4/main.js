import Tortuga from "./Tortuga.js";
import Liebre from "./Liebre.js";

var btnComenzar = document.querySelector("#btnComenzar").addEventListener("click", startGame);//Boton para dar inicio a una carrera
var tablaProgreso = document.querySelector("#tablaProgreso");//Tabla donde se imprime el progreso de la carrera
var pGanador = document.querySelector("#pGanador");//variable de impresion del ganador
var pCarrera = document.querySelector("#pCarrera");//variable de impresion del numero de la carrera
var carrera = 1;//Contador de carreras realizadas

var tortuga = new Tortuga();//Competidor
var liebre = new Liebre();//Competidor

function startGame(){//Aumenta numero de carrea, limpia tabla, reinicia posiciones, comienza con la competicion
    pCarrera.textContent = carrera++;
    tablaProgreso.textContent = "";
    reiniciarPosicion();
    pGanador.textContent = competir();
}

function accionLiebre(){//Ejecuta un metodo de la clase Liebre y retorna la accion en la tabla
    let saltoPequeño = "Salto Pequeño";
    let saltoGrande = "Salto Grande";
    let dormir = "Dormir";
    let resvalonPequeño = "Resbalon Pequeño";
    let resvalonGrande = "Resbalon Grande";

    if(liebre.jugarTurno()<36){
        liebre.saltoPequeño();
        return saltoPequeño;
    }else if(liebre.jugarTurno()>35 && liebre.jugarTurno()<56){
        liebre.saltoGrande();
        return saltoGrande;
    }else if(liebre.jugarTurno()>55 && liebre.jugarTurno()<76){
        liebre.dormir();
        return dormir;
    }else if(liebre.jugarTurno()>75 && liebre.jugarTurno()<91){
        liebre.resvalonPequeño();
        return resvalonPequeño;
    }else{
        liebre.resvalonGrande();
        return resvalonGrande;
    }
}

function accionTortuga(){
    let pasoRapido = "Paso Rapido";
    let pasoLento = "Paso Lento";
    let resvalon = "Resbalon";

    if(tortuga.jugarTurno()<51){//variable
        tortuga.pasoRapido();
        return pasoRapido;
    }else if(tortuga.jugarTurno()>50 && tortuga.jugarTurno()<81){
        tortuga.pasoLento();
        return pasoLento;
    }else{
        tortuga.resvalon();
        return resvalon;
    }
}

function competir(){
    let tortugaGanadora = "Tortuga";
    let liebreGanadora = "Liebre";
    let empate = "Ha ocurrido un empate";

    let i = 1;
    do{
        imprimir(i, accionTortuga(), accionLiebre());

        i++;

    }while(tortuga.posicion < 90 && liebre.posicion < 90);

    if(tortuga.posicion>90 && liebre.posicion<91){
        return tortugaGanadora;
    }else if(tortuga.posicion<90 && liebre.posicion>91){
        return liebreGanadora;
    }else{
        return empate;
    }


}

function reiniciarPosicion(){
    tortuga.posicion=0;
    liebre.posicion=0;
}

function imprimir(i, tortugaAccion, liebreAccion){

    let row = tablaProgreso.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML=i;
    cell2.innerHTML=tortugaAccion;
    cell3.innerHTML=tortuga.posicion;
    cell4.innerHTML=liebreAccion;
    cell5.innerHTML=liebre.posicion;
}