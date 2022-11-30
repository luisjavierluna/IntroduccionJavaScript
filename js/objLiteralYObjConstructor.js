// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} ${this.apellido}`
}

function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio: $ ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('Laptop', 300)
const cliente = new Cliente('Juan', 'De la Torre')


console.log(cliente)
console.log(producto2)
console.log(producto3)