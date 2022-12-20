const fs = require('fs');
const noContent = "No content in this file";


fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('noContent')
    return;
  }

  // ecrire dans le fichier 
  fs.writeFile('test.txt', data + 'sakdjfhaskdjfhasldkjfhskfjdh', 'utf-8', (err, success) => {
    if (err) {
      console.log('cannto write to file : ', err)
    }
    console.log('message successfully written')
  })

})