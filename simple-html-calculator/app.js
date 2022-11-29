const add = document.getElementById("add");
const sub = document.getElementById("sub");
const multiply = document.getElementById("multiply");

const addForm = document.add;
const subForm = document.subtract;
const multForm = document.multiply;

const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const multButton = document.getElementById("multiplyButton");

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let additionResult = Number(addForm.firstNumberAdd.value) + Number(addForm.secondNumberAdd.value);
    addForm.addResult.value = additionResult;
})

subForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let subResult = Number(subForm.firstNumberSub.value) - Number(subForm.secondNumberSub.value);
    subForm.subResult.value = subResult;
})

multForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let multiplyResult = Number(multForm.firstNumberMult.value) * Number(multForm.secondNumberMult.value);
    multForm.multiplyResult.value = multiplyResult;
})