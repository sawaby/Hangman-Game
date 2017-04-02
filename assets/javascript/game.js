
var options = ["football","basketball","soccer", "tennis", "swimming", "badminton",
 "cycling", "golf", "hunting", "running", "sailing"];

// choose a random word
var wins = 0;
var letterTyped = [];
var hangman = [];
var i;
var numLetterTyped = 0;

var computerGuess = options[Math.floor(Math.random() * options.length)];

arrayComGuess(computerGuess);
function arrayComGuess(chosenWord){

	for(i = 0; i<chosenWord.length; i++){
		hangman[i] = "-"
		//document.getElementById("#emptyArray").innerHTML = hangman;
		

	
	}
	document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
	console.log(hangman);


	document.onkeyup = function(event){
		var letter = event.key.toLowerCase();

		for(i = 0; i<chosenWord.length; i++){
			if(letter === chosenWord[i]){
				for(var j =0; j<chosenWord.length; j++){
					if(chosenWord[j] == letter){
						hangman[j] = letter;
					}
				}
				// hangman[chosenWord.indexOf(letter)] = letter;
				// console.log(letter);
				// console.log(hangman);
				document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
				// showLives -=1;
				// document.querySelector("#showLives").innerHTML = showLives;
			}
			// if(chosenWord == hangman){
			// 	wins +=1;
				
			// }
			console.log("wins"+wins);
		}

	};
	
 }
// ["Nano","Volvo","BMW","Nano","VW","Nano"].reduce(function(a, e, i) {
//     if (e === 'Nano')
//         a.push(i);
//     return a;
// }, []); 
// function(arr){
// 	document.onkeyup = function(event){
// 		var letter = key.event.toLowerCase();
// 		for(i = 0; i<arr.length; i++){
// 			if(letter === indexOf(arr[i])){

// 	}
// }
// 		}
		
// Get elements
  var showLives = document.getElementById("mylives");