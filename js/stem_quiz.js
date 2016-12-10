function stemQuiz(stemList, listNumber) {
	
	var targetScore = 0;
	var answer = '';
	var messageCorrectTitle = '<h3>Correct: ';
	var messageCorrect = '<p>';
	var messageWrongTitle = '<h3>Wrong: ';
	var messageWrong = '<p>';
	var quizListNumber = listNumber;
	var totalQuestions = stemList.length;
	var countCorrect = 0;
	var countWrong = 0;
	var message = '';
	var elResult = document.getElementById("quizResult");
	
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
		
		//if user click cancel button in prompt box, the program will stop and show cancelled message
		if (!answer) {
		elResult.innerHTML = "The quiz is cancelled.";	
		}
		
		if (answer.toLowerCase() === stemList[i][2].toLowerCase()) {
			countCorrect += 1;
			messageCorrect += ' ' + stemList[i][1] + ' ';
		} else {
			messageWrong += ' ' + stemList[i][1] + stemList[i][3] + ': ' + stemList[i][2] + '</p><p>';
		}
	}

	countWrong = totalQuestions - countCorrect;

	if (countCorrect === totalQuestions) {
		message = '<h2>Quiz#' + quizListNumber + ' Excellent!! Your got all ' +  totalQuestions + ' questions correct!</h2>'
	            + messageCorrectTitle + countCorrect + '</h3>' + messageCorrect + '</p>' 
	            + messageWrongTitle + countWrong + '</h3>' + messageWrong + '</p>';
	} else {
		message = '<h2>Quiz#' + quizListNumber + ' Score: '  + countCorrect + '/' + totalQuestions + '</h2>'
	  	        + messageCorrectTitle + countCorrect + '</h3>' + messageCorrect + '</p>' 
	            + messageWrongTitle + countWrong + '</h3>' + messageWrong + '</p>';
	  }
	elResult.innerHTML = message;
}
