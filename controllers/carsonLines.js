const CarsonLine = require('../models/carsonLine')

module.exports = {
    index,
    show, 
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const carsonLines = await CarsonLine.find({})
    .sort({createdAt: 1})
    res.status(200).json(carsonLines)
}

async function show(req, res) {
    const carsonLine = await CarsonLine.findById(req.params.id)
    res.status(200).json(carsonLine)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const carsonLine = await CarsonLine.create(req.body)
    res.status(201).json(carsonLine)
}

async function update(req, res) {
    try {
        const updatedCarsonLine = await CarsonLine.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCarsonLine)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedCarsonLine = await CarsonLine.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedCarsonLine)
}