//Função declarada: Podem ser invocadas antes de serem definidas no código

console.log(soma(5,3)) //função invocada antes de ser definida

function soma(a,b) {
    return (a+b)
}

//Funções anônimas: São atribuídas e não podem ser invocadas antes de serem definidas

let teste = function () {
    console.log('Isso é um teste')
}

teste() //Se eu chamar essa função antes da linha 11 vai dar erro