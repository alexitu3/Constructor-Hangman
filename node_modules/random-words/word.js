var wordBank = ["spider","spin","spirit"]



// var selectedWord = randomWords(({ exactly: 1 })[0]);


// // console.log(selectedWord.split(''));
function Word () {
var randomWord = Math.floor(Math.random() * wordBank.length);
return randomWord

}

module.exports = Word