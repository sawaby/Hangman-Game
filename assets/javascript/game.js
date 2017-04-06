

var wins = 0; 
var hangman = []; //empty array to be filled after user guesses
var i;
var showLives = 10;
var chosenWord;
var image = document.createElement("img");
image.setAttribute("id", "showImg");

//object definition for setting images in accordance to guesses
var options = {};
options = {football: function(){
					image.setAttribute("src", "assets/images/football.jpg");
					document.querySelector("#displayImg").appendChild(image);
				},
				basketball: function(){
						image.setAttribute("src", "assets/images/basketball.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },	
				soccer: function(){
						image.setAttribute("src", "assets/images/soccer.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },	
				tennis: function(){
						image.setAttribute("src", "assets/images/Tennis.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },	
				swimming: function(){
						image.setAttribute("src", "assets/images/swimming.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },	
				badminton: function(){
						image.setAttribute("src", "assets/images/badminton.JPG");
						document.querySelector("#displayImg").appendChild(image);
						 },	
				
				cycling: function(){
						image.setAttribute("src", "assets/images/cycling.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },
				golf: function(){
						image.setAttribute("src", "assets/images/golf.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },
				hunting: function(){
						image.setAttribute("src", "assets/images/hunting.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },
				running: function(){
						image.setAttribute("src", "assets/images/running.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },
				sailing: function(){
						image.setAttribute("src", "assets/images/sailing.jpg");
						document.querySelector("#displayImg").appendChild(image);
						 },
				};	

//resetGame function will reset the game when the user wins or looses
function resetGame(){
	// choose a random word
 	chosenWord = Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)];
 	showLives = 10;
 	document.querySelector("#showLives").innerHTML = showLives;
 	document.querySelector("#letterTyped").innerHTML = " ";
 	//functions calling
 	hangmanArray(chosenWord);
 	document.querySelector("#wins").innerHTML = wins;
 	//reseting hangman drawing
 	ctx.clearRect(0, 0, 235, 180);
	ctx.beginPath();


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



function playAudio() { 
	//x.autoplay = true;
	document.getElementById("myaudio").innerHTML = x;
} 
// function playAudio() {
// 	var audioElement = document.createElement("audio");
// 	audioElement.setAttribute("src", "Assets/captainplanet24.mp3");
// 	audioElement.play
// }
// function pauseAudio() { 
//     x.pause(); 
// } 
	

//hangman drawing object
var hangmanObj= {};
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.lineWidth = 6;
hangmanObj = {vertical: function(){
			//vertical line
			ctx.beginPath();
			ctx.moveTo(20, 30);
			ctx.lineTo(20, 160);
			ctx.stroke();
		},
		bottom: function(){

			//bottom line
			ctx.beginPath();
			ctx.moveTo(60, 150);
			ctx.lineTo(20, 150);
			ctx.stroke();
		},
		upLine: function(){
		//up line
			ctx.beginPath();
			ctx.moveTo(20, 30);
			ctx.lineTo(100, 30);
			ctx.stroke();

		},
		strLine: function(){
			//string line
			ctx.beginPath();
			ctx.moveTo(100, 30);
			ctx.lineTo(100, 50);
			ctx.stroke();
		},
		bodyLine: function(){
			//body line
			ctx.beginPath();
			ctx.moveTo(100, 90);
			ctx.lineTo(100, 130);
			ctx.stroke();
		},
		leftHand: function(){
			//left hand line
			ctx.beginPath();
			ctx.moveTo(100, 100);
			ctx.lineTo(80, 120);
			ctx.stroke();
		},
		rigthHand: function(){
			//rigth hand line
			ctx.beginPath();
			ctx.moveTo(100, 100);
			ctx.lineTo(120, 120);
			ctx.stroke();
		},
		leftLeg: function(){
			//left leg line
			ctx.beginPath();
			ctx.moveTo(100, 130);
			ctx.lineTo(80, 150);
			ctx.stroke();
		},
		rigthLeg: function(){
			//rigth leg line
			ctx.beginPath();
			ctx.moveTo(100, 130);
			ctx.lineTo(120, 150);
			ctx.stroke();
		},
		head: function(){
			//head
			ctx.beginPath();
			ctx.arc(100, 70, 20, 0, 2 * Math.PI);
			ctx.stroke();
		}

}; 


//hangman Draw conditions, this method is called where show live is increased
function hangmanCall(){
	hangmanObj.bottom();
	if(showLives == 9){
		hangmanObj.vertical();
	}else if(showLives == 8){
		hangmanObj.upLine();
	}else if(showLives == 7){
		hangmanObj.strLine();
	}else if(showLives == 6){
		hangmanObj.head();
	}else if(showLives == 5){
		hangmanObj.bodyLine();
	}else if(showLives == 4){
		hangmanObj.leftHand();
	}else if(showLives == 3){
		hangmanObj.rigthHand();
	}else if(showLives == 2){
		hangmanObj.leftLeg();
	}else if(showLives <=1){
		hangmanObj.rigthLeg();
	}
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
				hangman[i] = letter;
					
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
		// calling hangmanCall function to draw hangman whenever the user looses a chance
		hangmanCall();
		
		
		//if number of chances equals 0 reset the game
		if(showLives <= 0){
			alert("You have no more chances to guess!  Play Again.");
			resetGame();
		}

			
		//user wins if enteres the word correctly, show number of wins
		if (hangman.join("") == chosenWord) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			// display image
			if(chosenWord == "football"){
				options.football();
			}else if(chosenWord == "basketball"){
				options.basketball();
			}else if(chosenWord == "badminton"){
				options.badminton();
			}else if(chosenWord == "tennis"){
				options.tennis();
			}else if(chosenWord == "soccer"){
				options.soccer();
			}else if(chosenWord == "golf"){
				options.golf();
			}else if(chosenWord == "swimming"){
				options.swimming();
			}else if(chosenWord == "cycling"){
				options.cycling();
			}else if(chosenWord == "hunting"){
				options.hunting();
			}else if(chosenWord == "running"){
				options.running();
			}else if(chosenWord == "sailing"){
				options.sailing();
			}
			var audio = new Audio('./assets/music.mp3');
			audio.play();
				playAudio();
			

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
