

var lettersArr = [];
var Word = require('./word.js')
var inquirer = require("inquirer");
// // var selectedWord = randomWords(({ exactly: 1 })[0]);
// // console.log(selectedWord.split(''));
// function Word (selectedWord) {
//   this.word = selectedWord
//   console.log(this.word)
// }


function Letter (letter) {
this.letter = letter;
this.placeHolder = '#';
this.boolean = false;
}
var banana = "banana";

function letterPush (word) {
  for (var i = 0; i < word.length; i++) {

    var letterInfo = new Letter(word[i]); 

    lettersArr[i] = letterInfo;
    console.log(letterInfo);  
  }
  // console.log(lettersArr);
}



letterPush(banana);



function displayed (lettersArr) {
  var mistree = '';
  for (var i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i].boolean === true) {
      mistree += lettersArr[i].letter;
    } else  {
      // lettersArr[i].boolean === false
      mistree += lettersArr[i].placeHolder;

    }
  }
  console.log(mistree);
}

letterPush(banana);
displayed(lettersArr);


// function chooseQ () {
//   inquirer.prompt([
//   {
//     type: "input",
//     name: "letter",
//     message: "Please choose a letter"
//   },

//     ]).then(function(userInput) {
//       console.log(userInput)

//     })
// }


// chooseQ();

 