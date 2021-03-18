var randomWords = require('random-words'); 
var i = 0
var m = 10
for (let i = 0; i < m ; i++) {
    console.log(randomWords()+"_"+randomWords()+"@gmail.com"); 
}