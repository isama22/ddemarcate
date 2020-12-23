const mongoose = require('mongoose')
const Schema = mongoose.Schema

const danaLineSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    creator: String,
}, { 
    timestamps: true 
})

module.exports = mongoose.model('DanaLine', danaLineSchema)