var pResultado = document.querySelector("#pResultado");
var btnUp = document.querySelector("#btnUp");
btnUp.addEventListener("click", aplicar);

function aplicar(){
    var n = document.querySelector("#iNumber").value;

    aumentar(n);
}

function aumentar(n){
    if(n <= 1000){
        n = Number(n) + (Number(n)/Number(100))*Number(15);
        pResultado.textContent = n +  ", Se aplico un aumento del 15%";
    }else if(n <= 1200 && n >= 1001){
        n = Number(n) + (Number(n)/Number(100))*Number(12);
        pResultado.textContent = n +  ", Se aplico un aumento del 12%";
    }else if(n <= 1400 && n >= 1201){
        n = Number(n) + (Number(n)/Number(100))*Number(10);
        pResultado.textContent = n +  ", Se aplico un aumento del 10%";
    }else if(n <= 1500 && n >= 1401){
        n = Number(n) + (Number(n)/Number(100))*Number(8);
        pResultado.textContent = n +  ", Se aplico un aumento del 8%";
    }else if(n >= 1501){
        n = Number(n) + (Number(n)/Number(100))*Number(5);
        pResultado.textContent = n +  ", Se aplico un aumento del 5%";
    }
}