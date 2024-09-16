const objTeste = {
    name: 'Vinícius',
    idade: 20
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(objTeste)
})
.then((res) => res.json()).then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/99')
.then((res) => res.json()).then(data => console.log(data))