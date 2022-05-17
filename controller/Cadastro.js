import {    Api     } from "../controller/API.js"

export class CadastroUsuario {

    static templateCadastro(){
        const containerCadastro     = document.createElement('div');
        const titulo                = document.createElement('div');
        const formularioCadastro    = document.createElement('form');
        
        const formNome              = document.createElement('div');
        const formEmail             = document.createElement('div');
        const formSenha             = document.createElement('div');

        const labelNome             = document.createElement('label');
        const inputNome             = document.createElement('input');
        const labelEmail            = document.createElement('label');
        const inputEmail            = document.createElement('input');
        const labelSenha            = document.createElement('label');
        const inputSenha            = document.createElement('input');
        const btnCadastro           = document.createElement('button');
        const msgRetorno            = document.createElement('span');

        containerCadastro.classList.add('containerCadastro');
        titulo.classList.add('titulo');
        formularioCadastro.classList.add('formularioCadastro');

        formNome.classList.add('form');
        formEmail.classList.add('form');
        formSenha.classList.add('form');
        btnCadastro.classList.add('btnNovoCadastro');

        formularioCadastro.id   =   'formularioCadastro';
        inputNome.id            =   'name';
        inputEmail.id           =   'email';
        inputSenha.id           =   'password';
        btnCadastro.id          =   'btnNovoCadastro';
        msgRetorno.id           =   'msgRetorno';

        titulo.innerText        = 'Novo Cadastro';
        labelNome.innerText     = 'Nome';
        inputNome.placeholder   = 'Nome';
        labelEmail.innerText    = 'E-mail';
        inputEmail.placeholder  = 'E-mail';
        labelSenha.innerText    = 'Senha';
        inputSenha.placeholder  = 'Senha';
        btnCadastro.innerText   = 'Cadastrar';
        
        inputNome.type  = 'text';
        inputEmail.type = 'email';
        inputSenha.type = 'password';

        formNome.append(labelNome, inputNome);
        formEmail.append(labelEmail, inputEmail);
        formSenha.append(labelSenha, inputSenha);

        formularioCadastro.append(formNome, formEmail, formSenha, btnCadastro, msgRetorno);

        containerCadastro.append(titulo, formularioCadastro);

        document.body.append(containerCadastro)
    }

    static async cadastro(data) {
        const response = await Api.criarUsuario(data);
        
        if(response === 'User Already Exists!' || (response.status != undefined && response.status.toLowerCase() === 'error')) {
            
            if (response === 'User Already Exists!') {
                return response;
            }
            return response.message;

        } else {
            return 'Usuário cadastrado com sucesso! Você será redirecionado para a página inicial';
        }

    }
}