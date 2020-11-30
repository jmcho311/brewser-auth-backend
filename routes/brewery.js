const router = require('express').Router()
const ctrl = require('../controllers/brewery')

//testing API

router.get('/search', ctrl.apiRequest)
router.get('/search/:id', ctrl.apiShow)

// PATH = /api/v1/brewery
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.get('/userPost/:id', ctrl.showPost)
router.get('/posts/:id', ctrl.showPostById)
router.post('/', ctrl.create)
// router.put('/:id', ctrl.update)
router.delete('/posts/:id', ctrl.destroy)

module.exports = router
