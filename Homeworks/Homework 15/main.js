import Manager from "./Manager.js";

let manager = new Manager();
manager;

document.querySelector("#btnRegister").addEventListener("click", () => {
    let expression = document.querySelector("#iExpression").value;

    manager.stringDestroyer(expression);
});

document.querySelector("#btnClear").addEventListener("click", () => {
    manager.explodeExpression();
});

document.querySelector("#btnCalculate").addEventListener("click", () => {
    manager.treeBuilder();
});