const Eventos = require('../../models/Eventos')
const cloudinary = require('cloudinary')
module.exports = { 
    Query: {
        async getEventos(){
            try{
                const eventos = await Eventos.find()
                return eventos
            }catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createEvent(_, {eventInput: {  title,body,date,image } },) { 
            if (title.trim() === '') {
                throw new Error('El titulo no debe estar vacio');
              }
            if (body.trim() === '') {
                throw new Error('Insertar la descripcion del evento');
              }
            if (date.trim() === '') {
                throw new Error('Insertar la fecha del evento');
              }
            if (image === undefined){
                const newEvent = new Eventos({
                    title,
                    body,
                    image,
                    date,
                    createdAt: new Date().toISOString()
                  });
                const evento = await newEvent.save();
                return evento;
            }else{
                filename = `C:/Users/jonat/Documents/Pagina Cuadros/graphql/resolvers/public/images/${image}`
                const photo = await cloudinary.v2.uploader.upload(filename);
                const newEvent = new Eventos({
                    title,
                    body,
                    image: `${photo.secure_url}`,
                    date,
                    createdAt: new Date().toISOString()
                  });
                  const evento = await newEvent.save()
                  return evento;
            }
            

            
            
        },
        async deleteEvent(_, { deleteID },){
            try{
                const event = await Eventos.findById(deleteID)
                event.delete()
                return 'Evento borrado'
            }catch(err){
                throw new Error(err);
            }

        }
    }
}