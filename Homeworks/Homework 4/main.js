import Tortuga from "./Tortuga.js";
import Liebre from "./Liebre.js";

var btnComenzar = document.querySelector("#btnComenzar").addEventListener("click", startGame);
var tablaProgreso = document.querySelector("#tablaProgreso");
var pGanador = document.querySelector("#pGanador");
var pCarrera = document.querySelector("#pCarrera");
var carrera = 1;

var tortuga = new Tortuga();
var liebre = new Liebre();

function startGame(){
    reiniciarPosicion();
    tablaProgreso.textContent = "";
    pGanador.textContent = competir();
    pCarrera.textContent = carrera++;
}

function accionLiebre(){
    let saltoPequeño = "Salto Pequeño";
    let saltoGrande = "Salto Grande";
    let dormir = "Dormir";
    let resvalonPequeño = "Resvalon Pequeño";
    let resvalonGrande = "Resvalon Grande";

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
    let resvalon = "Resvalon";

    if(tortuga.jugarTurno()<51){
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

        if(tortuga.posicion>90 && liebre.posicion<91){
            return tortugaGanadora;
        }else if(tortuga.posicion<90 && liebre.posicion>91){
            return liebreGanadora;
        }else if(tortuga.posicion>90 && liebre.posicion>90){
            return empate;
        }
    }while(tortuga.posicion < 91 || liebre.posicion < 91);
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