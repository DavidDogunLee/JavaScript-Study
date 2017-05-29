var people = [
  {
    name: 'John',
    age: 36
  },
  {
    name: 'Sean',
    age: 30
  },
  {
    name: 'Daniel',
    age: 29
  }
]

function updateSenior(person) {
  if (person.age >= 55) {
    person.isSenior = true
  }
  else {
    person.isSenior = false
  }
}
