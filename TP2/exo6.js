// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.
const os = require('os');
const fs = require('fs')

fs.readdir(os.homedir(), (err, dir) => { //On utilise readdir pour lire le contenu qui se trouve dans le dossier peso que Homedir va chercher.
  dir.forEach(dir => { //Apres on utilise la methode foreach, qui permet de lire un array (dans ce cas, un array de fichiers dans le dir)
    console.log(dir)
  })
})
