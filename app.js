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
  alert('I actually do have 50 chickens, I know, crazy!');
}

var myBirthday = prompt('Is my birthday Feburary 29th?');
myBirthday = myBirthday.toLowerCase();
console.log('my birthday:', myBirthday);

if(myBirthday === 'Yes' || myBirthday === 'yes') {
  console.log('false', myBirthday);
  alert('Wrong!');
} else {
  console.log('false', myBirthday);
  alert('It\'s November 17th!');
}

var favFood = prompt('Is my favorite food Mexican?')
favFood = favFood.toLowerCase();
console.log('favorite food:', favFood);

if(favFood === 'Yes' || favFood === 'yes') {
  console.log('true', favFood);
  alert('Nachos! Burritos! Tacos! Oh my!');
} else {
  console.log('false', favFood);
  alert('Pssh, Mexican food is the best!');
}

var favColor = prompt('Is my favorite color gray?')
favColor = favColor.toLowerCase();
console.log('favorite color:', favColor);

if(favColor === 'Yes', favColor === 'yes') {
console.log('true', favColor);
alert('Yes, GRAY IS TOTALLY A COLOR!')
} else {
  console.log('false', favColor);
  alert('It is gray, but purple\'s cool too!');
}

var myCorgi = prompt('Is one of my dogs a Corgi?')
myCorgi = myCorgi.toLowerCase();
console.log('my dog:', myCorgi);

if(myCorgi === 'Yes' || myCorgi === 'yes') {
  console.log('true', myCorgi);
  alert('Correct! His name is Bodhi!');
} else {
  console.log('false', myCorgi);
  alert('I do have a Corgi loaf!');
}
