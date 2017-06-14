function car(speed, heading, location, marker) {
  var initialized = false;
  return {
    turn: function(direction) {
      heading = direction
    },
    faster: function(increase) {
      speed = speed + increase
    },
    slower: function(decrease) {
      speed = speed - decrease
    },
    getSpeed: function() {
      return speed
    },
    getHeading: function() {
      return heading
    },
    getLocation: function() {
      return location
    },
    getMarker: function() {
      return marker
    },
    move: function() {
      switch (heading) {
        case 'north':
          location.top = location.top - speed
          if (marker) marker.style.top = location.top + 'px'
          break;
        case 'south':
          location.top = location.top + speed
          if (marker) marker.style.top = location.top + 'px'
          break;
        case 'east':
          location.left = location.left + speed
          if (marker) marker.style.left = location.left + 'px'
          break;
        case 'west':
          location.left = location.left - speed
          if (marker) marker.style.left = location.left + 'px'
          break;
      }
    },
    initialize: function() {
      if (!initialized) {
        marker.style.top = location.top + 'px'
        marker.style.left = location.left + 'px'
        initialized = true
      }
    }
  }
}

var $car = car(1, 'east', { top: 100, left: 1 }, document.getElementById('car'))
$car.initialize()
$car.move()
setInterval($car.move, 100)
