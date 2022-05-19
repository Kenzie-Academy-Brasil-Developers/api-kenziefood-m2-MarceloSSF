import Carrinho from "../HTMLlinkJS/carrinho.js";

export class Vitrine {
    static arrayCarrinho = []
    static criarCards(item) {

        const li                = document.createElement('li');
        const imgProduto        = document.createElement('img');
        const h2                = document.createElement('h2');
        const descricao         = document.createElement('p');
        const categorias        = document.createElement('div');
        const valorCarrinho     = document.createElement('div');
        const simboloMoeda      = document.createElement('p');
        const valorProduto      = document.createElement('span');
        const buttonAddCarrinho = document.createElement('button');
        const imgAddCarrinho    = document.createElement('img');

        li.id                   = 'produto';
        categorias.id           = 'categorias';
        buttonAddCarrinho.id    = 'adicionarCarrinho';
        imgAddCarrinho.id       = 'adicionarCarrinho';

        li.classList.add('card-produto');
        imgProduto.classList.add('img-produto');
        descricao.classList.add('descricao-produto');
        categorias.classList.add('categoria-produto');
        valorCarrinho.classList.add('valor-carrinho');
        simboloMoeda.classList.add('simbolo-moeda');
        valorProduto.classList.add('valor-produto');

        
        imgProduto.src          = item.imagem;
        h2.innerText            = item.nome;
        descricao.innerText     = item.descricao;
        categorias.innerText    = item.categoria;
        simboloMoeda.innerText  = 'R$ ';
        valorProduto.innerText  = item.preco;
        imgAddCarrinho.src      = '../pages/img/Button CirclebotaoCarrinho.svg';
        
        simboloMoeda.append(valorProduto);
        buttonAddCarrinho.append(imgAddCarrinho);
        valorCarrinho.append(simboloMoeda, buttonAddCarrinho);
        
        li.append(imgProduto, h2, descricao, categorias, valorCarrinho);
        
        buttonAddCarrinho.addEventListener('click', () => {
            this.arrayCarrinho.push(item)
            console.log(this.arrayCarrinho)
            localStorage.setItem('itensCarrinho', JSON.stringify(this.arrayCarrinho))
            Carrinho.desktop()
        })
        return li;
    }


    static logout() {
        window.localStorage.setItem('Token', '');
        window.location.href = '../index.html';
    }

    static mostrarBotaoAdm (){
        const btnCadastroItens = document.getElementById('cadastroItens');
        if(localStorage.getItem('Token') === '') {
            btnCadastroItens.style.visibility = 'hidden';
        }
    }
}
