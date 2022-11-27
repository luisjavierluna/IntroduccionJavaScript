// Arrays

const numeros = [10, 20, 30, 40, 50]
console.table(numeros)

// Acceder a los valores de un arreglo
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

// Conocer la extensión del arreglo
// console.log(meses.length)

// numeros.forEach(function(numero) {
//     console.log(numero)
// })

numeros.push(60, 70, 80) // Al final del array
numeros.unshift(-10, -20, -30) // al inicio del array

console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
meses.pop() // Elimina el último elemento
meses.shift() // Elimina el primer elemento

meses.splice(2, 1) // Primera parametro es el indice y segudo la cantidad de elementos a elimiar después del indice
console.table(meses)

// Rest Operato o Spread Operator

const nuevoArreglo = ['Junio', ...meses] // se crea un nuevo arreglo, se le añade un elemento al inicio y depués se le agrega todo un array ya existente
// const nuevoArreglo = [...meses, 'Junio'] // se crea un nuevo arreglo, se ele añade un array existente completo y luego se el agrega el elemento nuevo al final
console.log(nuevoArreglo)