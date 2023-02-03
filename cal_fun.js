var display = document.getElementById("output");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "=" &&
      button.textContent != "C" &&
      button.textContent != "x" &&
      button.textContent != "÷" &&
      button.textContent != "2√x" &&
      button.textContent != "mod" &&
      button.textContent != "<=" &&
      button.textContent != "⌫" &&
      button.textContent != "+/-" &&
      button.textContent != "sin" &&
      button.textContent != "cos" &&
      button.textContent != "tan" &&
      button.textContent != "sinh" &&
      button.textContent != "cosh" &&
      button.textContent != "tanh" &&
      button.textContent != "log" &&
      button.textContent != "ln" &&
      button.textContent != "^" &&
      button.textContent != "n!" &&
      button.textContent != "π" &&
      button.textContent != "exp" &&
      button.textContent != "degrees" &&
      button.textContent != "10^x" &&
      button.textContent != "DEG" &&
      button.textContent != "x^y" &&
      button.textContent != "1/x" &&
      button.textContent != "x^2" &&
      button.textContent != "|x|" &&
      button.textContent != "e"
    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "+/-") {
      plusMinus();
    } else if (button.textContent === "<=") {
    } else if (button.textContent === "⌫") {
      backspace();
    } else if (button.textContent === "mod") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "2√x") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "sinh") {
      sinh();
    } else if (button.textContent === "cosh") {
      cosh();
    } else if (button.textContent === "tanh") {
      tanh();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^y") {
      exponent();
    } else if (button.textContent === "10^x") {
      power();
    } else if (button.textContent === "n!") {
      factorial();
    } else if (button.textContent === "exp") {
      exp();
    } else if (button.textContent === "1/x") {
      oneByx();
    } else if (button.textContent === "x^2") {
      xPow();
    } else if (button.textContent === "e") {
      e();
    } else if (button.textContent === "DEG") {
      degrees();
    } else if (button.textContent === "|x|") {
      absolute();
    }
  });
});

// ***button functions***
function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}
function syntaxError() {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}
function equals() {
  if (display.value.indexOf("^") > -1) {
    var base = display.value.slice(0, display.value.indexOf("^"));
    var exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}
function clear() {
  display.value = "";
}
function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}
function multiply() {
  display.value = display.value + "*";
}
function divide() {
  display.value = display.value + "/";
}
function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function factorial() {
  var result = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var result = 1;
    for (var i = display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = result;
  }
}
function pi() {
  display.value = display.value * Math.PI;
}
function e() {
  display.value = display.value * Math.E;
}
function square() {
  display.value = eval(display.value * display.value);
}
function squareRoot() {
  display.value = Math.sqrt(display.value);
}
function percent() {
  display.value = display.value / 100;
}
function sin() {
  display.value = Math.sin(display.value);
}
function cos() {
  display.value = Math.cos(display.value);
}
function tan() {
  display.value = Math.tan(display.value);
}
function sinh() {
  display.value = Math.sinh(display.value);
}
function cosh() {
  display.value = Math.cosh(display.value);
}
function tanh() {
  display.value = Math.tanh(display.value);
}
function log() {
  display.value = Math.log10(display.value);
}
function ln() {
  display.value = Math.log(display.value);
}
function power() {
  display.value = Math.pow(10, display.value);
}
function exponent() {
  display.value = display.value + "^";
}
function exp() {
  display.value = Math.exp(display.value);
}
function xPowY() {
  // display.value = Math.pow(display.value , display.value);
  display.value = display.value + "^";
}

function oneByx() {
  display.value = 1 + "/" + display.value;
}

function xPow() {
  display.value = Math.pow(display.value, 2);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

function absolute() {
  display.value = Math.abs(display.value);
}
