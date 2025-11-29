let cliente = document.querySelector('.Cliente');
let vendedor = document.querySelector('.Vendedor'); 
// Redireciona para a pagina de login do cliente
cliente.addEventListener('click', () => {
    window.location.href = '../paginaLogin/loginCliente/loginCli.html';
});
// Redireciona para a pagina de login do vendedor
vendedor.addEventListener('click', () =>{
    window.location.href = '../paginaLogin/loginVendedor/loginVen.html';
})