const { model, Schema } = require('mongoose');
const { GraphQLObjectType } = require('graphql')


const obrasSchema = new Schema({
    title: String,
    image: String, //por ahora lo pienso como un link a una imagen subida en otro lugar 
    description: String,
    tipo: {tipo1:String,tipo2:String}, 
    //tipo3:String,
    createdAt: String
})

module.exports = model('Obras', obrasSchema)