const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true

    if(auth) {
        resolve('Usuario Autenticado') // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión') // el promise no se cumple
    }
})

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))