var production = (num1, num2) => {
  return num1 * num2
}

var names = ['Ron', 'Courtney', 'Victor', 'Celeste', 'Tim']

var upperCasedWithFunction = names.map(function (name) {
  return name.toUpperCase()
})

var upperCasedWithArrow = names.map(name => name.toUpperCase())

class Car {
  start() {
    setInterval(function () {
      this.move()
    }.bind(this), 100) // manually bind anonymous function
  }
  startWithArrow() {
    setInterval(() => this.move()) // bound arrow function
  }
}
