import { Vitrine } from "../controller/VitrineController.js";
import { Api } from "../controller/API.js";
import { Filtros } from "../controller/filtrarProdutos.js";


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

    if(event.target.className == 'button-todos desactive-todos'){
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        //adicionar classes desativadas
        botaoPanificadora.classList.add('desactive-panificadora')
        botaoFrutas.classList.add('desactive-frutas')
        botaoBebidas.classList.add('desactive-bebidas')

        //adiciona active
        botaoTodos.classList.add('active')

        //remove active dos demais
        botaoTodos.classList.remove('desactive-todos')
        botaoPanificadora.classList.remove('active')
        botaoFrutas.classList.remove('active')
        botaoBebidas.classList.remove('active')
    }   
        
        ul.innerHTML = '';
        const listaFiltrada = await Filtros.filtro('Todos');
        criarVitrine(listaFiltrada);
})        

panificadora.addEventListener('click', async () => {

    if(event.target.className == 'button-panificadora desactive-panificadora'){
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        //adicionar classes desativadas
        botaoTodos.classList.add('desactive-todos')
        botaoFrutas.classList.add('desactive-frutas')
        botaoBebidas.classList.add('desactive-bebidas')

        //adiciona active
        botaoPanificadora.classList.add('active')

        //remove active dos demais
        botaoPanificadora.classList.remove('desactive-panificadora')
        botaoTodos.classList.remove('active')
        botaoFrutas.classList.remove('active')
        botaoBebidas.classList.remove('active')
    }   


    

    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Panificadora');
    criarVitrine(listaFiltrada);
})

frutas.addEventListener('click', async () => {

    if(event.target.className == 'button-frutas desactive-frutas'){
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]

        //adicionar classes desativadas
        botaoTodos.classList.add('desactive-todos')
        botaoPanificadora.classList.add('desactive-panificadora')
        botaoBebidas.classList.add('desactive-bebidas')

        //adiciona active
        botaoFrutas.classList.add('active')

        //remove active dos demais
        botaoFrutas.classList.remove('desactive-frutas')
        botaoTodos.classList.remove('active')
        botaoPanificadora.classList.remove('active')
        botaoBebidas.classList.remove('active')
    }   

    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Frutas');
    criarVitrine(listaFiltrada);
})

bebidas.addEventListener('click', async () => {

    if(event.target.className == 'button-bebidas desactive-bebidas'){
        const botaoBebidas = document.getElementsByClassName('button-bebidas')[0]
        const botaoFrutas = document.getElementsByClassName('button-frutas')[0]
        const botaoTodos = document.getElementsByClassName('button-todos')[0]
        const botaoPanificadora = document.getElementsByClassName('button-panificadora')[0]
        

        //adicionar classes desativadas
        botaoTodos.classList.add('desactive-todos')
        botaoPanificadora.classList.add('desactive-panificadora')
        botaoFrutas.classList.add('desactive-frutas')

        //adiciona active
        botaoBebidas.classList.add('active')

        //remove active dos demais
        botaoBebidas.classList.remove('desactive-bebidas')
        botaoFrutas.classList.remove('active')
        botaoTodos.classList.remove('active')
        botaoPanificadora.classList.remove('active')
    }   

    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Bebidas');
    criarVitrine(listaFiltrada);
})
