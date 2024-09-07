let display = 'Esperando dados...'

const promise = new Promise((resolve,reject) => {

    let teste = 8

    setTimeout(()=> {
        if(teste === 5) {
            resolve('Os dados foram recebidos com sucesso')
        } else {
            reject('Houve um erro no recebimento dos dados')
        }
    },2000)

})

promise.then(result => {
    display = result
    console.log(display)
})

.catch(result => {
    display = result
    console.log(display)
})



console.log(display)