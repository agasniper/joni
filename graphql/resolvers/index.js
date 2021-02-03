const obrasResolvers = require('./obras')
const eventosResolvers = require('./eventos')
const mensajesResolvers = require('./mensajes')
//usamos indice para convinar los resolvers de cada parte 
module.exports = {
    Query: {
        ...obrasResolvers.Query, //porque enviamos un objeto, hay que separarlo 
        ...eventosResolvers.Query
    },
    Mutation: {
        ...mensajesResolvers.Mutation,
        ...obrasResolvers.Mutation,
        ...eventosResolvers.Mutation
     }
}