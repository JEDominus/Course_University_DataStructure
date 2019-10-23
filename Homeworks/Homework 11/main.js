import Route from "./Route.js";
let route = new Route();

document.querySelector("#btnRegister").addEventListener("click", () => {
    let form = document.querySelector("#form");

    if(form.checkValidity() === true){
        let name = document.querySelector("#iName").value;
        let minutes = document.querySelector("#iMinutes").value;

        let base  = {
            name: name,
            minutes: minutes
        }

        route.createBase(base);
        //Impresion
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

document.querySelector("#btnSearch").addEventListener("click", () =>{
   /* let search = document.querySelector("#iSearch").value;

    route.findBase(search);*/

    let iH = document.querySelector("#iInitHour").value;
    let iM = document.querySelector("#iInitMinute").value;
    let eH = document.querySelector("#iFinishHour").value;
    let eM = document.querySelector("#iFinishMinute").value;

    //console.log(route.a2m(iH, iM));
    //console.log(route.a2m(eH, eM));
});

document.querySelector("#btnDelete").addEventListener("click", () =>{
    let search = document.querySelector("#iSearch").value;

    route.deleteBase(search);
});

document.querySelector("#btnStart").addEventListener("click", () =>{
    let iH = document.querySelector("#iInitHour").value;
    let iM = document.querySelector("#iInitMinute").value;
    let eH = document.querySelector("#iFinishHour").value;
    let eM = document.querySelector("#iFinishMinute").value;
    let iB = document.querySelector("#iBase").value;

    if(route.validate(iH, iM, eH, eM) === 1){
        alert("Inserte datos validos en los campos con el formato establecido");
    }else if(route.validate(iH, iM, eH, eM) === 0){
        alert("Favor de llenar todos los campos");
    }else if(route.validate(iH, iM, eH, eM) === 2){
        alert("Registro imposible");
    }else{
        route.startRoute(
            iB, 
            route.a2m(iH, iM), 
            route.a2m(eH, eM)
        );
    }
});