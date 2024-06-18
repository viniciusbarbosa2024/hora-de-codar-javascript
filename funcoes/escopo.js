//Escopo global e local

let a = 10
let b = 30

function teste() {
    let a = 20
    let c = 15
    console.log(`Valor de a dentro da função ${a}`)
    console.log(`Valor de b dentro da função: ${b}`)
    console.log(`Valor de c dentro da função: ${c}`)
}

teste()

console.log(`Valor de a fora da função: ${a}`)
console.log(`Valor de c fora da função: ${c}`)

//Escopo aninhado

function escopoaninhado() {
    let x = 10

    if(true) {
        let y = 20
        console.log(x) //funciona pq o escopo de x é externo ao bloco 
    }

    console.log(y) //não funciona pq o escopo de y é definido num bloco interno(no caso o 'if')
}

