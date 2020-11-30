const db = require('../models')

const login = (req, res) => {
  res.json({ user: req.user.id })
}

const register = (req, res) => {
  const { name, email, password } = req.body
  
  // validate the POSTed data - making sure we have a name, an email, a pw
  if (!name || !email || !password) {
    return res.json({ message: 'Please enter a name, an email, and a password' })
  }

  // make sure the user doesn't already exist
  db.user.findOne({ where: { email } })
    .then(foundUser => {
      if (foundUser) {
        return res.json({ message: "A user with that email already exists" })
      }

      // if the user doesnt exist, create and save a user to the DB
      db.user.create({
        name,
        email,
        password
      }).then(newUser => {
        res.json(newUser)
      })
    })
}

const index = (req, res) => {
  db.user.findAll({
    where: {
      id: req.params.id
    }
  }
  ).then((foundUsers) => {
    if(!foundUsers) return res.json({
      message: 'No Users found in database.'
    })
    res.status(200).json({ users: foundUsers })
  })
}

const logout = (req, res) => {
  if (!req.user) {
    return res.json({ message: 'No User to log out' })
  }
  req.logout()
  res.json({ message: "User logged out" })
}

module.exports = {
  login,
  register,
  index,
  logout
}
