function quizBoxNfirstQuestion(stemList, listNumber) {
	var questionCounter = 1;
	var quizBox = $("#quizBox");
	var answer = '';
	var correctCount = 0;
	var wrongCount = 0;
	var messageCorrect = '';
	var messageWrong = '';
	var listIndex = questionCounter - 1;

	//function cancel button
	function cancelQuiz() {
		quizBox.children().remove();
	}

	//function question and answer input elements
	function question() {
		$('#questionNumber').text(questionCounter + ' / 25')
		$('#stemQuestion').text(stemList[listIndex][1] + ' ');
		$('#answer').val('');
		$('#answer').focus();
	}

	//function next question
	function nextQuestion() {
		question();
	}

	//function last question
	function finishQuiz() {
		$('#answerButton').text('Finish');
		question();
	}

	//function to check if answer is correct or not
	function checkAnswer(answer) {
		if (answer.toLowerCase() === stemList[listIndex][2].toLowerCase()) {
			correctCount += 1;
			messageCorrect += ' ' + stemList[listIndex][1] + ' ';
		} else {
			messageWrong += ' ' + stemList[listIndex][1] + stemList[listIndex][3] + ': ' + stemList[listIndex][2] + '</p><p>';
		}
	}

	//build quiz body
	quizBox.append("<h1>Stem Quiz " + listNumber + "</h1>");
	quizBox.append("<h2 id='questionNumber'>" + questionCounter + " / 25 </h2>");
	quizBox.append("<label id='stemQuestion'></label>");
	quizBox.append("<input id='answer' type='text' autofocus='autofocus'>");
	quizBox.append("<button type='button' id='answerButton'>Next</button>");

	$('#stemQuestion').text(stemList[questionCounter-1][1] + ' ');

	//add cancel button
	quizBox.append("<button type='button' id='cancelQuiz'>Cancel</button>");

	//*** eventlistener inside quiz box***//
	//click cancle button to quit quiz
	$('#cancelQuiz').on('click', function() {
		cancelQuiz();
	});

	//eventlistener: click next to get to next question
	//$('#answerButton:contains("Next")').on('click', function() {
	$('#answerButton').on('click', function() {
		//if ($(this).is(':contains("Next")')) {
			answer = $('#answer').val();
			checkAnswer(answer);
			questionCounter += 1;
			listIndex = questionCounter - 1;
			console.log(questionCounter);
			if (questionCounter < stemList.length) {
				nextQuestion();
			}
			if (questionCounter === stemList.length) {
				finishQuiz();
			}
		//}
		//if ($(this).is(':contains("Finish")')) {
	//click finish to finish the quiz
	//$('#answerButton:contains("Finish")').on('click', function() {
		  if (questionCounter > stemList.length) {
				$('#quizResult').html(messageCorrect);
				$('#quizResult').html(messageWrong);
				console.log(messageCorrect, correctCount, wrongCount);
				cancelQuiz(); //use this function to reset all the variables
	//});
			}
	});

	//eventlistener: press enter on keyboard in input field to get to next question
	$('#answer').on('keypress', function(e) {
		if (e.keyCode === 13) {
			answer = $('#answer').val();
			checkAnswer(answer);
			questionCounter += 1;
			listIndex = questionCounter - 1;
			if (questionCounter < stemList.length) {
				nextQuestion();
			}
			if (questionCounter === stemList.length) {
				finishQuiz();
			}
			if (questionCounter > stemList.length) {
				$('#quizResult').html(messageCorrect);
				$('#quizResult').html(messageWrong);
				console.log(messageCorrect, correctCount, wrongCount);
				cancelQuiz(); //use this function to reset all the variables
			}
		}
	});
}    //end of function quizBoxNfirstQuestion

//function: randomlize the stem question
function sortStemList(stemList) {
	for (var j=0; j<stemList.length; j += 1) {
		stemList[j][0] = Math.floor(Math.random() * 1000);
	}

	stemList.sort(function(a, b) {
		return a[0]-b[0];
	});
}

//click different stem quiz button on main page
$('#quiz_5').on('click', function() {
	$('#quizResult').text('');
	sortStemList(stemList_5);
	quizBoxNfirstQuestion(stemList_5, 5);
});
