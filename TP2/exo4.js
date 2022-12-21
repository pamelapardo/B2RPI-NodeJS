// Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.
const folderToRead = '../TP1';
const fs = require('fs');

fs.readdir(folderToRead, (err, files) => { //La methode readdir permet de lire un dossier de façon asynchronique.
  files.forEach(file => { //Apres on utilise la methode foreach, qui permet de lire un array (dans ce cas, un array de fichiers dans le dir)
    console.log(file); //on imprime les fichiers que la methode forEach a lit.
  });
});