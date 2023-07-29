const validation = (userData) => {// aqui se recibe la info del usuraio 
    const errors = {};// se crean propiedades con los errores al ingresar el email
    
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email ="El Email ingresado no es valido"
    }
    if(!userData.email){
        errors.email= "*Debe ingresar un Email valido"
    }
    if(userData.email.length > 35){
        errors.email = "El Email no debe superar los 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La Contraseña debe contener al menos un numero"
    }
    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = "La contraseña debe tener un tamaño entre 6 y 10 caracteres"
    }


    return errors;
}


export default validation;