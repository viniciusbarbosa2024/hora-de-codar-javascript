//Praticando conceitos básicos de objetos

    //Declarando objeto
    const carro = {
        marca: 'Chevrolet',
        modelo: 'Chevete',
        ano: 1986,
        cor: 'white'
    }

    //Acessando propriedades
    console.log(carro.marca,carro.modelo)

    //Alterando propriedades
    carro.cor = 'blue'

    console.log(carro.cor)

    //Adicionando novas propriedades
    carro.descricao = `${carro.marca},${carro.modelo},${carro.cor},${carro.ano}`

    console.log(carro.descricao)

    //Removendo propriedades 
    delete carro.cor

    console.log(carro.cor)

   