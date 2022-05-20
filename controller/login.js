import { Api } from "./API.js"

const botaoLogin = document.getElementById("botao-login")
window.localStorage.setItem('itensCarrinho', '');
botaoLogin.addEventListener("click", async (event)=>{
    event.preventDefault()
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let spanMsgRetorno = document.getElementById('msgRetorno');

    let body = {
        "email": email,
        "password": senha
    }
    const response = await Api.autenticarUsuario(body);
    
    if(response.error != '' && response.error != undefined) {
        spanMsgRetorno.innerText = response.error;
        
    } else {
        window.localStorage.setItem('Token', response)
        
        spanMsgRetorno.innerText = 'Login realizado com sucesso! Você será redirecionado para a página inicial.';
        setTimeout(() => {
            window.location.href = './pages/vitrine.html';
        }, 2000);
    }

}
)

const botaoAnonimo = document.getElementById("botao-anonimo")
botaoAnonimo.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.href = './pages/vitrine.html';
})

const cadastro = document.getElementById("botao-cadastro")
cadastro.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.href = './pages/cadastroUsuario.html';
})