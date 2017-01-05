//function to build quiz box
function quizBoxNfirstQuestion(stemList, listNumber) {
	var questionCounter = 1;
	var totalQuestions = stemList.length;
	var quizBox = $("#quizBox");
	var answer = '';
	var correctCount = 0;
	var wrongCount = 0;
	var resultTitle = '<h2>Quiz#' + listNumber + ' Score: ';
	var correctTitle = '<h3>Correct: ';
	var wrongTitle = '<h3>Wrong: ';
	var messageCorrect = '<p>';
	var messageWrong = '<p>';
	var listIndex = questionCounter - 1;

	//function cancel button
	function cancelQuiz() {
		quizBox.children().remove();
		$('#mainPageScreen').removeClass('inactiveMainPage');
	}

	//function for question and answer input elements inside quiz box
	function question() {
		$('#questionNumber').text(questionCounter + ' / ' + totalQuestions)
		$('#stemQuestion').text(stemList[listIndex][1] + ' ');
		$('#answer').val('');
		$('#exampleVocabulary').text(stemList[listIndex][3]);
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
			messageWrong += ' ' + stemList[listIndex][1] + ': ' + stemList[listIndex][2] + stemList[listIndex][3] + '</p><p>';
		}
	}

	function resultReport() {
		wrongCount = totalQuestions - correctCount;
		resultTitle +=  correctCount + '/' + totalQuestions + '</h2>';
		correctTitle += correctCount + '</h3>';
		wrongTitle += wrongCount + '</h3>';
		$('#quizResult').html(resultTitle + correctTitle + messageCorrect + '</p>'
													+ wrongTitle + messageWrong + '</p>');
	}

	//build quiz body
	quizBox.append("<h1>Stem Quiz " + listNumber + "</h1>");
	quizBox.append("<h2 id='questionNumber'>" + questionCounter + " / " + totalQuestions + "</h2>");
	quizBox.append("<label id='stemQuestion'></label>");
	quizBox.append("<input id='answer' type='text' autofocus='autofocus'>");
	quizBox.append("<button type='button' id='answerButton'>Next</button>");
	quizBox.append("<p id='exampleVocabulary'></p>");

	$('#stemQuestion').text(stemList[listIndex][1] + ' ');
	$('#exampleVocabulary').text(stemList[listIndex][3]);

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
			if (questionCounter < totalQuestions) {
				nextQuestion();
			}
			if (questionCounter === totalQuestions) {
				finishQuiz();
			}
		//}
		//if ($(this).is(':contains("Finish")')) {
	//click finish to finish the quiz
	//$('#answerButton:contains("Finish")').on('click', function() {
		  if (questionCounter > totalQuestions) {
				resultReport();
				cancelQuiz(); //use this function to quit quiz box
			}
	});

	//eventlistener: press enter on keyboard in input field to get to next question
	$('#answer').on('keypress', function(e) {
		if (e.keyCode === 13) {
			answer = $('#answer').val();
			checkAnswer(answer);
			questionCounter += 1;
			listIndex = questionCounter - 1;
			if (questionCounter < totalQuestions) {
				nextQuestion();
			}
			if (questionCounter === totalQuestions) {
				finishQuiz();
			}
			if (questionCounter > totalQuestions) {
				resultReport();
				cancelQuiz(); //use this function to quit quiz box
			}
		}
	});
}    //end of function quizBoxNfirstQuestion



//function: randomlize the stem question to make the questions not show up in a fixed order
function sortStemList(stemList) {
	for (var j=0; j<stemList.length; j += 1) {
		stemList[j][0] = Math.floor(Math.random() * 1000);
	}

	stemList.sort(function(a, b) {
		return a[0]-b[0];
	});
}


//to add root words after each quiz button
$('#container .root').each(function(index) {
	var stemWords = '';
	for (i=0; i<allStemList[index].length; i += 1) {
		stemWords += '' + allStemList[index][i][1]+':'
								+ allStemList[index][i][2]+ '; ';
	}
	$(this).text(stemWords);
});


function quizButton(list, listNumber) {
	$('#quizResult').text('');  //clear previous quiz result
	$('#mainPageScreen').addClass('inactiveMainPage');
	sortStemList(list);
	quizBoxNfirstQuestion(list, listNumber);
}

//eventlistener: click different quiz button on main page
$('#quiz_4').on('click', function() {
  quizButton(stemList_4, 4);
});

$('#quiz_5').on('click', function() {
  quizButton(stemList_5, 5);
});

$('#quiz_6').on('click', function() {
	quizButton(stemList_6, 6);
});

$('#quiz_7').on('click', function() {
	quizButton(stemList_7, 7);
});
