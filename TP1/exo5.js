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
