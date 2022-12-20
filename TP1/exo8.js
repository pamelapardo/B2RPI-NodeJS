// - 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
const carsArray = ["chevrolet", "aston martin", "volkswagen", "mercedes"];

function sortCars(itemCar){
  return itemCar.replace(/[aeiou]/g, /[AEIOU]/);
}

console.log(sortCars(carsArray));

