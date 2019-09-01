let pResultado = document.querySelector("#pResultado");
let btnCalcular = document.querySelector("#btnCalcular").addEventListener("click", IntroOutput);

function IntroOutput(){
    let iH = document.querySelector("#iIntroHour").value;
    let iM = document.querySelector("#iIntroMinute").value;
    let iS = document.querySelector("#iIntroSecond").value;
    let eH = document.querySelector("#iExitHour").value;
    let eM = document.querySelector("#iExitMinute").value;
    let eS = document.querySelector("#iExitSecond").value;

    if(validate(iH, iM, iS, eH, eM, eS) === 1){
        alert("Inserte datos validos en los campos con el formato establecido");
    }else if(validate(iH, iM, iS, eH, eM, eS) === 0){
        alert("Favor de llenar todos los campos");
    }else if(validate(iH, iM, iS, eH, eM, eS) === 2){
        alert("Registro imposible");
    }else{
        let d = diference(a2s(iH, iM, iS), a2s(eH, eM, eS))
        pResultado.textContent = convert(d);
    }
}

function validate(iH, iM, iS, eH, eM, eS){//Funcion que valida que los datos de los campos sean correctos
    let incomplete = 0;
    let invalid = 1;
    let nope = 2;

    if(iH === "" || iM === "" || iS === "" || eH === "" || eM === "" || eS === ""){
        return incomplete;
    }else if(diference(a2s(iH, iM, iS), a2s(eH, eM, eS)) < 0){
        return nope;
    }else if(iH<0||iH>23){
        return invalid;
    }else if(iM<0||iM>59){
        return invalid;
    }else if(iS<0||iS>59){
        return invalid;
    }else if(eH<0||eH>23){
        return invalid;
    }else if(eM<0||eM>59){
        return invalid;
    }else if(eS<0||eS>59){
        return invalid;
    }else{
        return true;
    }
}

function a2s(h, m, s){
    let hour = h*60*60;
    let minute = m*60;
    let second = Number(s)+Number(hour)+Number(minute);

    return second;
}

function diference(iT, eT){
    let result = eT - iT;
    return result;
}

function convert (number){
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let countSec = 0;
    let countMin = 0;
    let resultado;

    for(let i = 0; i < number; i++){
        countSec++;
        if(countSec < 60){
            seconds = countSec;
        }else{
            countSec = 0;
            seconds = 0;
            countMin++;
            minutes = countMin;
            if(countMin > 59){
                countMin = 0;
                minutes = 0;
                hours++;
            }
        }
    }

    resultado = "Este empleado ha trabajado " + String(hours) + " horas con " + String(minutes) + " minutos y " + String(seconds) + " segundos";
    return resultado;
}

