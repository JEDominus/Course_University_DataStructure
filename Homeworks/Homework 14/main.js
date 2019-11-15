import Inventory from "./Inventory.js";

let inventory = new Inventory();

document.querySelector("#btnRegister").addEventListener("click", () => {
    let form = document.querySelector("#form");

    if(form.checkValidity() === true){
        let code = document.querySelector("#iCode").value;
        let name = document.querySelector("#iName").value;
        let price = document.querySelector("#iPrice").value;
        let quantity = document.querySelector("#iQuantity").value;
        let description = document.querySelector("#iDescription").value;

        let objItem = {
            code: code,
            name: name,
            price: price,
            quantity: quantity,
            description: description
        }

        inventory.create(objItem);
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

document.querySelector("#btnInOrder").addEventListener("click", () =>{
    inventory.inOrder();
});

document.querySelector("#btnPreOrder").addEventListener("click", () =>{
    inventory.preOrder();
});

document.querySelector("#btnPostOrder").addEventListener("click", () =>{
    inventory.postOrder();
});

document.querySelector("#btnSearch").addEventListener("click", () =>{
    let iSearch = document.querySelector("#iSearch").value;

    inventory.search(iSearch);
});