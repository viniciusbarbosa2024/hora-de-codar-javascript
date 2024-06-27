const obj = {
    a: 'teste',
    b: 50
}

const obj2 = {
    c: true
}

Object.assign(obj2,obj)

console.log(obj2)

//Quando uma propriedade do objeto receptor das propriedades de outro objeto possui o mesmo nome da propriedade do objeto copiado,a propriedade do copiado sobrepõe a do receptor. Ex.:

const obj3 = {
    a: 500
}

Object.assign(obj3,obj)

console.log(obj3) //O a:'teste' sobrepõe o a:500