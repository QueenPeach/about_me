'use strict';

function playGame() {
  var play = false;
  var playGame = prompt('Hello! Would you like to play a guessing game?').toLowerCase();
  console.log('guessing game:', playGame);

  if(playGame === 'y' || playGame === 'yes') {
    console.log('true', playGame);
    alert('Great! Let\'s get started!');
    play = true;
  } else {
    console.log('false', playGame);
    alert('So sad. Maybe next time.');
  }

  return play;
}

function yesNoQuestion(question, actualAnswer, correctResponse, incorrectResponse) {
  var valid = false;
  var answer;
  var retVal;

  while (!valid) {
    answer = prompt(question).toLowerCase();
    console.log(question + ':', answer);

    if(answer === 'y' || answer === 'yes') {
      valid = true;
      answer = true;
    } else if (answer === 'n' || answer === 'no') {
      valid = true;
      answer = false;
    } else {
      prompt('Oops. Try again.');
    }
  }

  if (answer === actualAnswer) {
    console.log('Correct!:', correctResponse);
    alert('Correct! ' + correctResponse);
    retVal = 1;

  } else {
    console.log('Incorrect!:', incorrectResponse);
    alert('Incorrect!: ' + incorrectResponse);
    retVal = 0;
  }

  return retVal;
}

function askYesNoQuestions() {
  var _tally = 0;

  _tally += yesNoQuestion('Do I have 50 chickens?', true, 'If you ever need fresh eggs you know where to ask.', 'I actually do have 50 chickens, I know, crazy!');
  _tally += yesNoQuestion('Is my birthday Feburary 29th?', false, 'It\'s November 17th!', 'It\'s November 17th!');
  _tally += yesNoQuestion('Is my favorite food Mexican?', true, 'Nachos! Burritos! Tacos! Oh my!', 'Pssh, Mexican food is the best!');
  _tally += yesNoQuestion('Is my favorite color gray?', true, 'Yes, GRAY IS TOTALLY A COLOR!', 'It is gray, but purple\'s cool too!');
  _tally += yesNoQuestion('Is one of my dogs a Corgi?', true, 'Correct! His name is Bodhi!', 'I do have a Corgi loaf!');

  return _tally;
}

function askNumSiblings() {
  var numSiblings = 4;
  console.log('number of siblings:', numSiblings);

  var _tally = 0;
  var k = 4;
  var wrongNum = false;

  while(k > 0) {
    var guessedSib = parseInt(prompt('How many siblings do I have?'));
    console.log('guessed siblings:', guessedSib);

    if (guessedSib === numSiblings) {
      alert('You guessed correctly!');
      _tally = 1;
      wrongNum = true;
      console.log('equal', guessedSib);
      break;
    } else if (guessedSib > numSiblings) {
      alert('You guessed too high! Try again.');
      console.log('greaterthan', guessedSib);
    } else {
      alert('You guessed too low! Try again.');
      console.log('lessthan', guessedSib);
    }
    k--;
  }
  if(wrongNum === false) {
    alert('Out of tries!');
  }

  return _tally;
}

function guessState() {
  var statesVisited = ['Oregon', 'Texas', 'California', 'Nebraska'];
  var numGuesses = 6;
  var _tally = 0;
  var correctGuess= false;

  while(numGuesses > 0) {
    var guessedState = prompt('Can you guess a state I\'ve visited?').toLowerCase();
    for (var i = 0; i < statesVisited.length; i++) {
      if (guessedState === statesVisited[i].toLowerCase()) {
        correctGuess = true;
        break;
      }
    }

    if (correctGuess) {
      var index = statesVisited.indexOf(guessedState);
      statesVisited.splice(index);
      var statesString = '';
      for(var i = 0; i < statesVisited.length; i++) {
        statesString = statesString + statesVisited[i] + '\n';
      }
      alert('Correct! The other states are:' + '\n' + statesString);
      _tally = 1;
      break;
    } else {
      alert('Nope! I\'ve never visited '+ guessedState +'! Try again.');
    }
    numGuesses--;
  }

  return _tally;
}


//------------------------Code Starts Here------------------------------------
if (playGame()) {
  var tally = 0;

  tally += askYesNoQuestions();
  tally += askNumSiblings();
  tally += guessState();

  console.log('tally', tally);
  alert('Congratulations! You got '+ tally +' out of 7 correct!');
}