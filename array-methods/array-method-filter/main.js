var users = [
  { id: 1, followers: [2] },
  { id: 2, followers: [1, 5] },
  { id: 3, followers: [1, 2, 4] },
  { id: 4, followers: [1, 2] },
  { id: 5, followers: [1, 2, 3, 4] }
]

var followed = users.filter(function(user) {
  if (user.followers.length >= 2) {
    return user
  }
})
