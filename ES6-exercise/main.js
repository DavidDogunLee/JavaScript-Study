var Element = function(name, buildYear) {
  this.name = name;
  this.buildYear = buildYear;
}

var Park = function(name, buildYear, area, numTrees) {
  Element.call(this, name, buildYear)
  this.area = area; //km2
  this.numTrees = numTrees;
}

Park.prototype = Object.create(Element.prototype);

Park.prototype.treeDensity = function() {
  const density = this.numTrees / this.area
  console.log(`${this.name} has a tree density of ${density} tree per square km.`)
}

var Street = function(name, buildYear, length, size = 3) {
  Element.call(this, name, buildYear)
  this.length = length;
  this.size = size;
}

Street.prototype = Object.create(Element.prototype);

Street.prototype.classifyStreet = function() {
  const classification = new Map();
  classification.set(1, 'tiny');
  classification.set(2, 'small');
  classification.set(3, 'normal');
  classification.set(4, 'big');
  classification.set(5, 'huge');
  console.log(`${this.name} build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];

const allStreet = [
  new Street('Ocean Ave', 1999, 1.1, 4),
  new Street('Evergreen st', 1980, 2.2, 5),
  new Street('Malvern ave', 1990, 3.3)
];

function calc(arr) {

  const sum = arr.reduce((prev, current, index) => prev + current, 0);
  // [3, 5, 6]

  return [sum, sum / arr.length];
}

function reportPark(p) {
  console.log('---Parks Report---');
  // density
  p.forEach(el => el.treeDensity());
  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)
  // which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreet(s) {
  console.log('---Streets Report---');

  // Total and average length of the town's Streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)

  // Classify sizes
  s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreet(allStreet);
