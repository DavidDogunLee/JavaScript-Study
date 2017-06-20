class Car {
  constructor(speed, heading, location, marker) {
    this.speed = speed
    this.heading = heading
    this.location = location
    this.marker = marker
    this.initialized = false
  }
  turn(direction) {
    this.heading = direction
  }
  faster(increase) {
    this.speed = this.speed + increase
  }
  slower(decrease) {
    this.speed = this.speed - decrease
  }
  getSpeed() {
    return this.speed
  }
  getHeading() {
    return this.heading
  }
  getLocation() {
    return this.location
  }
  getMarker() {
    return this.marker
  }
  move() {
    var location = this.location
    var speed = this.speed
    switch (this.heading) {
      case 'north':
        location.top = location.top - speed
        break
      case 'south':
        location.top = location.top + speed
        break
      case 'east':
        location.left = location.left + speed
        break
      case 'west':
        location.left = location.left - speed
        break
    }
    if (!this.marker) return
    this.marker.style.top = location.top + 'px'
    this.marker.style.left = location.left + 'px'
  }
  initialize() {
    if (this.initialized) return
    this.marker.style.top = this.location.top + 'px'
    this.marker.style.left = this.location.left + 'px'
    this.initialized = true
  }
}

class PoliceCar extends Car {
  initialize() {
    super.initialize()
    setInterval(function () {
      var color = this.marker.style.backgroundColor
      this.marker.style.backgroundColor = color === 'red'
        ? 'blue'
        : 'red'
    }.bind(this), 500)
  }
}

var $car = document.getElementById('car')
var $policeCar = document.getElementById('police-car')
var car = new Car(1, 'east', {top: 100, left: 10}, $car)
var policeCar = new PoliceCar(2, 'south', {top: 50, left: 20}, $policeCar)

car.initialize()
policeCar.initialize()

setInterval(car.move.bind(car), 10)
setInterval(policeCar.move.bind(policeCar), 15)
