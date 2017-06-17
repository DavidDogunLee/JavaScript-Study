function Automobile(make, model) {
  this.make = make
  this.model = model
}

var theCar = new Automobile('Chevy', 'Nova')

console.log(theCar instanceof Automobile) // true
console.log(theCar.hasOwnProperty('make')) // true
console.log(theCar.hasOwnProperty('valueOf')) // false
console.log(theCar.valueOf())

function PoliceCar(make, model) {
  Automobile.call(this, make, model)
  this.siren = 'off';
  this.prisoner = false;
}
PoliceCar.prototype = Object.create(Automobile.prototype)
PoliceCar.prototype.constructor = PoliceCar;

var copCar = new PoliceCar('Ford', 'Crown Victoria')
console.log(copCar.hasOwnProperty('make')) // true
console.log(copCar.hasOwnProperty('model')) // true
console.log(copCar.hasOwnProperty('honk')) // false
console.log(copCar instanceof PoliceCar) // true
console.log(copCar instanceof Automobile) // true
console.log(copCar instanceof Object) // true
