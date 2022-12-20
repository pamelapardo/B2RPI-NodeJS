// Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.
const fs = require('fs'); 

fs.readFile('test.txt', 'utf-8', (err, data) =>{
  if (err) {
    console.log(err)
    return
    }
  console.log(data)
})