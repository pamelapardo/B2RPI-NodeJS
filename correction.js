// function numberToWords(number){
//   const ones = ['','one','two','three','four','five','six','seven','eignt','nine'];
//   const tens = ['','','twenty','thrirty','forty','fifty','sixty','seventy','eighty','ninety']
//   const teens = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','seventeen','eihteen','nineteen'];

//   if (number < 10) {
//     return ones[ number ];
//   } else if ( number < 20 ) {
//     return teens [ number - 10 ];
//   } else {
//     return tens[Math.floor(number /10)] + "-" + ones[number % 10]; // concatenation de strings avec l'operateur +
//   }
// }

// console.log(numberToWords(45))


// const objectArray = [
//   {firstName:"Joe", lastName:"Joy"},
//   {firstName:"Kyle", lastName:"Kansas"},
//   {firstName:"Louis", lastName:"Lousert"},
//   {firstName:"Marty", lastName:"Marmot"},
// ]

// function getPropertyName( objArray, propName ) {
//   return objArray.map(obj => obj[propName]);
// }

// console.log(getPropertyName(objectArray, 'lastName'));

const fs = require('fs');
const http = require('http')

http.createServer((httpRequest, httpReponse) => {
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      httpReponse.statusCode = 500;
      httpReponse.end('an errror has occured');
      return;
    }

    httpReponse.setHeader('Content-type','text/plain');
    httpReponse.end(data)
  })
}).listen(3002, () => {
  console.log("server web listening on por 3002")
})