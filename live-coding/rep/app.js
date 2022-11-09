//const - skyddar referensen ("fruits")
const fruits = ["Apple", "Pear", "Orange"];

fruits[0] = "Pinapple"; // Update

console.log(fruits);

//fruits = ["Apple", "Pear", "Orange"]; //detta går ej då den är deklarerad som const


fruits.push("Melon") // Create || //fruits := ["Apple", "Pear", "Orange", "Melon"]

for (let i = 1; i < fruits.length - 1; i++) {
  console.log(i + " - " + fruits[i]); // Read
  fruits[i] = fruits[i].toLowerCase(); // Update
}

console.log(fruits);

for (let item of fruits) {
  console.log(item); // Read
  item = item.toLowerCase(); // Denna skriver EJ över innehållet
}

console.log(fruits);


fruits.shift();

console.log(fruits);

// fruits.splice(1); // tar bort index 1 och allt därefter
fruits.splice(1, 1); // tar bort elementet på index 1 och endast 1 element
console.log(fruits);


let myString = "The Quick Brown Fox";
let newString = "";

let myArr = myString.split("") // Delar upp en text sträng till en lista på varje tecken ""

console.log(myArr);

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] == myArr[i].toUpperCase) {
    myArr[i] = myArr[i].toLowerCase();
  } else {
    myArr[i] = myArr[i].toUpperCase();
  }
}

newString = myArr.join(""); // Tar en lista och gör om den till en textsträng

console.log(newString);