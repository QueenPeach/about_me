'use strict';

var tally = 0;

var playGame = prompt('Hello! Would you like to play a guessing game?').toLowerCase();
console.log('guessing game:', playGame);

if(playGame === 'y' || playGame === 'yes') {
  console.log('true', playGame);
  alert('Great! Let\'s get started!');
  tally++;
} else {
  console.log('false', playGame);
  alert('Too bad, you\'re playing anyways!');
}

var myChickens = prompt('Do I have 50 chickens?').toLowerCase();
console.log('number of chickens:', myChickens);

if(myChickens === 'y' || myChickens === 'yes') {
  console.log('true', myChickens);
  alert('Correct! If you ever need fresh eggs you know where to ask.');
  tally++;
} else {
  console.log('false', myChickens);
  alert('I actually do have 50 chickens, I know, crazy!');
}

var myBirthday = prompt('Is my birthday Feburary 29th?').toLowerCase();
console.log('my birthday:', myBirthday);

if(myBirthday === 'y' || myBirthday === 'yes') {
  console.log('false', myBirthday);
  alert('Wrong!');
} else {
  console.log('false', myBirthday);
  alert('It\'s November 17th!');
  tally++;
}

var favFood = prompt('Is my favorite food Mexican?').toLowerCase();
console.log('favorite food:', favFood);

if(favFood === 'y' || favFood === 'yes') {
  console.log('true', favFood);
  alert('Nachos! Burritos! Tacos! Oh my!');
  tally++;
} else {
  console.log('false', favFood);
  alert('Pssh, Mexican food is the best!');
}

var favColor = prompt('Is my favorite color gray?').toLowerCase();
console.log('favorite color:', favColor);

if(favColor === 'y', favColor === 'yes') {
  console.log('true', favColor);
  alert('Yes, GRAY IS TOTALLY A COLOR!');
  tally++;
} else {
  console.log('false', favColor);
  alert('It is gray, but purple\'s cool too!');
}

var myCorgi = prompt('Is one of my dogs a Corgi?').toLowerCase();
console.log('my dog:', myCorgi);

if(myCorgi === 'y' || myCorgi === 'yes') {
  console.log('true', myCorgi);
  alert('Correct! His name is Bodhi!');
  tally++;
} else {
  console.log('false', myCorgi);
  alert('I do have a Corgi loaf!');
}

var numSiblings = 4;
console.log('number of siblings:', numSiblings);

var k = 4;
var wrongNum = false;

while(k > 0) {
  var guessedSib = parseInt(prompt('How many siblings do I have?'));
  console.log('guessed siblings:', guessedSib);

  if(guessedSib === numSiblings) {
    alert('You guessed correctly!');
    tally++;
    wrongNum = true;
    break;
  } else if(guessedSib > numSiblings) {
    alert('You guessed too high! Try again.');
  } else {
    alert('You guessed too low! Try again.');
    console.log('if done');
  }
  k--;
}
if(wrongNum === false) {
  alert('Out of tries!');
}


var statesVisited = ['Oregon', 'Texas', 'California', 'Nebraska'];
var numGuesses = 6;

while(numGuesses > 0) {
  var guessedState = prompt('Can you guess a state I\'ve visited?');
  if(statesVisited.includes(guessedState)) {
    var index = statesVisited.indexOf(guessedState);
    statesVisited.splice(index);
    var statesString = '';
    for(var i = 0; i < statesVisited.length; i++) {
      statesString = statesString + statesVisited[i] + '\n';
    }
    alert('Correct! The other states are:' + '\n' + statesString);
    tally++;
    break;
  } else {
    alert('Nope! I\'ve never visited '+ guessedState +' ! Try again.');
  }
  numGuesses--;
}

console.log('tally', tally);

alert('Congratulations! You got '+ tally +' out of 7.');
