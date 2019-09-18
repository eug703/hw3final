var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var yourletters = [];

var directionsText = document.getElementById("directions-text");
var stockText = document. getElementById("stock-text")
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guess-text");
var yourletterText = document.getElementById("letter-text")
var headerText = document.getElementById("header-text")

document.onkeyup = function(event) {

  var userGuess = event.key;
  var userGuess2 = userGuess.toLowerCase();
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  yourletters.push(userGuess2);

  if (userGuess2 === computerGuess) {
      wins++;
    }
  else {
      if (guessesleft <= 0){
          losses++;
          yourletters = [];
          guessesleft = 9;
    }
      else {
        guessesleft--;
        }  
    }
    directionsText.textContent = "";
    headerText.textContent= "The Psychic Game";
    stockText.textContent = "Guess what letter I'm thinking of.";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessText.textContent = "Guesses left: " + guessesleft;
    yourletterText.textContent = "Your Guesses so far: " + yourletters;
  }