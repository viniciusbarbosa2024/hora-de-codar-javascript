// Permite a passagem de um número de parâmetros indefinidos numa função

function soma(...parcelas) {
    let total = 0

    parcelas.forEach((elemento)=>{
        total += elemento 
    })

    return total
}

console.log(soma(5,4,8,3))

