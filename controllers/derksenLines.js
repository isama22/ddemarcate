const DerksenLine = require('../models/derksenLine')

module.exports = {
    index,
    show, 
    create
}

async function index(req, res) {
    const derksenLines = await DerksenLine.find({})
    .sort({createdAt: 1})
    res.status(200).json(derksenLines)
}

async function show(req, res) {
    const derksenLine = await DerksenLine.findById(req.params.id)
    res.status(200).json(derksenLine)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const derksenLine = await DerksenLine.create(req.body)
    res.status(201).json(derksenLine)
}
