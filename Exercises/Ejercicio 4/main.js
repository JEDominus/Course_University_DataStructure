var pResultado=document.querySelector("#pResultado");//Variable de direccionamiento de impresion de resultado
var btnApply=document.querySelector("#btnApply");//Variable de direccionamiento al boton
btnApply.addEventListener("click", aplicar);//Adicion de una funcion al boton

function aplicar(){//Funcion general que imprime lo resultados que obtenemos de las funciones (Solo impresion)
    let n=document.querySelector("#iNumber1").value; //Variable que galmacena el numero ingresado por el usuario
    let x=document.querySelector("#iNumber2").value; //Variable que le da valor a X
    pResultado.textContent=iterar(n, x); //Impresion del resultado final de toda la serie
    //pResultado.textContent=fact(n) //Prueba de la funcion fact(a)
}

function iterar(n, x){//Funcion que realiza la sumatoria de cada elemento segun el numero de sucesiones daos
    let sum=0;//Variable que almacena el resultado a retornar
    for(let i=0; i<n ; i++){
        sum+=Math.pow(x, i)/fact(i);//Sentencia que se ejecuta el RESTO de las iteraciones hasta llegar a ser <n
    }
    return sum;//Retorno del resultado
}

function fact(a){//Funcion que saca el factorial de un numero "a"
    let total=1;//Variable que almacena el valor del factorial
    for(let i=1; i<=a; i++){//Ciclo encargado de sacar el valor numerico del factorial dado
        total*=i;
    }
    return total;//Retorno del factorial
    
}