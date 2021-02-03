module.exports.validateContactInput = (
    name,
    phone,
    email,
    body,
) => {
    const errors = {};
    if (name.trim() === '' ){
        errors.name = "Por favor, ingrese su nombre";
    }
    if (email.trim() === ''){
        errors.email = 'Por favor, ingrese su email'; 
    }else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = "El email debe ser valido, reviselo";
        }
    }
    if (phone === ''){
        errors.phone = 'Ingrese su numero de telefono'; 
    } 
    if (body === ''){
        errors.body = 'Escriba su mensaje'; 
    } 
    return {
        errors,
        valid: Object.keys(errors).length < 1 
    }
};