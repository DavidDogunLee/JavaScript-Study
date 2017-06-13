function Car() {}
car1 = new Car();

console.log(car1.color);

Car.prototype.color = 'red';
console.log(car1.color);

car1.color = 'black';
console.log(car1.color)

function CarDetails(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

var myCar = new CarDetails('Eagle', 'Talon TSi', 1993);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

var car1 = new CarDetails('Eagle', 'Talon TSi', 1993, rand);
var car2 = new CarDetails('Nissan', '300ZX', 1992, ken);

console.log(car1.owner.name)
console.log(car2.owner.sex)
console.log(car2.owner.age)
