// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

// forEach

meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
})

// Includes
let resultado = meses.includes('Diciembre')

// Some ideal para arreglos de objetos

resultado = carrito.some(producto => producto.nombre === 'Laptop')

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio)

// Filter
resultado = carrito.filter(producto => producto.precio > 400)

resultado = carrito.filter(producto => producto.nombre !== 'Celular')

console.log(resultado)