import { Vitrine } from "../controller/VitrineController.js";
import { Api } from "../controller/API.js";
import { Filtros } from "../controller/filtrarProdutos.js";

Vitrine.mostrarBotaoAdm();
const inputBusca    = document.getElementById('pesquisar');
import Carrinho from "./carrinho.js";

const btnLogout        = document.getElementById('logout');
const btnCadastroItens = document.getElementById('cadastroItens');

btnLogout.addEventListener('click', Vitrine.logout)
btnCadastroItens.addEventListener('click', function() {   window.location.href = './cadastroItens.html'   })

const todos         = document.querySelector('.button-todos');
const panificadora  = document.querySelector('.button-panificadora');
const frutas        = document.querySelector('.button-frutas');
const bebidas       = document.querySelector('.button-bebidas');

const ul = document.querySelector('.container-produtos');

const produtos = await Api.buscarProdutosAPI();
criarVitrine(produtos);

function criarVitrine(produtos) {
    produtos.forEach(item => {
        const li = Vitrine.criarCards(item);
        ul.appendChild(li);
    });
}

todos.addEventListener('click', async () => {
    activeDesactiveTodos()
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Todos');
    criarVitrine(listaFiltrada);
})        

panificadora.addEventListener('click', async () => {
    activeDesactivePanificadora()
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Panificadora');
    criarVitrine(listaFiltrada);
})

frutas.addEventListener('click', async () => {
    activeDesactiveFrutas()
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Frutas');
    criarVitrine(listaFiltrada);
})

bebidas.addEventListener('click', async () => {
    activeDesactiveBebidas()
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Bebidas');
    criarVitrine(listaFiltrada);
})

inputBusca.addEventListener('input', async () => {
    ul.innerHTML = '';
    const inputValor = inputBusca.value;
    const listaFiltrada = await Filtros.buscarProduto(inputValor);
    criarVitrine(listaFiltrada);
})   
function activeDesactiveTodos(){    
    if(event.target.className == 'button-todos desactive-todos'){
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        botaoPanificadora.classList.add('desactive-panificadora')
        botaoFrutas.classList.add('desactive-frutas')
        botaoBebidas.classList.add('desactive-bebidas')

        botaoTodos.classList.add('active')

        botaoTodos.classList.remove('desactive-todos')
        botaoPanificadora.classList.remove('active')
        botaoFrutas.classList.remove('active')
        botaoBebidas.classList.remove('active')
    } 
}

function activeDesactivePanificadora(){
    if(event.target.className == 'button-panificadora desactive-panificadora'){
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        botaoTodos.classList.add('desactive-todos')
        botaoFrutas.classList.add('desactive-frutas')
        botaoBebidas.classList.add('desactive-bebidas')

        botaoPanificadora.classList.add('active')

        botaoPanificadora.classList.remove('desactive-panificadora')
        botaoTodos.classList.remove('active')
        botaoFrutas.classList.remove('active')
        botaoBebidas.classList.remove('active')
    }   
}

function activeDesactiveFrutas(){
    if(event.target.className == 'button-frutas desactive-frutas'){
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        botaoTodos.classList.add('desactive-todos')
        botaoPanificadora.classList.add('desactive-panificadora')
        botaoBebidas.classList.add('desactive-bebidas')

        botaoFrutas.classList.add('active')

        botaoFrutas.classList.remove('desactive-frutas')
        botaoTodos.classList.remove('active')
        botaoPanificadora.classList.remove('active')
        botaoBebidas.classList.remove('active')
    }   

}

function activeDesactiveBebidas(){
    if(event.target.className == 'button-bebidas desactive-bebidas'){
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        

        botaoTodos.classList.add('desactive-todos')
        botaoPanificadora.classList.add('desactive-panificadora')
        botaoFrutas.classList.add('desactive-frutas')

        botaoBebidas.classList.add('active')

        botaoBebidas.classList.remove('desactive-bebidas')
        botaoFrutas.classList.remove('active')
        botaoTodos.classList.remove('active')
        botaoPanificadora.classList.remove('active')
    }   
}

Carrinho.desktop()