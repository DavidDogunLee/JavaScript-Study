function Car(options) {
  this.door = options.door || '4';
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver';
}

function Truck(options) {
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'blue';
}

function VehicleFactory() {}
VehicleFactory.prototype.vehiceClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
  switch(options.vehicleType) {
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
} );

console.log(car instanceof Car);
console.log( car );

var movingTruck = carFactory.createVehicle({
  vehicleType: 'truck',
  state: 'like new',
  color: 'red',
  wheelSize: 'small'
});

console.log( movingTruck instanceof Truck );
console.log( movingTruck );

function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
  state: 'so bad.',
  color: 'pink',
  wheelSize: 'so big'
});

console.log( myBigTruck instanceof Truck );
console.log( myBigTruck );

function fruit(weight, price) {
  return {
    weight: weight,
    price: price
  }
};

var watermelon = fruit(10, 2)
var apple = fruit(1, 1)

console.log (watermelon instanceof fruit)
console.log (watermelon)

function fruitPrice(weight, price) {
  return {
    price: function() {
      return weight * price
    }
  }
}

var banana = fruitPrice(1, 3)
var pear = fruitPrice(2, 2)

console.log(banana.price())

function carExercise(speed, direction) {
  return {
    increment: function() {
      speed = speed + 1
      return speed
    },
    decrement: function() {
      speed = speed - 1
      return speed
    },
    current: function() {
      return speed
    },
    heading: direction
  }
}

var car1 = new carExercise(2, 'north')
console.log(car1)
console.log(car1.increment())
