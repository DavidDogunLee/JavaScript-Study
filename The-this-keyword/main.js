function car(speed, heading, location, marker) {
  return {
    speed: speed,
    heading: heading,
    location: location,
    marker: marker,
    initialized: false,
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
}

var $car = car(1, 'east', {top: 100, left: 10}, document.getElementById('car'))

$car.initialize()

setInterval(function() {
  $car.move()
}, 10)
