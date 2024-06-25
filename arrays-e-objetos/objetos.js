let data = new Date()
const ano = data.getFullYear()

let pessoa = {
    nome: 'Vinícius',
    idade: () => ano - 2004  
}


//As duas formas de usar as propriedades de um objeto
console.log(pessoa.nome)
console.log(pessoa['nome'])

//Usando os métodos do objeto

console.log(pessoa.idade())

