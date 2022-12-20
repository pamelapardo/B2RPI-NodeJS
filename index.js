console.log("Hello world");

// comentaire une ligne

/**
 * Commentaire multilgne
*/



var test = "bonjour"; //interdit cette semaine
let test2 = "le";
const test3 = "monde!";
 
test2 = "les "; // l'operateur = est un operateur d'asignation

// Numbers
const age = 26;

// Variable
let x;

// Text (string)
const aRandomText = "some text";

// Operations
let addition = 4 + 4;

// Booleans
let myBoolean = true;

const PI = 3.14;

// Objects
let name = {firstName: "Paul", lastName: "Dupont"};

// Array
let myArray = ["Banana", "Apple"]

let numOne = 1;
let numTwo = 3;

function sum(numOne, numTwo)  {
	return numOne + numTwo;
};

// Ceci est une fonction
// numOne est un parametre (ou un argument) de la fonction sum
// Entre les accolades se trouve le corps de la fonction, c'est là qu'est
// stockée la logique de la fonction (il y a des noms reservées pour les
// fonctions, il faut les eviter pour pas rencontrer des errors)
 function square(number) {
 	return number * number;
 };

// Ceci est la même function flechée (const et function sont la meme chose)
// const square = (number) => {
// 	return number * number;
// }

// Ceci est la même function
// const square = number => number * number;

// On execute la fonction : node.exe index.js
const number = square(2);
console.log(number)







// Ceci est un tableau
const anArray = [264662, 2445, 78678, 45735, 24657, 35735, 82734928];

//l'index est la position d'un element dans le tableau
//le premier index est l'index 0
console.log(myArray.length);

// Boucle for
for (let index = 0; index < anArray.length; index++) {
	const arrayContent = anArray[index];
	console.log(arrayContent);
}