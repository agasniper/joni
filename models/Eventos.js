const { model, Schema } = require('mongoose');

const eventosSchema = new Schema({
    title: String,
    body: String,
    date: String,
    image: String,
    createdAt: String })

module.exports = model('Eventos', eventosSchema)