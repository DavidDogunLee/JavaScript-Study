const programmers = [
  {
    name: 'John',
    experience: 1,
  },
  {
    name: 'Daniel',
    experience: 2,
  },
  {
    name: 'Sam',
    experience: 3
  }
]

function getTotalExperience(employees) {
  let total = 0
  for (var i = 0; i < employees.length; i++) {
    total += employees[i].experience
  }
  return total
}
