// const teste =  {
//     name: 'Vinícius',
//     getName: function () {
//         return teste.name
//     }
// }

// console.log(teste.getName())

//Usando o this

const teste = {
    name: 'Vinícius',
    getName: function () {
        return this.name
    }
}

console.log(teste.getName())
