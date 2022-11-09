/* En algoritm har egenskaperna
  1. Finiteness - algoritm är ändlig (den tar slut)
  2. Definiteness - entydlig, vi skriver för människan, vi skriver struktuerad kod
  3. Input - 0, 1 eller flera inputs
  4. Output - 0, 1 eller flera (som beror av input, en del av resultatet)
  5. Effectiveness - algoritmen ska vara slutförbar inom en rimlig tid
*/

function sayGreeting() { // Funktion deklaration
  console.log("Hello, how ya doing?"); // Funktion kropp (kod)

  //Om ingen return finns, så returneras undefined (ingen data)
}

// Ett funktionsanrop MÅSTE ha paranteser
sayGreeting(); // Funktionanrop (funktion call, funktion innovcation)

function fetchGreeting(toName) { // funktionen har en parameter name som ska styra output-värdet
  let greeting = `Hey ${toName}, isn't it a fine day?`;

  return greeting; // Returnerar (ger tillbaka)
}

let name = "Bertil";
let greetingMsg = fetchGreeting(name); // Spar resultatet av anropet i en variabel

console.log(greetingMsg);
//console.log(fetchGreeting("Greta"));


function isNumber(testNumber) { // write and forget
  return (typeof (testNumber) == 'number');
}

function isString(testString) {
  return (typeof (testString) == 'string');
}


function printPersonDetails(name, age, address, shoeSize) {
  // Innan funktions huvudsyfte så kan vi validera parameterar
  /*if (isNaN(age)) { */
  if (!isNumber(age)) {
    console.log("Error - age was not a number");
  }

  if (!isNumber(shoeSize)) { //kolla om shoeSize är ett nummer
    console.log("Error - shoeSize is not a number");
  }

  if (!isString(name)) {
    console.log("Error - name is not a string");
  }

  let personDetails = `Name: ${name}, Age: ${age}, Adress ${address}`;
  console.log(personDetails);
}

printPersonDetails("Greta", "43", "Eriksgatan", 37);


