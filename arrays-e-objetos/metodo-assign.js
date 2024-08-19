const obj1 = {
    nome: 'Vinícius',
    idade:20
}

const obj2 = {
    time: 'Corinthians',
    idade: 21
}

Object.assign(obj2,obj1)

console.log(obj2)

//As propriedades de mesmo nome ficam com o valor do objeto copiado,não com o do recepetor




