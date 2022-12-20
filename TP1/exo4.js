// - 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
const fruitArray = ["apple", "tangerine", "strawberry", "pear"];

function sortFruits(fruits){
  return fruits.sort(); // cette methode .sort permet de organiser les caracteres d'un tableau
}

const sortResult = sortFruits(fruitArray); // on execute la fonction et on appelle le tableau
console.log(sortResult)


