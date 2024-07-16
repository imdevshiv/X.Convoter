function calculate() {
  let input = document.querySelector("#input").value;
  // console.log(input);
  let result = input * 1000;
  result = result + "m";

  console.log(result);
  document.querySelector("#result").innerHTML = result;
}

function calculateHr() {
  let input = document.querySelector("#inputhr").value;
  // console.log(input);
  let result = input * 60;
  result = result + "min";

  document.querySelector("#resultmin").innerHTML = result;
}

function calculateM() {
  let input = document.querySelector("#inputm").value;
  // console.log(input);
  let result = input * 100;
  result = result + "cm";

  document.querySelector("#resultm").innerHTML = result;
}

function calculateSec() {
  let input = document.querySelector("#inputmin").value;
  // console.log(input);
  let result = input * 60;
  result = result + "sec";

  document.querySelector("#resultsec").innerHTML = result;
}
