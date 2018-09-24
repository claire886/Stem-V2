
//======================================================================
//function: quizbox for fill in the black
//function to build quiz box
function quizBoxNfirstQuestion(stemList, listNumber, quizType) {
	var questionCounter = 1;
	var listIndex = questionCounter - 1;  //nth question
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

	//function cancel button
		function cancelQuiz() {
			quizBox.children().remove();
			$('#mainPageScreen').removeClass('inactiveMainPage');
		}

	//function for question and answer input elements inside quiz box
		function question() {
			$('#questionNumber').text(questionCounter + ' / ' + totalQuestions);
			$('#stemQuestion').text(stemList[listIndex][0] + ' ');
			$('#answer').val('');
			$('#exampleVocabulary').text(stemList[listIndex][2]);
			$('#answer').focus();
		}

	//function: generate 4 choice items, incluing correct answer, for choice quiz
			function generateChoiceItems(currentQuestion) {
				var answerPool = [];
				choiceItems.splice(0, choiceItems.length);  //empty choiceItems array
				choiceItems.push(currentQuestion[1]);  //put correct answer into choice pool
				//collect all answer from stem list, not includeing corrcet answer
				for (i=0; i<stemList.length; i++) {
					if (stemList[i][1] !== currentQuestion[1]) {
						if (answerPool.indexOf(stemList[i][1]) === -1) {  //noly add unique answer
							answerPool.push(stemList[i][1]);
						}
					}
				}
				sortStemList(answerPool);
				for (i=0; i<3; i++) { //add 3 answers into choiceItems
					choiceItems.push(answerPool[i]);
				}
				sortStemList(choiceItems);
			}

 //funciton: next question for multiple choice
 		function choiceNextQuestion() {
			generateChoiceItems(stemList[listIndex]);
			$('#choiceQuestion').html(questionCounter + ".&nbsp&nbsp" +
															 "<span id='choiceQuestionItems'>" + stemList[listIndex][0] + "</span>");
			$('#choiceQuestionItems').text(stemList[listIndex][0]);
			$('.labelChoiceItems').remove();
			for (i=0; i<=3; i++) {
				$('#radioChoiceItems').append("<label class='labelChoiceItems'><input type='radio' name='choiceItems' value='" + choiceItems[i] + "'>" +
		              						 choiceItems[i] + "</label>");
			}
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

  //function choice last question
		function choicefinishQuiz() {
			$('#choiceAnswerButton').text('Finish');
			choiceNextQuestion();
		}

		function moveToNextStep() {
		  questionCounter += 1;
			listIndex = questionCounter - 1;
			if (questionCounter < totalQuestions) {
				if (quizType === 'blank') {
					nextQuestion();
				} else if (quizType === 'choice') {
					choiceNextQuestion();
				}
			}
			if (questionCounter === totalQuestions) {
				if (quizType === 'blank') {
				 finishQuiz();
			 } else if (quizType === 'choice') {
				 choicefinishQuiz();
			 }
			}
			if (questionCounter > totalQuestions) {
				resultReport();
				cancelQuiz(); //use this function to quit quiz box
			}
		}

	//function to check if answer is correct or not
		function checkAnswer(answer) {
			if (answer.trim().toLowerCase() === stemList[listIndex][1].toLowerCase()) {
				correctCount += 1;
				messageCorrect += ' ' + stemList[listIndex][0] + ' ';
			} else {
				messageWrong += ' ' + '<span class="stemWords">' + stemList[listIndex][0] +
												': ' + stemList[listIndex][1] + '</span>' + stemList[listIndex][2] +
												' ' + '<span class="wrongAnswer">' + answer + '</span>' + '</p><p>';
			}
		}

		function resultReport() {
			wrongCount = totalQuestions - correctCount;
			resultTitle +=  correctCount + '/' + totalQuestions + '</h2>';
			correctTitle += correctCount + '</h3>';
			wrongTitle += wrongCount + '</h3>';
			$('#quizResult').html(resultTitle + correctTitle + messageCorrect + '</p>'
														+ wrongTitle + messageWrong + '</p>');

		//make it scroll to resultReport
			var offset = $('#quizResult').offset();
			window.scrollTo(0, offset.top-150);
		}

//================================================================
//build different quizbox elements according to quizType value
	if (quizType === 'blank') {
		//build quiz body for fill in the blank
		window.scrollTo(0, 100);
		quizBox.append("<h2 id='quizBoxTitle'>Stem Quiz " + listNumber + "</h2>");
		quizBox.append("<h2 id='questionNumber'>" + questionCounter + " / " + totalQuestions + "</h2>");
		quizBox.append("<label id='stemQuestion'></label>");
		quizBox.append("<input id='answer' type='text' autofocus='autofocus'>");
		quizBox.append("<button type='button' id='answerButton'>Next</button>");
		quizBox.append("<p id='exampleVocabulary'></p>");
		$('#answer').focus();

		$('#stemQuestion').text(stemList[listIndex][0] + ' ');
		$('#exampleVocabulary').text(stemList[listIndex][2]);

		//add cancel button
		quizBox.append("<button type='button' id='cancelQuiz'>Cancel</button>");

		//*** eventlistener inside quiz box***//
		//click cancle button to quit quiz
		$('#cancelQuiz').on('click', function() {
			cancelQuiz();
		});

		//eventlistener: click next to get to next question
		$('#answerButton').on('click', function() {
				answer = $('#answer').val();
				checkAnswer(answer);
				moveToNextStep();
		});
    //eventlistener: press enter on keyboard in input field to get to next question
		$('#answer').on('keypress', function(e) {
			if (e.keyCode === 13) {
				answer = $('#answer').val();
				checkAnswer(answer);
				moveToNextStep();
			}
		});
//build quizbox for multiple choice quiz
	} else if (quizType === 'choice') {
		var choiceItems = [];
		generateChoiceItems(stemList[listIndex]);
		window.scrollTo(0, 100);
		quizBox.append("<h2>Stem Quiz " + listNumber + "</h1>");
		quizBox.append("<h2 id='choiceQuestion'>" + questionCounter + ".&nbsp&nbsp" +
										"<span id='choiceQuestionItems'>" + stemList[listIndex][0] + "</span></h2>");
		quizBox.append("<div id='radioChoiceItems'>");
		for (i=0; i<=3; i++) {
			quizBox.append("<label class='labelChoiceItems'><input type='radio' name='choiceItems' value='" + choiceItems[i] + "'>" +
										 choiceItems[i] + "</label>");
		}
		quizBox.append("</div>");
		quizBox.append("<button type='button' id='choiceAnswerButton'>Next</button>");
		quizBox.append("<button type='button' id='cancelQuiz'>Cancel</button>");
		$('#choiceAnswerButton').focus();

		//*** eventlistener: click next button inside quiz box***//
		$('#choiceAnswerButton').on('click', function() {
				answer = $('input[name="choiceItems"]:checked').val();
				if (!answer) {
					$('#alertSelectChoice').removeClass();
				} else {
					checkAnswer(answer);
					moveToNextStep();
				}
		});

//eventlistener: button will get focus after a answer is chose, by this way use can hit enter key on keyboard to get to next question
		$('#radioChoiceItems').on('click', function() {
			$('#choiceAnswerButton').focus();
		});

// 3/18 cannot solve memory leak(due to closure, I guess) problem useing this method, comment the codes out
//problem happened if user click canel aferward: like closure problem that variables are messed up
    //eventlistener: press enter on keyboard to get to next question

//		$('body').on('keypress', function(e) {
//			var tmpFunction = {
//				avoidClosureFuction: function() {
//					answer = $('input[name="choiceItems"]:checked').val();
//					if (e.keyCode === 13) {
//					if (!answer) {
//							$('#alertSelectChoice').removeClass();
//						} else {
//					  	  checkAnswer(answer);
//				  		  moveToNextStep();
//						  }
//		  		}
//				}
//		}
//		tmpFunction.avoidClosureFuction();
//		delete tmpFunction.avoidClosureFuction;
//		});

		//eventlistener: click button to close alert box
		$('#buttonAlertSelectChoice').on('click', function() {
			$('#alertSelectChoice').addClass('hide');
		});
		//click cancle button to quit quiz
		$('#cancelQuiz').on('click', function() {
			cancelQuiz();
		});

	}
}   //end of quizBoxNfirstQuestion
//=========================================================================================


//function: randomlize the stem question to make the questions not show up in a fixed order
function sortStemList(stemList) {
	for (i=stemList.length-1; i>0; i--) {
		var j = Math.floor(Math.random()*(i+1));
		var tmp = stemList[i];
		stemList[i] = stemList[j];
		stemList[j] = tmp;
	}
}

//function: will invoke when quiz buttons are clicked
function quizButton(list, listNumber, quizType) {
	$('#quizResult').text('');  //clear previous quiz result
	$('#mainPageScreen').addClass('inactiveMainPage');
	sortStemList(list);
	quizBoxNfirstQuestion(list, listNumber, quizType);
}

//function: use ajax to load stem lists data(in JSON format) from server
function ajaxGetStemList(callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if (xhr.status === 200) {
			callback(JSON.parse(xhr.responseText));
		}
	}
	xhr.open('GET', 'stem_list.json', true);
	xhr.send(null);
}

