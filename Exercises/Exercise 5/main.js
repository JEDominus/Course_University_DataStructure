let pResult = document.querySelector("#pResultado");
let btnScan = document.querySelector("#btnScan").addEventListener("click", escanear);

function escanear(){//Funcion de entrada y salida de datos
    let numero = document.querySelector("#iNumber").value;
    pResult.textContent = esPerfecto(numero);
}

function esPerfecto(numero){//Funcion que evalua si el numero es perfecto o no
    if(sumatoria(numero) == numero){
        return true;
    }else{
        return false;
    }
}

function sumatoria(numero){//Funcion que suma los divisores
    let sumDiv = 0;

    for(let i=0; i<numero; i++){
        if(numero%i == 0){
            sumDiv+=i;
            console.log(sumDiv);
        }
    }
    return sumDiv;
}