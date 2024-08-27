const gjsdkghsghsghsgsdoighosidg = {
    a: 5,
    b: 2,
    c: 3
}

//Para evitar isso (Ter que estar usando o nome do objeto para acessar as propriedades):

//console.log((gjsdkghsghsghsgsdoighosidg.a**2 + 2*gjsdkghsghsghsgsdoighosidg.a*gjsdkghsghsghsgsdoighosidg.b + gjsdkghsghsghsgsdoighosidg.c**2))

//Podemos:

// const a = gjsdkghsghsghsgsdoighosidg.a
// const b = gjsdkghsghsghsgsdoighosidg.b
// const c = gjsdkghsghsghsgsdoighosidg.c

// console.log(a**2 + 2*a*b + c**2)


//Ou usar o destructuring (Simplifica bastante)

const {a,b,c} = gjsdkghsghsghsgsdoighosidg

console.log(a**2 + 2*a*b + c**2)


