'use strict'

var playGame = prompt('Hello! Would you like to play a guessing game?');
playGame = playGame.toLowerCase();
console.log('guessing game:', playGame);

if(playGame === 'Yes' || playGame === 'yes') {
  console.log('true', playGame);
  alert('Great! Let\'s get started!');
} else {
  console.log('false', playGame);
  alert('Too bad, you\'re playing anyways!');
}

var myChickens = prompt('Do I have 50 chickens?')
myChickens = myChickens.toLowerCase();
console.log('number of chickens:', myChickens);

if(myChickens === 'Yes' || myChickens === 'yes') {
  console.log('true', myChickens);
  alert('Correct! If you ever need fresh eggs you know where to ask.')
} else {
  console.log('false', myChickens);
  alert('I actually do owe 50 chickens, I know, crazy!');
}

var myBirthday = prompt('Is my birthday November 17th?');
myBirthday = myBirthday.toUpperCase();
console.log('my birthday:', myBirthday);

if(myBirthday === 'Yes' || myBirthday === 'yes') {
  console.log('true', myBirthday);
  alert('Yes, Happy birthday to me!')
} else {
  console.log('false', myBirthday);
  alert('Wrong, it is the 17th.');
}
