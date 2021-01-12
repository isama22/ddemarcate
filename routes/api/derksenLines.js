const express = require('express')
const router = express.Router()
const derksenLinesCtrl = require('../../controllers/derksenLines')

router.get('/', derksenLinesCtrl.index)
router.get('/:id', derksenLinesCtrl.show)

router.use(require('../../config/auth'))
router.post('/', checkAuth, derksenLinesCtrl.create)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router