//function: use callback method to get stem lists data loaded by ajax
	var stemJsonData = {};

	ajaxGetStemList(function(jsonData) {
		stemJsonData = jsonData;

		//to build main page: adding quiz buttons and crate space for stem root and words
		var htmlQuizButton = "";
		for(i=0; i<stemJsonData.allStemList.length; i++) {
			htmlQuizButton += "<div class='stemQuizButtons'><button type='button' id='quiz_" + (i+1) +
												"'>Quiz " + (i+1) + "</button><p class='root' id='stemList_"
												+ (i+1) +"'> </p></div>";
		}
		$("#container").html(htmlQuizButton);

		//to add root words after each quiz button
		$('#container .root').each(function(index) {
			var stemWords = '';
			var listObjectKey = "stemList_" + (index+1);
			for (i=0; i<stemJsonData.allStemList[index][listObjectKey].length; i++) {
				stemWords += stemJsonData.allStemList[index][listObjectKey][i][0] + ':'
										+ stemJsonData.allStemList[index][listObjectKey][i][1] + ' ';
			}
			$(this).text(stemWords);
		});

//event listener: radio buttons
	var radioValue;
	$('input[name="quizType"]').on('click', function() {
	  radioValue = $('input[name="quizType"]:checked').val();

//change buttons style according to quiz type
		if (radioValue === 'blank') {
			$('button').removeClass();
			$('button').addClass('blank');
		} else {
			$('button').removeClass();
			$('button').addClass('choice');
		}
	});

//use radio buttons value to decide which quiz type to fire
		//use event delegation for quiz button click
		$('#container').on('click', 'button', function() {
			var $paraList = '';
			var paraListNumber = '';
			var paraListObject = '';
			$paraList = $(this).attr("id");
			paraListNumber = $paraList.substring(5);
			paraListObject = $paraList.replace('quiz', 'stemList');
			if (!radioValue) {  //quiz type didn't be selected
				window.scrollTo(0, 0);
				$('#screenQuizType').addClass('showScreen');
				$('#alertBoxQuizType').removeClass();
				$('#quizType').removeClass('iAmHere');
			} else {
				$('#quizType').removeClass('unchecked');
				quizButton(stemJsonData.allStemList[paraListNumber-1][paraListObject], paraListNumber, radioValue);
			}
		})

		//eventlistener: close alert box of quiz type
		$('#buttonAlertQT').on('click', function() {
			$('#screenQuizType').removeClass();
			$('#alertBoxQuizType').addClass('hide');
			$('#quizType').addClass('iAmHere');
		})

	});
