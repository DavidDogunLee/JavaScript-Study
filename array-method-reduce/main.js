var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val
}, 0)

var list1 = [[0, 1], [2, 3], [4,5]]
var list2 = [0, [1, [2, [3, [4, [5]]]]]]

const flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
)

var members = [
  { name: 'Homer', language: 'BASIC', experience: 30 },
  { name: 'Marge', language: 'JavaScript', experience: 20 },
  { name: 'Bart', language: 'C', experience: 10 },
  { name: 'Lisa', language: 'JavaScript', experience: 8 },
  { name: 'Maggie', language: 'JavaScript', experience: 0.5 }
]

// Reduce - Get the combined years of JavaScript experience of a team.
var totalExperience = members.reduce(function(exp, val) {
  return exp + val.experience
}, 0)

var allLanguage = members.reduce(function(lang, each) {
  return lang + ' ' + each.language
}, '')

var name = members.reduce(function(name, all) {
  return name + ' ' + all.name
}, '')
