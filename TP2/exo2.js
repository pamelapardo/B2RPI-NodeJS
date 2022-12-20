// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.
const fs = require('fs');


fs.readFile('test.txt', 'utf-8', (err, data) =>{
  if (err){
    console.log('no content')
    return;
  } 
  
  // ecrire dans le fichier 
  fs.writeFile('test.txt', 'This is a bomb. It will explode in 3, 2, 1... ', 'utf-8', (err, success) => {
    if (err) {
      console.log('cannot write to file : ', err)
    }
    console.log(data)
  })

})