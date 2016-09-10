
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Variables ---*/
	var count;
	var userGuess; 
	var randomNumber;
	var distanceFromNumber;
	var pastGuesses;
	var guessHtml;
	var wonGame = false;  	

	$('form').submit(function(event) {
		event.preventDefault();
		getUserGuess();

	});
	$('a.new').click(newGame);

	/*--- Start new game ---*/
	function newGame() {
		$('form').find('input[type=submit]')
		resetVar();
		newNumber();
	}

	/*--- Generate number ---*/
  	function newNumber() { 
  		randomNumber = Math.floor((Math.random() * 101) + 1);
  		console.log(randomNumber);
  	};

  	/*--- Get user guess ---*/
  	function getUserGuess() {
  		userGuess = $form.find('#userGuess').val();
  		$form.find('#userGuess').val('');
  		if(validGuess()){return};
  		hotOrCold();
  		trackGuesses();
  		guessCount();
  	}

  	/*--- Valid user guess ---*/
  	function validGuess() {
  		if (!(userGuess % 1 === 0)) {
  			alert("Please enter a number");
  			return true
  		}
  		if (!(userGuess > 0) || !(userGuess < 101)) {
  			alert("Please enter a number between 0 and 100");
  			return true
  		}
  		return false
  	}

  	/*--- Feedback for user ---*/
  	function hotOrCold() {
  		distanceFromNumber = Math.abs(randomNumber - userGuess);
  		if (distanceFromNumber === 0) {
  			$('#feedback').text("You guessed it!!!");
  			wonGame = true;
  		} else if (distanceFromNumber < 4) {
  			$('#feedback').text(" Very Hot!");
  		} else if (distanceFromNumber < 8) {
  			$('#feedback').text("Hot");
  		} else if (distanceFromNumber < 13) {
  			$('#feedback').text("Warm");
  		} else if (distanceFromNumber < 20) {
  			$('#feedback').text("Lukewarm");
  		} else if (distanceFromNumber < 30) {
  			$('#feedback').text("Cool");
  		} else if (distanceFromNumber < 40) {
  			$('#feedback').text("Cold");
  		} else  {
  			$('#feedback').text("Ice Cold!");
  		}
  	} 

  	/*--- Track number of guesses ---*/
  	function guessCount() {
  		count++;
  	}

  	/*--- List numbers guessed ---*/
  	function trackGuesses() {
  		pastGuesses.push(userGuess);
  		guessHtml = ""
  		if (pastGuesses[0].length) {
  			$('#guessList').append('<li>' + value + '</li>')
  		}
  	}
 
 	/*--- Reset variables ---*/
 	function resetVar() {
 		count = 0;
 		pastGuesses = [];
 		guessHtml = '';
 		userGuess = '';
 		userFeedback = "Make your Guess!"
 	}

});


