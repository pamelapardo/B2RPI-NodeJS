//- 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
let firstNum =4
let secondNum= 5

function numSum(firstNum, secondNum) {
  return firstNum + secondNum;
};

const sumResult = numSum(firstNum,secondNum)
console.log (sumResult)





// - 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
const NumArray = [9,8,7,6,5,4,3,2,1]

function biggestNum(number) {
  let biggest = number[0]
  for (let i = 0; i < number.length; i++) {
    if (number[i]> biggest) {
      biggest = number[i];
    }
  }
  return biggest;
}

const finalBigNumber = biggestNum(NumArray)
console.log(finalBigNumber)





// - 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
const wordsArray = "apple, tangerine, strawberry, pear";

function letterFinder(words) {
  return words.replace(/[aeiou]/gi, '') // cette fonction va chercher TOUS les vocaux et les remplace par un vide
}

const findVowels = letterFinder(wordsArray) // on execute la fonction et on appelle la chaine de caracteres
console.log(findVowels)





// - 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
const fruitArray = ["apple", "tangerine", "strawberry", "pear"];

function sortFruits(fruits){
  return fruits.sort(); // cette methode .sort permet de organiser les caracteres d'un tableau
}

const sortResult = sortFruits(fruitArray); // on execute la fonction et on appelle le tableau
console.log(sortResult)





// - 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
let num = 1050

function toLetters(num) {
  let singleNum = ["", "un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
  let doubleNum = ["","","vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingt","quatre-vingt"]
  let numString = num.toString(); // cette variable permet de lire l'information rentrée en tant que chaine de caracteres

  if (num === 0) {
    return "zero"; // Si l'info rentée est egal a 0 on return zero
  }

  if (num < 20) {
    return singleNum[num] // Si l'info rentée est moins grande que 20, la fonction va lire le tableau pour chercher la place qui correspond a la chiffre rentrée.
  }

  if (numString.length == 2){ // cette methode permet de lire la longueur de l'info rentrée (une chiffre qu'a êtê transformé en chaine) et si sa longueur est egal a 2 faire:
    return doubleNum[numString[0]] + ' ' + singleNum[numString[1]]; // La variable doubleNum prend la chiffre transformé en chaine de caracteres et se place sur 0 dans le tableau pour commencer à compter.
  }// apres on rajoute un space pour separer les mots. On reprend singleNum pour ecrire correctement la chiffre et on se place sur la caisse 1 du tableau pour commecer a compter.

  if (num === 100) {
    return "cent"; //si c'est exactement 100 renvoie cent
  }

  if(num > 100) {
    return "I dont like big numbers" // si c'est plus de 100 la fonction s'arrete.
  }
}

const convert = toLetters(num)
console.log(convert)





// - 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

// - 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
let chiffArray = [6,4,8,9,3,5,1,2]

function inverseNumbers(chiff) {
  chiff.sort()
  chiff.reverse()
  return chiff
} 

const letsReverse = inverseNumbers(chiffArray)
console.log(letsReverse)




// - 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
const carsArray = ["chevrolet", "aston martin", "volkswagen", "mercedes"];

function sortCars(itemCar){
  return itemCar.replace(/[aeiou]/g, /[AEIOU]/);
}

console.log(sortCars(carsArray));





// - 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

// - 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
