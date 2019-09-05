import Dado from "./Dado.js";

let btnLanzar = document.querySelector("#btnLanzar")
btnLanzar.addEventListener("click", tirar);
let dado = new Dado();

function tirar(){
    imprimir();
}

function almacenar(){
    let caras = [
        0,
        0,
        0,
        0,
        0,
        0
    ];

    for(let i = 0; i <100; i++){
        let res = dado.lanzar();
        caras[res-1]++;
    }

    return caras;
}

function imprimir(){
    let imp = almacenar();
    for(let i = 0; i < imp.length; i++){
        console.log("El numero " + (i+1) + " ha salido " + imp[i]);
    }
}