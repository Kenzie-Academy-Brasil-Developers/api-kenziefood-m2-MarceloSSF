import { Api } from "./API.js"

const botaoLogin = document.getElementById("botao-login")
botaoLogin.addEventListener("click", async (event)=>{
    event.preventDefault()
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let body = {
        "email": email,
        "password": senha
    }

    console.log(await Api.autenticarUsuario(body))
}
)

const botaoAnonimo = document.getElementById("botao-anonimo")
botaoAnonimo.addEventListener("click", (event)=>{
    event.preventDefault()
})

const cadastro = document.getElementById("botao-cadastro")
cadastro.addEventListener("click", (event)=>{
    event.preventDefault()
})