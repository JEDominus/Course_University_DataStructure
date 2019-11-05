import Microprocessor from "./Microprocessor.js";

let microprocessor = new Microprocessor();

document.querySelector("#btnProcesar").addEventListener("click", () =>{
    microprocessor.processAll();
});