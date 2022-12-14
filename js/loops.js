// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es PAR`)
    } else {
        console.log(`El número ${i} es IMPAR`)
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre)
}

// While Loop
    // Primero decide si la condición se cumple y después ejecuta el loop o no si la condición no se cumple

// let i = 20 // Indice

// while (i < 10) { // Condición
//     console.log('Desde el While loop')

//     i++ // Incremento
// }



// Do While Loop 
    // Ejecuta el código al menos una vez y después evalua si aplicar el loop o no

let i = 100

do {
    console.log(i)

    i++
} while (i < 10)