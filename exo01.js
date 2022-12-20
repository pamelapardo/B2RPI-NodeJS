// Ecrivez une foction qui prend un tableau de nombre en parametre et qui retourne la plus grande nombre dans le tableau

// Function that gets the biggest number from the array
// @param {*} arrayNumber : an array of numbers

const arrayNumbers = [0,1,3,7,4,9,6,5]

function getMaxNum(numbers) {
  let max = numbers[0]; //on declare une variable max on l'initialise avec numbers[0]

  // On parcourt le tableau numbers avec un boucle for
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers [i];
    }
  }
  return max;
}

const result = getMaxNum(arrayNumbers)
console.log(result)


// UNE AUTRE FACON DE FAIRE

const someOtherArray = [0,1,3,7,4,9,6,5]

let bigInt = Math.max(...someOtherArray);

function largestNumber(someOtherArray) {
  return Math.max (...someOtherArray);
}

console.log(largestNumber(someOtherArray));