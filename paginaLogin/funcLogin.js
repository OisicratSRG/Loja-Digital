let user = document.querySelector('#user')
let password = document.querySelector('#password')
let infoLogin = [] //Era pra ser um banco de dados

function login(){
    if (user.value === '' || password.value === ''){
        console.log('ERROR')
    } else {
    infoLogin.push(user.value)
    infoLogin.push(password.value)
    console.log(infoLogin)
    window.location.href = '../cadastroDeProdutos/cadastro.html'
    }
}
