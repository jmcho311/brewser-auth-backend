const router = require('express').Router()
const ctrl = require('../controllers/beer')


// PATH = /api/v1/auth
router.get('/', ctrl.index)
router.get('/category/:category', ctrl.show)
router.get('/:id', ctrl.showPost)
router.get('/breweryPost/:id', ctrl.showBrewery)
router.get('/name/:name', ctrl.showBeer)
router.post('/', ctrl.create)
// router.put('/:id', ctrl.update)
// router.delete('/:id', ctrl.destroy)


module.exports = router