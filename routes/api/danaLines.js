const express = require('express')
const router = express.Router()
const danaLinesCtrl = require('../../controllers/danaLines')

router.get('/', danaLinesCtrl.index)
router.get('/:id', danaLinesCtrl.show)

router.use(require('../../config/auth'))
router.post('/', checkAuth, danaLinesCtrl.create)
router.put('/:id', checkAuth, danaLinesCtrl.update)
router.delete('/:id', checkAuth, danaLinesCtrl.delete)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router