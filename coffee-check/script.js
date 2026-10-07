let coffees = 0;
let sleep = 0;
let checks = 0;

function setCoffee(number, label) {
  coffees = number;
  document.getElementById("coffeeAnswer").innerHTML = label;
  document.getElementById("coffeeCount").innerHTML = coffees;
}

function setSleep(hours, label) {
  sleep = hours;
  document.getElementById("sleepAnswer").innerHTML = label;
}

function drinkCoffee() {
  coffees += 1;
  document.getElementById("coffeeCount").innerHTML = coffees;
  console.log("Coffees: " + coffees);
}

function checkCoffee() {
  checks += 1;
  document.getElementById("checkCount").innerHTML = checks;
  document.getElementById("resultMessage").innerHTML = "You slept " + sleep + " hours and have had " + coffees + " coffees today.";
  console.log("Coffees: " + coffees + ", Sleep: " + sleep);
}
