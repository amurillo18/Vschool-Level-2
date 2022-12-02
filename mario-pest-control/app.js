const form = document.getElementsByName("invoice");

const goombaQuantity = document.getElementById("goombaQuantity");
const bobombQuantity = document.getElementById("bobombQuantity");
const cheepQuantity = document.getElementById("cheepQuantity");

const goombaTotal = document.getElementById("goombaPriceTotal");
const bobombTotal = document.getElementById("bobombPriceTotal");
const cheepTotal = document.getElementById("cheepPriceTotal");

const totalCalcButn = document.getElementById("totalCalc");


const totalQuantity = document.getElementById("totalQuantity");
const totalPrice = document.getElementById("totalPrice");

let goombaCost = 5;
let goombaPrice = 0;
// total price of goomba
goombaQuantity.addEventListener("change", function(e) {
    e.preventDefault();
    goombaPrice = (goombaQuantity.value * goombaCost);
    goombaTotal.textContent = goombaPrice;
    updateTotalQuantity();
});
// total price of bobomb
let bobombCost = 7;
let bobombPrice = 0;
bobombQuantity.addEventListener("change", function(e) {
    e.preventDefault();
    bobombPrice = bobombQuantity.value * bobombCost;
    bobombTotal.textContent = bobombPrice;
    updateTotalQuantity();
});

// total price of cheep cheep
let cheepCost = 11;
let cheepPrice = 0;
cheepQuantity.addEventListener("change", function(e) {
    e.preventDefault();
    cheepPrice = cheepQuantity.value * cheepCost;
    cheepTotal.textContent = cheepPrice;
    updateTotalQuantity();
});
// update total quantity
function updateTotalQuantity() {
    totalQuantity.textContent = Number(goombaQuantity.value) + Number(bobombQuantity.value) + Number(cheepQuantity.value);
}
// total price of all combined
totalCalcButn.addEventListener("click", function(e) {
    e.preventDefault();
    updateTotalQuantity();

    totalPrice.textContent =  goombaPrice + bobombPrice + cheepPrice;
});
