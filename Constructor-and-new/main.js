function Car(speed, heading, location, marker) {
  this.speed = speed
  this.heading = heading
  this.location = location
  this.marker = marker
  this.initialized = false
}
Car.prototype.turn = function(direction) {
  this.heading = direction
}
Car.prototype.faster = function(increase) {
  this.speed = this.speed + increase
}
Car.prototype.slower = function(decrease) {
  this.speed = this.speed - decrease
}
Car.prototype.getSpeed = function() {
  return this.speed
}
Car.prototype.getHeading = function() {
  return this.heading
}
Car.prototype.getLocation = function() {
  return this.location
}
Car.prototype.getMarker = function() {
  return this.marker
}
Car.prototype.move = function() {
  switch (this.heading) {
    case 'north':
      this.location.top = this.location.top - this.speed
      if (this.marker) this.marker.style.top = this.location.top + 'px'
      break
    case 'south':
      this.location.top = this.location.top + this.speed
      if (this.marker) this.marker.style.top = this.location.top + 'px'
      break
    case 'east':
      this.location.left = this.location.left + this.speed
      if (this.marker) this.marker.style.left = this.location.left + 'px'
      break
    case 'west':
      this.location.left = this.location.left - this.speed
      if (this.marker) this.marker.style.left = this.location.left + 'px'
      break
  }
}
Car.prototype.initialize = function() {
  if (!this.initialized) {
    this.marker.style.top = this.location.top + 'px'
    this.marker.style.left = this.location.left + 'px'
    this.initialized = true
  }
}

var $car = new Car(1, 'east', {top: 100, left: 10}, document.getElementById('car'))

$car.initialize()

setInterval(function () {
  $car.move()
}, 10)
