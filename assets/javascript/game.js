

var wins = 0;
//var letterTyped = [];
var hangman = [];
var i;
var showLives = 10;
var options = ["football","basketball","soccer", "tennis", "swimming", "badminton",
 	"cycling", "golf", "hunting", "running", "sailing"];

function game(){
	// choose a random word
 	var computerGuess = options[Math.floor(Math.random() * options.length)];
 	document.querySelector("#showLives").innerHTML = showLives;
 	document.querySelector("#letterTyped").innerHTML = " ";
 	hangmanArray(computerGuess);
 	//functions calling

	arrayComGuess(computerGuess);
	
}



function hangmanArray(chosenWord){
	hangman = [];
	// initializing hangman array with "_"
	for(i = 0; i<chosenWord.length; i++){
		hangman[i] = "-"
	}
	// printing the initial values or hangman
	document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
}




function arrayComGuess(chosenWord){

	document.querySelector("#wins").innerHTML = wins;

	// when user press a key, on key up this statement triggers the event
	document.onkeyup = function(event){
		// any letter changed to lowercase
		var letter = event.key.toLowerCase();
		// if(typeof(letter) !== String){
			// document.getElementById("alert").innerHTML = "Please Enter a letter";
		// }

		//letter typed so far
		document.querySelector("#letterTyped").innerHTML += letter.toUpperCase();

		// iterate over the random word to find if the entered key is in there
		for(i = 0; i<chosenWord.length; i++){
			if(letter === chosenWord[i]){
				// second for loop looks for duplicate letters and insert them
				for(var j =0; j<chosenWord.length; j++){
					if(chosenWord[j] == letter){
						hangman[j] = letter;
					}
				}
				//prints each character which are entered correctly
				document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
			}
			// showLives(letter, chosenWord);
			
		}
		// if(!(letter == chosenWord[i])){
		// 	showLives -=1;
		// 	console.log(showLives);
		// 	document.querySelector("#showLives").innerHTML = showLives;
				
		// } 
		var count = 0;
		for(i = 0; i<chosenWord.length; i++){

			if(chosenWord[i] === hangman[i]){
				count++;

			}

			if(count == chosenWord.length){
				wins++;
				document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
				
				//wait 3 second and reset
				setTimeout(game, 1000);


			}

		}
	
	document.querySelector("#wins").innerHTML = wins;
	};
}//function end

//this function calculates how many times does the user entered the letter wrongly
function lives(letter, cGuess){
	for(i = 0; i<15; i++){
		for(var j = 0; j<cGuess.length; j++){
			if(letter !== cGuess[i]){
				showLives -=1;
				break;
			}
		}document.querySelector("#showLives").innerHTML = showLives;
		
	}
	if(showLives == 0){
		document.getElementById("#alert").innerHTML = alert("You have no more chances to guess! <br> Play Again.");
		game();
	}

}
game();
// document.getElementById('reset').onclick = function() {
// 	hangmanArray(computerGuess); 
// 	arrayComGuess(computerGuess);	
// };	
// lives(computerGuess);
  //var showLives = document.getElementById("mylives");