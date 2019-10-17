import Inventory from "./Inventory.js";

let inventory = new Inventory();
let tableReport = document.querySelector("#tableReport");

document.querySelector("#btnRegister").addEventListener("click", () => {
    let form = document.querySelector("#form");

    if(form.checkValidity() === true){
        let code = document.querySelector("#iCode").value;
        let name = document.querySelector("#iName").value;
        let price = document.querySelector("#iPrice").value;
        let quantity = document.querySelector("#iQuantity").value;
        let description = document.querySelector("#iDescription").value;

        let item  = {
            code: code,
            name: name,
            price: price,
            quantity: quantity,
            description: description
        }

        inventory.createItem(item);
        //Impresion
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

document.querySelector("#btnSearch").addEventListener("click", () =>{
    let search = document.querySelector("#iSearch").value;
    
    inventory.findItem(search);
});

document.querySelector("#btnDelete").addEventListener("click", () =>{
    let search = document.querySelector("#iSearch").value;
    
    inventory.deleteItem(search);
});

document.querySelector("#btnAscendent").addEventListener("click", ascendent);

document.querySelector("#btnDescendent").addEventListener("click", descendent);


function ascendent(){
    let something = inventory.first;
    let times = inventory.countObjects();

    for(let i=1; i <= times; i++){
        console.log(something.code);
        something = something.next;
    }
}

function descendent(){
    let something = inventory.last;
    let times = inventory.countObjects();

    for(let i=1; i <= times; i++){
        console.log(something.code);
        something = something.previus;
    }
}