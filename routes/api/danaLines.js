const express = require('express')
const router = express.Router()
const danaLinesCtrl = require('../../controllers/posts')

router.get('/', danaLinesCtrl.index)
router.get('/:id', danaLinesCtrl.show)

// router.use(require('../../config/auth'))

router.post('/', checkAuth, danaLinesCtrl.create)

// function checkAuth(req, res, next){
//     if (req.user) return next()
//     return res.status(401).json({msg: 'not authorized'})
// }

module.exports = router