const { model, Schema } = require('mongoose');

const tipeSchema = new Schema({
    tipo1:String,
    tipo2:String })

module.exports = model('Tipos', tipeSchema)