var questionCounter = 1;
var quizBox = $("#quizBox");


function quizBoxNfirstQuestion(stemList, listNumber) {
	//function cancel button
	function cancelQuiz() {
		quizBox.children().remove();
	}

	//function next quesiton
	function nextQuestion() {
			$('#questionNumber').text(questionCounter + ' / 25')
			$('#stemQuestion').text(stemList[questionCounter-1][1] + ' ');
	}

	function finishQuiz() {
			$('#answerButton').text('');
			$('#answerButton').text('Finish');
			$('#questionNumber').text(questionCounter + ' / 25');
			$('#stemQuestion').text(stemList[questionCounter-1][1] + ' ');
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

	//*** eventlistener ***//
	//click cancle button to quit quiz
	$('#cancelQuiz').on('click', function() {
		cancelQuiz();
	});
	$('#answerButton:contains("Next")').on('click', function() {
		questionCounter += 1;
		if (questionCounter < stemList.length) {
			nextQuestion();
			console.log(questionCounter, $('#answerButton').text());
		}
		if (questionCounter === stemList.length) {
			finishQuiz();
			console.log(questionCounter, $('#answerButton').text());
		}
	$('#answerButton:contains("Finish")').on('click', function() {
		console.log('in finish button', questionCounter ++);
	});

	});
}

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
