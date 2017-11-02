/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// getter
// var x = document.querySelector('#score-0').textContent;

// CSS manuplation
document.querySelector('.dice').style.display = 'none';

// Use Callback function when needs to be used morethan once
/*function btn() {
  // Do something here
}
btn();
*/

document.getElementById('score-0').textContent = '0'; // getElement method is faster. No need CSS style test style # or .
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Callback function: function is pass into another function as argument
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random number
  var dice = Math.floor(Math.random() * 6 + 1);
  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    // Add score
    roundScore += dice; // roundScore = roundScore + dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // tenary operator
    /* is same as
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  */
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active'); // remove and add switches
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  }
});
