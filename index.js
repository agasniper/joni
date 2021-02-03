const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const fetch = require('node-fetch')
const express = require('express')

//const { getInstagramPictures } = require('./util/fetchInstagram')

//conectamos a la base de datos 
const mongoose = require('mongoose')

/*archivos propios */
const { MONGODB } = require('./config.js')
//se define la estructura
const typeDefs = require('./graphql/typeDefs')
//se define el resultado a mostrar 
const resolvers = require('./graphql/resolvers/index')

const server = new ApolloServer({
    typeDefs,
    resolvers 
});



mongoose
.connect(MONGODB, { useNewUrlParser: true })
.then(() => {
    console.log('MongoDB connected')
    return server.listen({ port: 5000 })
    }).then(res => {
        console.log(`Server running at ${res.url}`)
})
