
const Tipos = require('../../models/Tipos') 


module.exports = {
    Mutation: {
        async tipos(_,
            { 
                arTipes: {  tipo1,tipo2 } 
            },){
               
                const newTipos = new Tipos({
                    tipo1,
                    tipo2
                });
                const res = await newTipos.save()
                return {                
                    ...res._doc,
                    id: res._id}
            }
    }
}