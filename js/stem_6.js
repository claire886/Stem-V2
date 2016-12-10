function stemQuiz(stemList) {
	
	var targetScore = 0;
	var answer = '';
	var messageCorrectTitle = '<h3>Correct: ';
	var messageCorrect = '<p>';
	var messageWrongTitle = '<h3>Wrong: ';
	var messageWrong = '<p>';
	var countCorrect = 0;
	var countWrong = 0;
	var message = '';
	var elResult = document.getElementById("quizResult");
	
	elResult.innerHTML = "The quiz is cancelled.";
	
	/*
	assign a random number to stemList[][0] for sorting. So the order of questions will be different each time.
	*/
	for (var j=0; j<stemList.length; j += 1) {
		stemList[j][0] = Math.floor(Math.random() * 1000);
	}

	stemList.sort(function(a, b) {
		return a[0]-b[0];
	});

	for (var i=0; i<stemList.length; i += 1) {
		answer = prompt(stemList[i][1] + " : " + stemList[i][3]);
		if (answer.toLowerCase() === stemList[i][2].toLowerCase()) {
			countCorrect += 1;
			messageCorrect += ' ' + stemList[i][1] + ' ';
		} else {
			messageWrong += ' ' + stemList[i][1] + stemList[i][3] + ': ' + stemList[i][2] + '</p><p>';
		}
	}

	countWrong = 25 - countCorrect;

	if (countCorrect === 25) {
		message = '<h2>Excellent!! Your got all 25 questions correct!</h2>'
	            + messageCorrectTitle + countCorrect + '</h3>' + messageCorrect + '</p>' 
	            + messageWrongTitle + countWrong + '</h3>' + messageWrong + '</p>';
	} else {
		message = '<h2>Your score: ' + countCorrect + '/25</h2>'
	  	        + messageCorrectTitle + countCorrect + '</h3>' + messageCorrect + '</p>' 
	            + messageWrongTitle + countWrong + '</h3>' + messageWrong + '</p>';
	  }
	elResult.innerHTML = message;
}
