

var wins = 0; 
var hangman = []; //empty array to be filled after user guesses
var i;
var showLives = 15;
var options = ["football","basketball","soccer", "tennis", "swimming", "badminton",
 	"cycling", "golf", "hunting", "running", "sailing"];
var chosenWord;

function resetGame(){
	// choose a random word
 	chosenWord = options[Math.floor(Math.random() * options.length)];
 	showLives = 15;
 	document.querySelector("#showLives").innerHTML = showLives;
 	document.querySelector("#letterTyped").innerHTML = " ";
 	//functions calling
 	hangmanArray(chosenWord);
 	document.querySelector("#wins").innerHTML = wins;
}



function hangmanArray(chosenWord){
	hangman = [];
	// initializing hangman array with "_"
	for(i = 0; i<chosenWord.length; i++){
		hangman[i] = "_"
	}
	// printing the initial values or hangman
	document.querySelector("#emptyArray").innerHTML = hangman.join(" ");
}


	

// when user press a key, on key up this statement triggers the event
document.onkeyup = function(event){
	// any letter changed to lowercase
	var letter = event.key.toLowerCase();
	//check if keypressed is actually a letter pressed
	if((event.keyCode >= 65 && event.keyCode <= 90)){
		//display letter typed so far in uppercase
		document.querySelector("#letterTyped").innerHTML += letter.toUpperCase();

		// iterate over the random word to find if the entered key is in there
		for(i = 0; i<chosenWord.length; i++){
			if(letter === chosenWord[i]){
				if(chosenWord[i] == letter){
					hangman[i] = letter;
				}	
			}		
		}
		//display the hangman array	
		document.querySelector("#emptyArray").innerHTML = hangman.join(" ");

		/**checks the number of chances the user has, and decrease the number of chances
		if the user enteres a wrong guess**/
		if(chosenWord.indexOf(letter) == -1){
			showLives -=1;
			document.querySelector("#showLives").innerHTML = showLives;
		}
		//if number of chances equals 0 reset the game
		if(showLives < 1){
			alert("You have no more chances to guess!  Play Again.");
			resetGame();
		}
			
		//user wins if enteres the word correctly, show number of wins
		if (hangman.join("") == chosenWord) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			//if the user wins, wait 1 sec, then reset the game
			setTimeout(resetGame, 1000);
		}	
	}
	else {
		alert("Please Enter a letter");
	}
};

//calling the resetGame function will restart the game
resetGame();
