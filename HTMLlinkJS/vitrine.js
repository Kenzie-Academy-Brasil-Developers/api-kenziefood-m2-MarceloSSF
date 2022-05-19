import { Vitrine } from "../controller/VitrineController.js";
import { Api } from "../controller/API.js";
import { Filtros } from "../controller/filtrarProdutos.js";
import Carrinho from "./carrinho.js";



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
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Todos');
    criarVitrine(listaFiltrada);
})        

panificadora.addEventListener('click', async () => {
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Panificadora');
    criarVitrine(listaFiltrada);
})

frutas.addEventListener('click', async () => {
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Frutas');
    criarVitrine(listaFiltrada);
})

bebidas.addEventListener('click', async () => {
    ul.innerHTML = '';
    const listaFiltrada = await Filtros.filtro('Bebidas');
    criarVitrine(listaFiltrada);
})

Carrinho.desktop()
Carrinho.teste()