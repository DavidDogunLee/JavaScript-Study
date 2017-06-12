function showName(fistName, lastName) {
  var nameIntro = "Your name is ";
  function makeFullName() {
    return nameIntro + fistName + " " + lastName
  }
  return makeFullName()
}

function celebrityID() {
  var celebrityID = 999;
  return {
    getID: function() {
      return celebrityID
    },
    setID: function(theNewID) {
      celebrityID = theNewID
    }
  }
}

var mjID = celebrityID()
mjID.getID(); // 999
mjID.setID(567); // 외부함수의 변수를 변경합니다.
mjID.getID(); // 567; 변경된 celebrityID변수를 리턴합니다.

function typeWriter() {
  var text = ''
  function type(message) {
    text += message
    return text
  }
  return type
}

var type = typeWriter()
type('hi ')
type('there')

function makeCounter(number) {
  return {
    increment: function() {
      number = number + 1
      return number
    },
    decrement: function() {
      number  = number - 1
      return number
    },
    current: function() {
      return number
    }
  }
}

var counter = makeCounter(0)
counter.current()
counter.increment()
counter.increment()
counter.decrement()
counter.current()

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter
    }
  }
})()
