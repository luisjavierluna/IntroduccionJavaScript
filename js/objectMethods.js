// "use strict" //Correr JS en modo estricto

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) // no permite agregar ni elimiar propiedades

Object.seal(producto) // los mismo que .freeze, pero .seal si permite la modificación de propiedades existentes

producto.imagen = "imagen.jpg"

// .freeze no permite ni añadir objetos ni eleiminarlos
// console.log(Object.isFrozen(producto))
// delete producto.precio

console.log(producto)