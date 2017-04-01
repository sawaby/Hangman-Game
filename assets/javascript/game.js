
var options = ["football","basketball","soccer", "tennis", "swimming", "badminton", "cycling", "golf", "hunting", "running", "sailing"];

// choose a random word
var wins = 0;
var letterTyped = [];
var hangman = [];
var i;

var computerGuess = options[Math.floor(Math.random() * options.length)];


for(i = 0; i<computerGuess.length; i++){
	hangman[i] = "-"
	//document.getElementById("#emptyArray").innerHTML = hangman;
	document.querySelector("#emptyArray").innerHTML = hangman;
	
}
console.log(hangman);

// Get elements
  var showLives = document.getElementById("mylives");