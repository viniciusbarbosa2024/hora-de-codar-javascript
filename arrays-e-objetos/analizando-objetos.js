const objeto = {
    a: 50,
    b: 'teste',
    c: [1,2],
    d: (a,b) => a+b
}

//Método keys: Retorna o nome das propriedades do objeto

const keys = Object.keys(objeto)
console.log(keys)

//Método entries: Retorna o nome e o valor das propriedades do objeto

const entries = Object.entries(objeto)
console.log(entries)
