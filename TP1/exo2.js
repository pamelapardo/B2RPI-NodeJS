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
