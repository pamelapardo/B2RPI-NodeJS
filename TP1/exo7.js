// - 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
let chiffArray = [6,4,8,9,3,5,1,2]

function inverseNumbers(chiff) {
  chiff.sort()
  chiff.reverse()
  return chiff
} 

const letsReverse = inverseNumbers(chiffArray)
console.log(letsReverse)


