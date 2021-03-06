(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion =
  function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
      console.log(i + ': ' + this.answers[i])
    }
  }

  Question.prototype.checkAnswer =
  function(ans){
    if (ans === this.correct){
      console.log('Correct answer!');
    } else{
      console.log('Try again!');
    }
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
  ['Yes', 'No'],
  0);

  var q2 = new Question('What is the name of this course\'s teacher?',
  ['John', 'Michael', 'Joans'],
  2);

  var q3 = new Question('What does best describe coding?',
  ['boring', 'hard', 'fun', 'tedious'],
  2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  /*
  what goes in the prompt is what gets saved in the answer variable
  but it gets save as string then we can convert it
  to built in method parseInt for a number
  */

  var answer = parseInt(prompt('Please select the correct answer.'))

  questions[n].checkAnswer(answer);
})();
