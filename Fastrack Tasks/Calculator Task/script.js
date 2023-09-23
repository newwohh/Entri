// constants
const inputField = document.querySelector("#display");
let scientificButtons = document.querySelectorAll(".scientific");
let standardButtons = document.querySelectorAll(".standard");

let firstInput;
let secondInput = 0;
let operatorSign = "";
//Functions

function emptyInput() {
  inputField.value = "";
}

function inputHandler(sign) {
  firstInput = inputField.value;

  inputField.value = "";

  if (sign === "+") {
    operatorSign = "+";
  } else if (sign == "-") {
    operatorSign = "-";
  } else if (sign == "/") {
    operatorSign = "/";
  } else if (sign == "*") {
    operatorSign = "*";
  } else if (sign == "√") {
    inputField.value = Math.sqrt(firstInput);
  }
}

function displayNum(num) {
  inputField.value = inputField.value + num;
}

function operationHandler() {
  secondInput = inputField.value;

  if (firstInput == "") {
    return (inputField.value = "please enter a valid number");
  }

  if (operatorSign == "+") {
    inputField.value = parseInt(firstInput) + parseInt(secondInput);
  } else if (operatorSign == "-") {
    inputField.value = parseInt(firstInput) - parseInt(secondInput);
  } else if (operatorSign == "/") {
    inputField.value = parseInt(firstInput) / parseInt(secondInput);
  } else if (operatorSign == "*") {
    inputField.value = parseInt(firstInput) * parseInt(secondInput);
  } else {
    inputField.value = "please enter a valid input";
  }
}

function allClear() {
  firstInput = 0;
  secondInput = 0;
  operatorSign = "";
  inputField.value = 0;
}

function del() {
  inputField.value.length - 1;
}

function switchToScientific() {
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].classList.toggle("show");
  }

  for (let i = 0; i < standardButtons.length; i++) {
    standardButtons[i].classList.toggle("hide");
  }
}
