import { Api } from "./API.js";

const token = window.localStorage.getItem('Token');
const cardsUsuario = await Api.buscarItensCriados(token);
const btnCadastro = document.getElementById('botao-cadastroItem');

const inputNome         = document.getElementById('nome');
const inputPreco        = document.getElementById('preco');
const inputCategoria    = document.getElementById('categoria');
const inputImagem       = document.getElementById('imagem');
const inputDescricao    = document.getElementById('descricao');

btnCadastro.addEventListener('click', async function(event) {
    event.preventDefault();
    const novoItem = {
        "nome": inputNome.value,
        "preco": +inputPreco.value,
        "categoria": inputCategoria.value,
        "imagem": inputImagem.value,
        "descricao" : inputDescricao.value,
    }
    
    await Api.criarItens(novoItem, token);
    
    mostrarLista(await Api.buscarItensCriados(token));
});

function mostrarLista(arrayCards) {

    const listaCards        = document.getElementById('cardsCriados');
    listaCards.innerHTML    = '';

    if(arrayCards.length === 0) {
        const h1 = document.createElement('h1');
        h1.innerText = 'Sem itens criados';
        h1.style.marginLeft = '30px'
        listaCards.appendChild(h1)
    } else {
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
    
            btnSalvar.addEventListener('click', async function(event) {
                event.preventDefault();
                const itemId = arrayCards[i].id;
                const itemEditado = {
                    nome: areaNome.value,
                    preco: +areaPreco.value,
                    categoria: areaCategoria.value,
                    descricao: descricao.value
                }

                await Api.editarItensCriados(itemEditado, itemId ,token);
                mostrarLista(await Api.buscarItensCriados(token));
            })
            
            btnExcluir.addEventListener('click', async function(event) {
                event.preventDefault();

                areaNome.classList.replace('edit', 'noEdit');
                areaPreco.classList.replace('edit', 'noEdit');
                areaCategoria.classList.replace('edit', 'noEdit');
                descricao.classList.replace('edit', 'noEdit');
                btnSalvar.style.visibility = 'hidden';

                const idItem = arrayCards[i].id;
                await Api.deletarItensCriados(idItem, token);
                mostrarLista(await Api.buscarItensCriados(token));
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
}
mostrarLista(cardsUsuario)