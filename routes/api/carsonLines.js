const express = require('express')
const router = express.Router()
const carsonLinesCtrl = require('../../controllers/carsonLines')

router.get('/', carsonLinesCtrl.index)
router.get('/:id', carsonLinesCtrl.show)

router.use(require('../../config/auth'))
router.post('/', checkAuth, carsonLinesCtrl.create)
router.put('/:id', checkAuth, carsonLinesCtrl.update)
router.delete('/:id', checkAuth, carsonLinesCtrl.delete)

function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router