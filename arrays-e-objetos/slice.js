//Retorna um subconjunto(array) do array em que ele é aplicado

let testeSlice = [1,2,3,4,5]

// slice(índice inicial do subArray,índice final do subArray)

let subArray = testeSlice.slice(2,4) //O slice ignora o elemento do índice final

console.log(subArray) //Exibe [3,4]

console.log(testeSlice) //O slice não altera o array original