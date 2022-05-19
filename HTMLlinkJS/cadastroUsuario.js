import { CadastroUsuario } from "../controller/Cadastro.js";

CadastroUsuario.templateCadastro();

const btnCadastro   = document.getElementById('btnNovoCadastro');
const form          = document.getElementById('formularioCadastro');
const msgRetorno    = document.getElementById('msgRetorno')

btnCadastro.addEventListener('click', async (event) => {
    event.preventDefault()
    
    const usuario = {}
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value != '') {
            usuario[form.elements[i].id] = form.elements[i].value;
        }
    }
    
    const response = await CadastroUsuario.cadastro(usuario);
    
    if(response === 'Usuário cadastrado com sucesso! Você será redirecionado para a página inicial') {
        msgRetorno.innerText = response;
        setTimeout(() => {
            window.location.href = "../index.html"
        },3000)
        
    } else {
        msgRetorno.innerText = response;
    }

})