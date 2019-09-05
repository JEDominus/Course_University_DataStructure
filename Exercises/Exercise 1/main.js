
let pResultado = document.querySelector("#pResultado");
document.querySelector("#btnCalcular").addEventListener("click", evaluar);

function evaluar(){
    n = document.querySelector("#iNumber").value;
    for (var i=1;i<=n;i++){
        if (esPrimo(i)){
            pResultado.textContent += i + ", ";
        }
    }
}

function esPrimo(n){
    var c = 0;
    let i = 1;
    do{
        if(n%i == 0){
            c++;
        }

        i++;
    }while(i <= n);

    console.log(c);

    if(c==2){
        return true;
    }else{
        return false;
    }
}

