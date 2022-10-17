var array = [1, 2, 3, 4]
var resultado = []

// array.forEach(function (elemento){resultado.push(elemento * 2)})
// console.log(array)
// console.log(resultado)

var resultado = array.map(function (elemento){return elemento * 2})
console.log (resultado)

// var resultado = array.reduce(function(acumulador, elemento) {return acumulador + elemento ;10)

console.log (resultado)