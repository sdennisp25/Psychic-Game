var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guessesLeft = 10;
var guessedLetters = [];
var wins = 1;
var losses = 1;



//most important part to fire the letters
document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(event);
	// guessedLetters.push(letters)

	//got the computer to guess random letters
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerGuess);
	
}











//guessletters.push(letter)
// document.getElementById("wins").innerHTML = wins ++;
//push.play()
//wins.play()
//resetgame()

