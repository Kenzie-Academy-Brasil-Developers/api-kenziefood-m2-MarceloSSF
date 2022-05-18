import { Api } from "./API.js"

const botaoLogin = document.getElementById("botao-login")
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
    console.log(response);
    
    if(response.error != '' && response.error != undefined) {
        spanMsgRetorno.innerText = response.error;
        
    } else {
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