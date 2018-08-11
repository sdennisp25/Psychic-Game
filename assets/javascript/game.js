
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var guessesLeft = 10;
var guessedLetters = [];
var wins = 1;
var losses = 1;

//got the computer to guess random letters
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);


//most important part to fire the letters
document.onkeyup = function (event) {
	var userGuess = event.key;
	console.log(event);
	//adds the letter user presses to the guessedLetters
	guessedLetters.push(event.key);
	console.log(guessedLetters);
	document.getElementById("lettersGuessed").innerHTML = guessedLetters;

if (event.key === computerGuess) {
	document.getElementById("yourWins").innerHTML = wins; wins++;
	alert("YOU WIN");
	resetgame();
}

else {
	guessesLeft--;
	//takes points away from your guesses
	document.getElementById("guesses").innerHTML = guessesLeft; 
	console.log(guessesLeft);
}

//once your guesses run out, reset th game
if (guessesLeft ===0){
	document.getElementById("yourLosses").innerHTML = losses; losses++;
	alert("YOU LOSE");
	resetgame();

}
function resetgame(){
	guessesLeft = 10;
	guessedLetters = []
	computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerGuess);

}

}




//guessletters.push(letter)
// document.getElementById("wins").innerHTML = wins ++;
//push.play()
//wins.play()
//resetgame()

