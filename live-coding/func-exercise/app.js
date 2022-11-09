/*
1. Skapa en funktion med två parameterar
2. Funktionen ska returnera någon matematisk operation (ej endast +, -)

log, exp, sin, cos, factorial

function foo(a, b) {
  return a <operation> b
}

  Ge funktionen ett lämpligt namn (den ska vara beskrivande)
*/


//Exempel
function add(a, b) {
  return a + b;
}

function areaTriangle(height, base) {
  let areaValue = (height * base) / 2;
  return areaValue;
}

function divide(a, b) {
  return a / b;
}

function sumSin(a, b) {
  return Math.sin(a) + Math.sin(b);
}

function sqrtOfSum(a, b) {
  return Math.sqrt(a + b);
}

function divLog(A, B) {
  return Math.log(B) / Math.log(A);
}

function calcHypotenusue(num1, num2) {
  return (Math.sqrt((num1 * num1) + (num2 * num2)));
}

function hittaHypotenusan(a, b) {
  return Math.sqrt((a * a) + (b * b));
}

function isNumber(testNumber) {
  return typeof testNumber == 'number';
}

function divideNumbers(a, b) {
  if (!isNumber(a || b)) {
    let error = 'Error - Only numbers are allowed for this function';
    return error;
  } else {
    let result = a / b;
    return result;
  }
}

let a = 1;
let b = 1;

a = add(a, b);
b = calcAreaTriangle(a, b); //getTriangleArea(a, b)

a = divide(a, b);
b = sumSin(a, b);

a = sqrtOfSum(a, b);
b = sumLog(a, b);

a = calcHypotenusue(a, b);
b = hittaHypotenusan(a, b);

a = divideNumbers(a, b);

console.log("a: " + a);
console.log("b: " + b);