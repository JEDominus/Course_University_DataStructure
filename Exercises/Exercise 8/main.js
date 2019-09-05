import Punto from "./Punto.js";

let btnCrear = document.querySelector("#btnCrear").addEventListener("click", recolectar);
let btnDistancia = document.querySelector("#btnDistancia").addEventListener("click", mostrar);
let pDistancia = document.querySelector("#pDistancia");
let puntos = [];

function recolectar(){
    let abscisa = document.querySelector("#iX").value;
    let ordenada = document.querySelector("#iY").value;
    crear(
        Number(abscisa),
        Number(ordenada)
    );
}

function crear(x,y){
    let punto = new Punto(
        x, 
        y
    );

  puntos.push(punto);
    console.log(puntos);
}

function medir(){
    let distancia = 0; 

    for(let i = 0;i<puntos.length -1;i++){
        distancia += puntos[i].cDistancia(puntos[i+1]);
    }

    return distancia;
}

function mostrar(){
    pDistancia.textContent=medir();
}