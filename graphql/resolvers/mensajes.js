const { UserInputError } = require('apollo-server');


const { validateContactInput }  = require('./../../util/validators')
const Mensaje = require('../../models/Mensajes') 


module.exports = {
    Mutation: {
        async rmessage(_,
            { 
                contactInput: {  name, phone, email, body } 
            },){
                const { valid, errors } =  validateContactInput(name, phone, email, body);
                if(!valid){
                    throw new UserInputError('Errors', { errors })
                }
                const newMessage = new Mensaje({
                    name,
                    phone,
                    email,
                    body,
                    createdAt: new Date().toISOString()
                });
                const res = await newMessage.save()
                return {                
                    ...res._doc,
                    id: res._id}
            }
    }
}