//Exercício sobre escopo

const global = 'Eu sou uma variável global'

function teste() {
    const local = 'Eu sou uma variável local'

    if (true) {
        const bloco = 'Eu sou uma variável de bloco'

        console.log(bloco) //Funciona pq é declarada no bloco(if)

        console.log(local) //Funciona pq o bloco(if) é interno ao escopo dessa variável
        
        console.log(global) //Funciona pelo mesmo motivo da "local"
    }

    console.log(bloco) //Não funciona pq essa constante é definida num escopo interno
    console.log(local) //Funciona pq essa constante é definida nesse bloco(função teste)
    console.log(global)//Funciona pq o bloco(função teste) é interno ao escopo dessa variável

}

teste()

console.log(bloco)//Não funciona pq é definida num bloco interno
console.log(local) //Não funciona pq é definida num bloco interno
console.log(global) //Funciona pq é definido no bloco(global)

//Resumindo, variáveis de blocos externos podem ser acessadas por blocos internos,mas variáveis de blocos internos não podem ser acessadas por blocos externos