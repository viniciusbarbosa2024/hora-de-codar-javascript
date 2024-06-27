let pessoasCadastradas = []
const resultado = document.getElementById('res')

function cadastro() {
    const person = {
        nome: document.getElementById('nome').value,    
        idade: document.getElementById('idade').value
    }

    pessoasCadastradas.push(person)
}

function exibirPessoasCadastradas() {
    for (let pos in pessoasCadastradas) {
        resultado.innerHTML += pessoasCadastradas[pos].nome   
    }
    
    
}