function calculate() {
  let input = document.querySelector("#input").value;

  let result = input * 1000;
  result = result + "m";

  document.querySelector("#result").innerHTML = result;
}

function calculateHr() {
  let input = document.querySelector("#inputhr").value;

  let result = input * 60;
  result = result + "min";

  document.querySelector("#resultmin").innerHTML = result;
}

function calculateM() {
  let input = document.querySelector("#inputm").value;
  let result = input * 100;
  result = result + "cm";

  document.querySelector("#resultm").innerHTML = result;
}

function calculateSec() {
  let input = document.querySelector("#inputmin").value;
  let result = input * 60;
  result = result + "sec";

  document.querySelector("#resultsec").innerHTML = result;
}
