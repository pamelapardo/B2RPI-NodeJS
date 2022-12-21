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