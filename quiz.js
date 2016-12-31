var questionCounter = 1;
var quizBox = $("#quizBox");

function quizBoxNfirstQuestion(stemList, listNumber) {
	quizBox.append("<h1>Stem Quiz " + listNumber + "</h1>");
	quizBox.append("<h2 id='questionNumber'>" + questionCounter + " / 25 </h2>");
	quizBox.append("<label id='stemQuestion'>**stemQuestion: <input id='answer' type='text' autofocus='autofocus'></label>");
	quizBox.append("<button type='button' onclick='nextQuestion()'>Enter</button>");

//add cancel button
	quizBox.append("<button type='button' id='cancelQuiz'>Cancel</button>");
}

function cancelQuiz() {
	console.log("i am in cancel quiz");
	quizBox.children().remove();
	$("#quizResult").text("The quiz is cancelled");
	}

//click different stem quiz button on main page
$('#quiz_5').on('click', function() {
	quizBoxNfirstQuestion("stemList_5", 5);
});



//click cancle button in quiz box
$('#cancelQuiz').on('click', function() {
	cancelQuiz();
});
