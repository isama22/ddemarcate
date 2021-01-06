const DanaLine = require('../models/danaLine')

module.exports = {
    index,
    show, 
    create
}

async function index(req, res) {
    const danaLines = await DanaLine.find({})
    .sort({createdAt: -1})
    res.status(200).json(danaLines)
}

async function show(req, res) {
    const danaLine = await DanaLine.findById(req.params.id)
    res.status(200).json(danaLine)
}

async function create(req, res) {
    req.body.user = req.user
    req.body.creator = req.user.name
    const danaLine = await DanaLine.create(req.body)
    res.status(201).json(danaLine)
}


async function update(req, res) {
    try {
        const updatedDana = await DanaLine.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDana)
    }
    catch(err){
        res.status(500).json(err)
    }
}