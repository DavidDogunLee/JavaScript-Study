// Lecture: Functions returning functions
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', What do you do?');
    }
  }
}

var teacherQuestions = interviewQuestion('teacher');
var designerQuestions = interviewQuestion('designer');


teacherQuestions('John');
designerQuestions('John');
designerQuestions('Jane');
designerQuestions('Mark');

interviewQuestion('teacher')('David');
