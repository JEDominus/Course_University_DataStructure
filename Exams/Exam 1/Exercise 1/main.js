document.querySelector("#btnApply").addEventListener("click", aplicar);
let pResult = document.querySelector("#pResult");

function aplicar(){
    let numero = document.querySelector("#iNumber").value;

    for(let i = 0; i<=numero; i++){
        for(let j = 0; j<=numero; j++){
            if(i!==j && j !== 0 && i !== 0 && i == divisores(j) && j == divisores(i)){
                console.log(i + " y " + j);
            }
        }
    }
}

function divisores(numero){
    let sumDiv = 0;

    for(let i=0; i<numero; i++){
        if(numero%i == 0){
            sumDiv+=i;
        }
    }
    return sumDiv;
}