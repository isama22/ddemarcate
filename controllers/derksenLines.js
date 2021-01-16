const DerksenLine = require('../models/derksenLine')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne
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

async function update(req, res) {
    try {
        const updatedDerksenLine = await DerksenLine.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDerksenLine)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedDerksenLine = await DerksenLine.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedDerksenLine)
}