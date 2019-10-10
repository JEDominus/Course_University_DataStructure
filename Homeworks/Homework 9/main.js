import Inventario from "./Inventario.js";

let inventario = new Inventario();
let pReporte = document.querySelector("#pReport");
let pText = document.querySelector("#pText");
//let pReport = document.querySelector("#pReport");
console.log(inventario.primero);

document.querySelector("#btnRegister").addEventListener("click", () => {
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

        inventario.addArticulo(objArticulo);
        tablePrint(objArticulo);
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

document.querySelector("#btnSearch").addEventListener("click", () => {
    let iSearch = document.querySelector("#iSearch").value;
        let search  = inventario.findArticulo(iSearch);

        if(search!=false){
            pText.textContent = search;
        }else{
            pText.textContent = "No se encontro el articulo";
        }
});

document.querySelector("#btnDelete").addEventListener("click", () => {
    let iSearch = document.querySelector("#iSearch").value;
    inventario.delArticulo(iSearch);
});

document.querySelector("#btnAscendent").addEventListener("click", () => {
    ascendentReport();
});

document.querySelector("#btnDescendent").addEventListener("click", () => {
    descendentReport();
});

function tablePrint(articulo){
    let row = pReporte.insertRow(-1);
    let cellCode = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellPrice = row.insertCell(2);
    let cellQuantity = row.insertCell(3);
    let cellDescription = row.insertCell(4);

    cellCode.innerHTML = articulo.code;
    cellName.innerHTML = articulo.name;
    cellPrice.innerHTML = articulo.price;
    cellQuantity.innerHTML = articulo.quantity;
    cellDescription.innerHTML = articulo.description;   
}

function ascendentReport(){
    let times = inventario.countObjects();
    let something = inventario.primero;

    for(let i = 0; i < times; i++){
        console.log(something);
        something=something.siguiente;
    }
}

function descendentReport(){
    let times = inventario.countObjects();
    let something2 = inventario.ultimo;
    let something1 = inventario.primero;

    console.log(something2);

    for(let i = 0; i <= times; i++){
        if(something1 == something2){
            return;
        }else{
            while(something1.siguiente != something2){
                something1 = something1.siguiente
            }
    
            something2 = something1;
            something1 = inventario.primero;
        }
        console.log(something2);
    }
}