const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')

// PATH = /api/v1/auth
router.post('/login', passport.authenticate('local'), ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)

router.get('/user/:id', ctrl.auth.index)

module.exports = router
