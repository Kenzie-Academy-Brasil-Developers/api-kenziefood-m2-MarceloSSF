import { Api } from "./API.js";

const user = {
    email: "soaresmarcelo94@gmail.com",
    password: "123"
}

const autenticarUsuario = await Api.autenticarUsuario(user);
const cardsUsuario = await Api.buscarItensCriados(autenticarUsuario);
// const itemCriado = await Api.criarItens(itemTeste, autenticarUsuario)
console.log(autenticarUsuario);
console.log(cardsUsuario);

const btnCadastro = document.getElementById('botao-cadastroItem');

const inputNome         = document.getElementById('nome');
const inputPreco        = document.getElementById('preco');
const inputCategoria    = document.getElementById('categoria');
const inputImagem       = document.getElementById('imagem');
const inputDescricao    = document.getElementById('descricao');

btnCadastro.addEventListener('click', async function(event) {
    const novoItem = {
        "nome": inputNome.value,
        "preco": +inputPreco.value,
        "categoria": inputCategoria.value,
        "imagem": inputImagem.value,
        "descricao" : inputDescricao.value,
    }

    const itemCriado = await Api.criarItens(novoItem, autenticarUsuario);
    console.log(itemCriado);
    mostrarLista(cardsUsuario);
});

function mostrarLista(arrayCards) {

    const listaCards        = document.getElementById('cardsCriados');
    listaCards.innerHTML    = '';

    for(let i = 0; i < arrayCards.length; i++) {

        const li                = document.createElement('li');
        const img               = document.createElement('img');
        
        img.src = arrayCards[i].imagem;


        const divInfo           = document.createElement('div');
        const nome              = document.createElement('p');
        const areaNome          = document.createElement('textarea');
        const preco             = document.createElement('p');
        const areaPreco         = document.createElement('textarea');
        const categoria         = document.createElement('p');
        const areaCategoria     = document.createElement('textarea');
        const descricao         = document.createElement('textarea');

        divInfo.classList.add('infoItem');
        areaNome.classList.add('noEdit');
        areaPreco.classList.add('noEdit');
        areaCategoria.classList.add('noEdit');
        descricao.classList.add('noEdit');   

        areaNome.id      = 'pText';
        areaPreco.id     = 'pText';
        areaCategoria.id = 'pText';

        nome.innerText              = 'Nome: ';
        preco.innerText             = 'Preço: R$';
        categoria.innerText         = 'Categoria: ';
        areaNome.innerText          = arrayCards[i].nome;
        areaPreco.innerText         = arrayCards[i].preco;
        areaCategoria.innerText     = arrayCards[i].categoria;
        descricao.innerText         = arrayCards[i].descricao;


        const divBotoes         = document.createElement('div');
        const btnEditar         = document.createElement('button');
        const btnExcluir        = document.createElement('button');
        const btnSalvar         = document.createElement('button');

        divBotoes.classList.add('botoes');
        btnEditar.classList.add('editar');
        btnExcluir.classList.add('excluir');
        btnSalvar.classList.add('salvar');
        
        btnSalvar.style.visibility = 'hidden';

        btnEditar.addEventListener('click', function(){
            areaNome.classList.replace('noEdit', 'edit');
            areaPreco.classList.replace('noEdit', 'edit');
            areaCategoria.classList.replace('noEdit', 'edit');
            descricao.classList.replace('noEdit', 'edit');
            btnSalvar.style.visibility = 'visible';
        });

        btnSalvar.addEventListener('click', async function() {
            const idItem = arrayCards[i].id;
            
            const cardEditado = {
                nome: areaNome.value,
                preco: +areaPreco.value,
                categoria: areaCategoria.value,
                descricao: descricao.value
            }
            
            
            console.log(await Api.editarItensCriados(JSON.stringify(cardEditado), idItem, autenticarUsuario));
        })

        btnEditar.innerText = 'Editar';
        btnExcluir.innerText = 'Excluir';
        btnSalvar.innerText = 'Salvar';

        nome.appendChild(areaNome);
        preco.appendChild(areaPreco);
        categoria.appendChild(areaCategoria);

        divInfo.append(nome, preco, categoria, descricao);
        divBotoes.append(btnEditar, btnExcluir,btnSalvar);
        li.append(img, divInfo, divBotoes);

        listaCards.appendChild(li);
    }

}

mostrarLista(cardsUsuario)