var questionCounter = 1;
var quizBox = $("#quizBox");
var answer = '';


function quizBoxNfirstQuestion(stemList, listNumber) {
	//function cancel button
	function cancelQuiz() {
		questionCounter = 1;
		quizBox = $("#quizBox");
		answer = '';
		quizBox.children().remove();
	}

	//function question and answer input elements
	function question() {
		$('#questionNumber').text(questionCounter + ' / 25')
		$('#stemQuestion').text(stemList[questionCounter-1][1] + ' ');
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

	//click next to get to next question
	//$('#answerButton:contains("Next")').on('click', function() {
	$('#answerButton').on('click', function() {
		if ($(this).is(':contains("Next")')) {
			answer = $('#answer').val();
			console.log(questionCounter, answer);
			questionCounter += 1;
			if (questionCounter < stemList.length) {
				nextQuestion();
			}
			if (questionCounter === stemList.length) {
				finishQuiz();
			}
		}
		if ($(this).is(':contains("Finish")')) {
	//click finish to finish the quiz
	//$('#answerButton:contains("Finish")').on('click', function() {
			console.log('in finish button');
	//});
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
	sortStemList(stemList_5);
	quizBoxNfirstQuestion(stemList_5, 5);
});
