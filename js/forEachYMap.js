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


// ForEach
carrito.forEach( producto => console.log(producto.nombre))
    // se usa para solo mostrar elementos en pantalla, es decir, iterar o mostrar en consola
    // si se asigna a una variable dará undefined

// map
const arreglo2 =  carrito.map( producto => producto.nombre)
    // se usa cuando se quiere regresar un nuevo array a partir del primero y asignarlo a una variable
    // Ideal para asignarlo a una variable que ahora será el nuevo array

console.log(arreglo1)
console.log(arreglo2)