import Punto from "./Punto.js";

let btnActualizar1 = document.querySelector("#btnActualizarP1").addEventListener("click", actualizarP1);
let btnActualizar2 = document.querySelector("#btnActualizarP2").addEventListener("click", actualizarP2);
let pPunto1 = document.querySelector("#pPunto1");
let pPunto2 = document.querySelector("#pPunto2");
let pDistancia = document.querySelector("#pDistancia");
let p1 = new Punto("1");
let p2 = new Punto("2");
pPunto1.textContent = p1.toString();
pPunto2.textContent = p2.toString();
p1.cDistancia(p2.posicionX, p2.posicionY);

function actualizarP1(){
    let iAbscisa = document.querySelector("#iXp1").value;
    let iOrdenada = document.querySelector("#iYp1").value;
    p1.posicionX = iAbscisa;
    p1.posicionY = iOrdenada;
    pDistancia.textContent = p1.cDistancia(p2.posicion);

    return pPunto1.textContent = p1.toString();
}

function actualizarP2(){
    let iAbscisa = document.querySelector("#iXp2").value;
    let iOrdenada = document.querySelector("#iYp2").value;
    
    p2.posicionX = iAbscisa;
    p2.posicionY = iOrdenada;
    pDistancia.textContent = p1.cDistancia(p2.posicion);

    return pPunto2.textContent = p2.toString();
}

