// Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.
// const fs = require('fs'); 

// fs.readFile('test.txt', 'utf-8', (err, data) =>{
//   if (err) {
//     console.log(err)
//     return
//     }
//   console.log(data)
// })





// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.
// const fs = require('fs');


// fs.readFile('test.txt', 'utf-8', (err, data) =>{
//   if (err){
//     console.log('no content')
//     return;
//   } 
  
//   // ecrire dans le fichier 
//   fs.writeFile('test.txt', 'This is a bomb. It will explode in 3, 2, 1... ', 'utf-8', (err, success) => {
//     if (err) {
//       console.log('cannot write to file : ', err)
//     }
//     console.log(data)
//   })

// })





// Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) { //on cree le serveur dans notre pc (localhost). Req c'est la requete cree. res c'est sa reponse.
  fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err){
      console.log(err)
      return;
    } 
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Affice le StatusCode de HTTP(dans ce cas 200), la seconde partie c'est une specification du contenu qu'on affiche
    res.write(data); //contenu qu'on souhaite afficher.
    res.end(); // Pour indiquer que la methode est terminé.
  })
}).listen(3006); //port local qui sert comme serveur.





// Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.


// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

// Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

// Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

// Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

// Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.
