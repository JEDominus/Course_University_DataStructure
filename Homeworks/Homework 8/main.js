import Articulo from "./Articulo.js";

let pText = document.querySelector("#pText");
let pReport = document.querySelector("#pReport");
let articulos = new Array(20);
console.log(articulos);

//ENTRADA Y SALIDA-----------------------------------------------------------------------

document.querySelector("#btnRegister").addEventListener("click", () => {
    //console.log(articulos[19]);
    let form = document.querySelector("#form");

    if(form.checkValidity() === true){
        let code = document.querySelector("#iCode").value;
        let name = document.querySelector("#iName").value;
        let price = document.querySelector("#iPrice").value;
        let quantity = document.querySelector("#iQuantity").value;
        let description = document.querySelector("#iDescription").value;

        let objArticulo = {
            code: code,
            name: name,
            price: price,
            quantity: quantity,
            description: description
        }

        let articulo = new Articulo(objArticulo);
        addArticulo(articulo);
        sortTheArray();
        pText.textContent = articulo.add2string();
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

//Busqueda e impresion de articulo
/*document.querySelector("#btnSearch").addEventListener("click", () =>{
    let srch = document.querySelector("#iSearch").value;

    for(let i = 0; i <= articulos.lenght; i++){
        if(srch == articulos[i].code){
            pText.textContent = articulos[i].search2string();
        }else{
            alert("Articulo no encontrado");
        }
    }
});*/

//FUNCIONAL----------------------------------------------------------------------------------------------

function addArticulo(articulo){
    if(findArticulo(articulo.code) >= 0){
        alert("Error, este articulo ya ha sido registrado");//Cambiar a la caja e tecto debajo del apartado de buscar para impriimir dicha alerta
    }else{
        let objArticulo = {
            code: articulo.code,
            name: articulo.name,
            price: articulo.price,
            quantity: articulo.quantity,
            description: articulo.description
        }
        add2table(articulo);
        add2array(objArticulo);//AQUIIIIIIIIIIIIIIIIIIIIII
        console.log(articulos);
    }
}

function findArticulo(code){//.indexOf
    /*let result = -1;

    for(let i = 0; i<21; i++){
        if(articulos[i] == code){
            result = i;
        }
    }

    return result;*/

    let result = -1;
    articulos.forEach((articulo, index) => {
        if(articulo.code == code){
            result = index;
            return;
        }
    });
    return result;
}

function add2array(articulo){//.push 
    for(let i = 0; i<20; i++){
        if(articulos[i] == undefined){
            articulos[i] = articulo;
            return
        }
    }
    console.log(articulos);
}



function sortTheArray(){//.sort
    let cup;

    for(let i = 0; i<20; i++){
        if(Number(articulos[i].code) > Number(articulos[i+1].code)){
            console.log("Ya ordeno");
            cup = articulos[i];
            articulos[i] = articulos[i+1];
            articulos[i+1] = cup;
            sortTheArray();
        }
    }
    console.log(articulos);
}

function delFromArray(pos){
    let dArray = new Array(20);
    articulos.splice(pos, 1);

    for(let i = 0; i<20 ; i++){
        if(articulos[i] !== undefined){
            dArray[i] = articulos[i];
        }
    }
    articulos = dArray;
    console.log(articulos);
    return articulos;
}

//GRAFICO-----------------------------------------------------------------------------------------------

function add2table(articulo){
    let row = pReport.insertRow(-1);
    let cellCode = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellPrice = row.insertCell(2);
    let cellQuantity = row.insertCell(3);
    let cellDescription = row.insertCell(4);
    row.insertCell(5);

    cellCode.innerHTML = articulo.code;
    cellName.innerHTML = articulo.name;
    cellPrice.innerHTML = articulo.price;
    cellQuantity.innerHTML = articulo.quantity;
    cellDescription.innerHTML = articulo.description;
    addButtonDelete(row, articulo);
}

function addButtonDelete(row, articulo){
    let btnDelete = document.createElement("input");
    btnDelete.value = "Eliminar";
    btnDelete.type = "button";
    btnDelete.className = "btn btn-danger";
    btnDelete.id = "btnDelete";
    btnDelete.addEventListener("click", () => {
        delArticulo(row, articulo);
    });
    
    row.cells[5].innerHTML = "";
    row.cells[5].appendChild(btnDelete);
}

function delArticulo(row, articulo){
    let pos = findArticulo(articulo.code);
    delFromArray(pos);
    pText.textContent = articulo.del2string();
    row.remove();
}