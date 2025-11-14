let listaProdutos = []

function cadastrar(){
    let produto = document.getElementById('produto')
    listaProdutos.push(produto.value)
    console.log(produto.value)
}

function listarProdutos() {
    console.log(`Os produtos cadastrados foram: ${listaProdutos}`)
}