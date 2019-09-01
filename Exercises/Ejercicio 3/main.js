var pResultado = document.querySelector("#pResultado");
var btnApply = document.querySelector("#btnApply");
btnApply.addEventListener("click", aplicar);

function aplicar(){
    let n = document.querySelector("#iNumber").value; //Variable que galmacena el numero ingresado por el usuario

    pResultado.textContent = iterar(n);
}

function iterar(n){
    let d = 1; //Variable que contiene e incrementa el valor del denominador
    let r = 4; //Variable que almacena e incrementa el valor del resultado
    let s = 0;

    for(var i=1; i <= n; i++){//Este ciclo se repetira el numero de veces que el usuario determine
        if(i%2 === 0){//Esta condicional determina el signo ue se le asigan a la posicion de la operacion
            s -= (r/d);
            d +=2;
        }else{
            s += (r/d);
            d += 2;
        }
    }
    return s;
}

