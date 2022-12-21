// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.
const fs = require('fs');

fs.writeFile('fileCreated.txt', 'I just typed this', (err) =>{ //avec la methode writeFile on peut creer et typer le contenu d'un fichier.
  if (err) {
    console.log(err)
    return;
  }
  console.log('file created') //une fois le fichier a été créé, on imprime ce message en console.
})