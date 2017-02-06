var alpha = ["a","b","c","d","e",
				"f","g","h","i","j",
				"k","l","m","n","o",
				"p","q","r","s","t",
				"u","v","w","x","y",
				"z"];
var comptLetter = alpha[Math.floor(Math.random() * 26)]; 
var wins = 0;
var losses = 0;
var guessLeft = 15;
var letterGuessed = [];
console.log(comptLetter);






document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();	
	
	
	
	if ( letter !== comptLetter && letterGuessed.indexOf(letter) <0 && alpha.indexOf(letter) >=0){
		guessLeft -= 1;
		document.getElementById("guessLeft").innerHTML = guessLeft;
		letterGuessed = letterGuessed  + letter;
		document.getElementById("lettersG").innerHTML = letterGuessed;
	}
	if (alpha.indexOf(letter)<= 0 ){
		alert("You can only use keys A-Z.")
	}
	
	
	
	if (guessLeft == 0){
		losses += 1;
		document.getElementById("losses").innerHTML = losses;
		guessLeft = 15;
		document.getElementById("guessLeft").innerHTML = guessLeft;
		letterGuessed = "";
		document.getElementById("lettersG").innerHTML = letterGuessed;
		

	}
	
	if ( letter === comptLetter){
		wins += 1;
		document.getElementById("wins").innerHTML = wins;
		guessLeft = 15;
		letterGuessed = "";
		
	}
	if (letterGuessed == ""){
		comptLetter = alpha[Math.floor(Math.random() * 26)];
		console.log(comptLetter);
	}

}

