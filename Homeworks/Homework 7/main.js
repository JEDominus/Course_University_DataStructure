import Articulo from "./Articulo.js";

let pText = document.querySelector("#pText");
let pReport = document.querySelector("#pReport");
let articulos = [];

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

        let articulo = new Articulo(objArticulo);
        addArticulo(articulo);
        pText.textContent = articulo.add2string();
    }form.classList.add("was-validated");

    if(form.checkValidity() === false){
        alert("Favor de llenar todos los campos con datos correctos");
    }
});

document.querySelector("#btnSearch").addEventListener("click", () =>{
    let srch = document.querySelector("#iSearch").value;

    for(let i = 0; i <= articulos.lenght; i++){
        if(srch == articulos[i].code){
            pText.textContent = articulos[i].search2string();
        }else{
            alert("Articulo no encontrado");
        }
    }
});

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
        articulos.push(objArticulo);
        console.log(articulos);
    }
}

function findArticulo(code){
    let result = -1;
    articulos.forEach((articulo, index) => {
        if (articulo.code === code) {
            result = index;
            return;
        }
    });
    return result;
}

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
    articulos.splice(pos, 1);
    pText.textContent = articulo.del2string();
    row.remove();
}