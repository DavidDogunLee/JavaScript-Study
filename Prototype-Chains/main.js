function Car(speed, heading, location, marker) {
  this.speed = speed
  this.heading = heading
  this.location = location
  this.marker = marker
  this.initialized = false
  console.log(this)
}

Car.prototype = {
  turn: function(direction) {
    this.heading = direction
  },
  faster: function(increase) {
    this.speed = this.speed + increase
  },
  slower: function(decrease) {
    this.speed = this.speed - decrease
  },
  getSpeed: function() {
    return this.speed
  },
  getHeading: function() {
    return this.heading
  },
  getLocation: function() {
    return this.location
  },
  getMarker: function() {
    return this.marker
  },
  move: function() {
    switch (this.heading) {
      case 'north':
        this.location.top = this.location.top - this.speed
        if (this.marker) this.marker.style.top = this.location.top + 'px'
        break;
      case 'south':
        this.location.top = this.location.top + this.speed
        if (this.marker) this.marker.style.top = this.location.top + 'px'
        break;
      case 'east':
        this.location.left = this.location.left + this.speed
        if (this.marker) this.marker.style.left = this.location.left + 'px'
        break;
      case 'west':
        this.location.left = this.location.left - this.speed
        if (this.marker) this.marker.style.left = this.location.left + 'px'
        break;
    }
  },
  initialize: function() {
    if (!this.initialized) {
      this.marker.style.top = this.location.top + 'px'
      this.marker.style.left = this.location.left + 'px'
      this.initialized = true
    }
  }
}

function PoliceCar(speed, heading, location, marker) {
  Car.call(this, speed, heading, location, marker) // call() method calls function with this given value uses it when using constructor function
}

PoliceCar.prototype = Object.create(Car.prototype)
PoliceCar.prototype.constructor = PoliceCar

PoliceCar.prototype.initialize = function () {
  Car.prototype.initialize.call(this)
  var marker = this.marker
  setInterval(function () {
    var color = marker.style.backgroundColor
    marker.style.backgroundColor = color === 'red'
      ? 'blue'
      : 'red'
  }, 500)
}


var car = new Car(1, 'east', {top: 100, left: 10}, document.getElementById('car'))
var policeCar = new PoliceCar(2, 'south', {top: 50, left: 20}, document.getElementById('police-car'))
car.initialize()
policeCar.initialize()

setInterval(car.move.bind(car), 10)
setInterval(policeCar.move.bind(policeCar), 15)
