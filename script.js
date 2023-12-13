const coque = document.getElementById("coque-online");
const custom = document.getElementById("custom-coque");
const selectOne = document.getElementById("coq1");
const selectTwo = document.getElementById("coq2");

const button = document
  .getElementById("btn1")
  .addEventListener("click", generateBtn);
const display = document.getElementById("display");
const inputOne = document.getElementById("number1");

function generateBtn() {
  let a = selectOne.value;
  let b = selectTwo.value;
  let priceDelivery = calculateDelivery(b);

  let message = "<p>Merci pour votre commande </p>";

  if (priceDelivery === 0) {
    message += "<p>Cool Livraison Gratuite</p>";
  } else {
    message += "La livraison vous coûtera " + priceDelivery + "€";
    display.innerHTML = message;
  }
}
function calculateDelivery(b) {
  let priceDelivery = 0;

  if (b === "Point Relais ") {
    priceDelivery = 0;
  } else if (b === "A domicile") {
    priceDelivery = 5;
  } else {
    priceDelivery = 10;
  }
  return priceDelivery;
}
