const { model, Schema } = require('mongoose');

const mensajeSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    body: String,
    createdAt: String })

module.exports = model('Mensaje', mensajeSchema)