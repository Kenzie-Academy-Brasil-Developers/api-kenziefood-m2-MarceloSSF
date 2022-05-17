import { Vitrine } from "../controller/VitrineController.js";
import { Api } from "../controller/API.js";

const produtos = await Api.buscarProdutosAPI();
const ul = document.querySelector('.container-produtos');

produtos.forEach(item => {
    const li = Vitrine.criarCards(item);
    ul.appendChild(li);
})
