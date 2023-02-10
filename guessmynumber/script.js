'use strict';
let body = document.querySelector('body');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let btnAgain = document.querySelector('.again');
let number = document.querySelector('.number');

let randomNr = Math.trunc(Math.random() * 20) + 1;
let scoreTwenty = 20;
let highScoreVar = 0;
console.log(randomNr);
const displayMessage = function (messsage) {
  message.textContent = messsage;
};
let check = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    guess = Number(guess);

    /// When there is no input
    if (!guess) {
      displayMessage(`No number`);
    }

    /// When Player Wins
    if (guess === randomNr) {
      displayMessage(`Corect Number`);
      body.style.backgroundColor = 'green';
      number.textContent = randomNr;

      if (scoreTwenty > highScoreVar) {
        highScoreVar = scoreTwenty;
        highScore.textContent = highScoreVar;
      }
    }

    ///when guess is wrong
    if (guess !== randomNr) {
      if (scoreTwenty > 1) {
        displayMessage(guess > randomNr ? `Too High` : 'Too Low');
        scoreTwenty--;
        score.textContent = scoreTwenty;
      } else {
        displayMessage(`You Lost`);
        score.textContent = 0;
      }
    }

    ///when guess is too high
    // if (guess > randomNr) {
    //   if (scoreTwenty > 1) {
    //     document.querySelector('.message').textContent = `Too High`;
    //     scoreTwenty--;
    //     score.textContent = scoreTwenty;
    //   } else {
    //     document.querySelector('.message').textContent = `You Lost`;
    //     score.textContent = 0;
    //   }
    // }

    // ///when guess is too low
    // if (guess < randomNr) {
    //   if (scoreTwenty > 1) {
    //     document.querySelector('.message').textContent = `Too Low`;
    //     scoreTwenty--;
    //     score.textContent = scoreTwenty;
    //   } else {
    //     document.querySelector('.message').textContent = `You Lost`;
    //     score.textContent = 0;
    //   }
    // }
  });

btnAgain.addEventListener('click', function () {
  displayMessage(`Start guessing...`);
  let guess = document.querySelector('.guess');
  guess.value = ' ';
  scoreTwenty = 20;
  score.textContent = scoreTwenty;
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  randomNr = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNr);
});
