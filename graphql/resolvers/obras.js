const Obras = require('../../models/Obras')
const { CLOUD_NAME,API_KEY,API_SECRET  } = require('../../config')
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})
const path = require('path')
const fs = require('fs')
const { models } = require('mongoose')



module.exports = { 
    Query: {
        async getObras(){
            try{
                const obras = await Obras.find()
                console.log(obras)
                return obras
            }catch(err){
                throw new Error(err)
            }
        },
        async getObra(_, { obraId }){
            try{
                const obra = await Obras.findById(obraId);
                if(obra){
                    return obra;
                }else {
                    throw new Error('Obra not found')
                }
                }catch(err){
                    throw new Error(err);
            }
        },
        async getObrasbyT(_, { filter },){
           // console.log(filter)
            try{
                const obra = await Obras.find(filter)
                return obra
            }catch(err){
                throw new Error
            }
        },
    },
    uploadFile: async (parent, { filename }, ) => {
        filename = `C:/Users/jonat/Documents/Pagina Cuadros/graphql/resolvers/public/images/${filename}`;
        try{
            const photo = await cloudinary.v2.uploader.upload(filename);
            //await Obras.update({
            //    photo: `${photo.public_id}.${photo.format}`
            //})
           // console.log(photo)
        }catch(err){
            throw new Error(error)
        }
    },
    Mutation: {
        
        async createObra(_, {obraInput: { title,image,description,tipo } },) { 
            if (title.trim() === '') {
                throw new Error('El titulo no debe estar vacio');
              }
            if (image.trim() === '') {
                throw new Error('Insertar una imagen');
              }
            if (tipo.tipo1.trim() === '') {
                throw new Error('Insertar un tipo');
              }
            filename = `C:/Users/jonat/Documents/Pagina Cuadros/graphql/resolvers/public/images/${image}`;
            try{
                const photo = await cloudinary.v2.uploader.upload(filename);
                //await Obras.update({
                //    photo: `${photo.public_id}.${photo.format}`
                //})
                console.log(photo)
                
                console.log(tipo)
                const newObra = new Obras({
                    title,
                    image: `${photo.secure_url}`, //`${photo.public_id}.${photo.format}`,
                    description,
                    tipo,
                    createdAt: new Date().toISOString()
                  });
                  
                const obra = await newObra.save();
                return obra;
                
                //return photo
            }catch(err){
                throw new Error(error)
            }
            
            
        },
        async deleteObra(_, { deleteID },){
            try{
                const obra = await Obras.findById(deleteID)
                obra.delete()
                return 'Obra borrada'
            }catch(err){
                throw new Error(err);
            }
        }
        
        
    }
}