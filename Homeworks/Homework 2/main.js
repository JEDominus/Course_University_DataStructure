import Corredor from "./Corredor.js";
let pResultado=document.querySelector("#pResultado");
let pResultado2=document.querySelector("#pResultado2");
let pResultado3=document.querySelector("#pResultado3");
let btnComenzar=document.querySelector("#btnComenzar");
btnComenzar.addEventListener("click", gunShot);
let runner1=new Corredor("1");
let runner2=new Corredor("2");
let carrera=0;

function gunShot(){
    limpiar();
    pResultado3.textContent="Numero de carreras: " + addCarrera(carrera);
    pResultado.textContent=avanzar();
}

function avanzar(){
    let winRun1="Ganador: Corredor 1";
    let winRun2="Ganador: Corredor 2";
    let draw="Ganador: Ha ocurrido un empate";
    let i= 0;

    do{
        imprimir(i);
        i++;
        runner1.correr();
        runner2.correr();
    }while(runner1.posicion <100 && runner2.posicion <100);

    if(runner1.posicion >= 100 && runner2.posicion>100){
        resPosition();
        return draw;
    }else if(runner1.posicion >= 100){
        resPosition();
        return winRun1;
    }else{
        resPosition();
        return winRun2;
    }
}

function resPosition(){
    runner1.posicion = 0;
    runner2.posicion = 0;
}

function imprimir(i){
    let row=pResultado2.insertRow(-1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);

    cell1.innerHTML=i+1;
    cell2.innerHTML=runner1.posicion;
    cell3.innerHTML=runner2.posicion;
}

function limpiar(){
    pResultado2.innerHTML="";
}

function addCarrera(c){
    c++;
    carrera=c;
    return carrera;   
}