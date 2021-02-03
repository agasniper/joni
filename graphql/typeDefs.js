const { gql } = require('apollo-server')
const { GraphQLObjectType } = require('graphql')


module.exports = gql`
    type File {
        url: String!
    }
    type Obras{
        id: ID!,
        title: String!,
        image: String!, 
        description: String,
        tipo: Tipos
    }
    type Eventos{
        title: String!,
        body: String!,
        date: String!,
        image: String
    }
    input ContactInput{
        name: String!
        phone: String!
        email: String!
        body: String!
    }
    type Mensaje{
        id: ID!
        name: String!
        phone: String!
        email: String!
        body: String!
        createdAt: String!
    }
    input ArtTypes{
        tipo1:String!,
        tipo2:String
    }
    type Tipos{
        tipo1:String!,
        tipo2:String
    }

    input ObraInput{
        title: String!
        image: String!
        description: String
        tipo:ArtTypes
    }
    input EventoInput{
        title: String!
        body: String!
        date: String!
        image: String
    },
    input TipeFilter{
        tipo: ArtTypes
    }
    type Mutation{
        rmessage(contactInput: ContactInput): Mensaje!
        tipos(arTipes: ArtTypes): Tipos!
        createObra(obraInput: ObraInput): Obras
        deleteObra(deleteID: ID!): String!
        createEvent(eventInput: EventoInput): Eventos!
        deleteEvent(deleteID: ID!): String!
        #uploadFile(file: Upload!): File!
        uploadFile(filename: String!): String!
        }
    type Query {
        getObras: [Obras]
        getObra(obraId: ID!): Obras
        getEventos: [Eventos]
        getObrasbyT(filter:TipeFilter): [Obras]
    }
    #type Subscription{
    #    newObra: Obras!
    #}
`