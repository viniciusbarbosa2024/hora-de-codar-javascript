/*

let fat = 1

function fatorial(n) {
    if (n>=1) {
        fat = n*fat 
        n--
        fatorial(n)
    } else {
        return fat
    }

}

console.log(fatorial(5))

// Como a função fatorial(5) não possui return associado, será exibido "undefined" no console

//Isso ocorre pq o "return fat" está ssociado a fatorial(0) e não a fatorial(5)

*/

function fatorial(n) {
    if (n===0) {
        return 1
    }
    return n*fatorial(n-1)
}

console.log(fatorial(5))


