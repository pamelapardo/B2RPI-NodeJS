// - 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
const wordsArray = "apple, tangerine, strawberry, pear";

function letterFinder(words) {
  return words.replace(/[aeiou]/gi, '') // cette fonction va chercher TOUS les vocaux et les remplace par un vide
}

const findVowels = letterFinder(wordsArray) // on execute la fonction et on appelle la chaine de caracteres
console.log(findVowels)

