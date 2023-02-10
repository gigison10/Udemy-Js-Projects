'use strict';
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNewGame = document.querySelector('.btn--new');
let image = document.querySelector('.dice');

let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

let section0 = document.querySelector('.player--0');
let section1 = document.querySelector('.player--1');

///switching playesr
let activePlayer = 0;
let switchPlayer = function () {
  switch (activePlayer) {
    case 0:
      current0.textContent = 0;
      activePlayer = 1;
      break;
    case 1:
      current1.textContent = 0;
      activePlayer = 0;
      break;
  }
};
function switchSections() {
  section0.classList.toggle('player--active');
  section1.classList.toggle('player--active');
}

/// current score reset
let resetCurrentScore = function () {
  current0.textContent = 0;
  current1.textContent = 0;
};

/// roll random dice and reset if is === 1
btnRoll.addEventListener('click', function () {
  let randomNr = Math.trunc(Math.random() * 6) + 1;
  image.src = `dice-${randomNr}.png`;
  if (activePlayer === 0) {
    current0.textContent = Number(current0.textContent) + randomNr;
  } else {
    current1.textContent = Number(current1.textContent) + randomNr;
  }
  if (randomNr === 1) {
    switchPlayer();
    switchSections();
  }
});

//hold curent score
btnHold.addEventListener('click', function () {
  if (activePlayer === 0) {
    score0.textContent =
      Number(current0.textContent) + Number(score0.textContent);
  } else {
    score1.textContent =
      Number(current1.textContent) + Number(score1.textContent);
  }
  switchPlayer();
  switchSections();
  resetCurrentScore();
});

btnNewGame.addEventListener('click', function () {
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  resetCurrentScore();
  section0.classList.add('player--active');
  section1.classList.remove('player--active');
});
