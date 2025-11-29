//Coleta os dados inseridos nos inputs
let user = document.querySelector('#user')
let password = document.querySelector('#password')
//Cria um array para armazenar as informações
let infoLogin = [] //Era pra ser um banco de dados
//Função de login
function login(){
    //Verifica se os dados foram preenchidos corretamente
    if (user.value === '' || password.value === ''){
        alert('Por favor, preencha todos os campos.')
    } else {
    //Armazena as informações no array
    infoLogin.push(user.value)
    infoLogin.push(password.value)
    console.log(infoLogin)
    //Redireciona para a página principal
    window.location.href = '../../Principal/main.html'
    }
}