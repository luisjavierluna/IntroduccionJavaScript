// Arrays

const numeros = [10, 20, 30, 40, 50]

console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
console.log(meses)

// Acceder a los valores de un arreglo
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

// Conocer la extensión del arreglo
console.log(meses.length)

numeros.forEach(function(numero) {
    console.log(numero)
})
