const teste = document.getElementsByClassName('teste')[0]

const promise = new Promise((resolve,reject) => {
    let number = 8

    setTimeout(()=> {
        if (number < 10) {
            resolve('funcionou')
        } else {
            reject('Não funcionou')
        }
    },2000)
})

promise.then((result) => {
    
    teste.classList.add('funciona')
    teste.innerHTML = result

})

promise.catch((result) => {
    teste.innerHTML = result
})

