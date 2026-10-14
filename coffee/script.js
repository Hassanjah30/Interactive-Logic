let coffees = 0;
let sleep = 0;
let checks = 0;
let coffeeAnswered = false;
let sleepAnswered = false;

function setCoffee(number, label) {
  coffees = number;
  coffeeAnswered = true;
  document.getElementById("coffeeAnswer").textContent = label;
  document.getElementById("coffeeCount").textContent = coffees;
}

function setSleep(hours, label) {
  sleep = hours;
  sleepAnswered = true;
  document.getElementById("sleepAnswer").textContent = label;
}

function drinkCoffee() {
  coffees += 1;
  coffeeAnswered = true;
  document.getElementById("coffeeAnswer").textContent = coffees >= 4 ? "4+" : coffees;
  document.getElementById("coffeeCount").textContent = coffees;
  console.log("Coffees: " + coffees);

  if (checks > 0) {
    showDecision();
  }
}

function checkCoffee() {
  checks += 1;
  document.getElementById("checkCount").textContent = checks;
  console.log("Coffees: " + coffees + ", Sleep: " + sleep + ", Checks: " + checks);
  showDecision();
}

function showDecision() {
  let title = "";
  let message = "";
  let state = "";

  if (!coffeeAnswered || !sleepAnswered) {
    title = "Waiting";
    message = "Answer both questions first, then click Check.";
    state = "waiting";
  } else if (coffees >= 4) {
    title = "No more coffee";
    message = "You have had " + coffees + " coffees today. Drink some water instead.";
    state = "stop";
  } else if (sleep <= 5 && coffees <= 1) {
    title = "Yes, have one";
    message = "You only slept " + sleep + " hours. One coffee should help.";
    state = "go";
  } else if (sleep <= 5 && coffees >= 2) {
    title = "Maybe a small one";
    message = "You are tired, but you already had " + coffees + ". Try a small cup or a walk outside.";
    state = "maybe";
  } else if (sleep >= 8) {
    title = "You probably don't need it";
    message = "You got " + sleep + " hours of sleep. You should be fine without another coffee.";
    state = "maybe";
  } else if (coffees === 0) {
    title = "Sure, one is fine";
    message = "Average sleep and no coffee yet. Enjoy your first cup.";
    state = "go";
  } else {
    title = "Hold off for now";
    message = "You slept okay and already had " + coffees + ". Wait a few hours.";
    state = "stop";
  }

  if (checks >= 5) {
    message += " Also, you have checked " + checks + " times. Just decide!";
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("resultBox").className = "box " + state;
}

function resetAll() {
  coffees = 0;
  sleep = 0;
  checks = 0;
  coffeeAnswered = false;
  sleepAnswered = false;

  document.getElementById("coffeeAnswer").textContent = "Not answered";
  document.getElementById("sleepAnswer").textContent = "Not answered";
  document.getElementById("coffeeCount").textContent = 0;
  document.getElementById("checkCount").textContent = 0;
  document.getElementById("resultTitle").textContent = "Result";
  document.getElementById("resultMessage").textContent = "Answer both questions and click Check.";
  document.getElementById("resultBox").className = "box";
}
