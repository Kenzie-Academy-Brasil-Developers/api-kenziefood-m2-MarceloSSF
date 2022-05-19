import { Vitrine } from "../controller/VitrineController.js";

const abrirModalMobile = document.getElementsByClassName('cart--button--mobile')
const divCartContainer = document.createElement('div')
const cartContainer = divCartContainer.classList.add('cart--container')
const teste = divCartContainer.classList.add('teste')
const section = document.getElementById('vitrine')
class Carrinho {

    static criarModal () {
        // if (arrayCarrinho === []) {
            if (Vitrine.arrayCarrinho.length === 0) {
                section.appendChild(divCartContainer)
                divCartContainer.innerHTML = `   
                <div class="header--modal">
                <div class="text--modal">
                <img src="/img/cart.png" alt="">
                <span>Carrinho</span>
                </div>
                <button id="fechar--modal">X</button>
                </div>
                <div class="cart--main">
                <div class="cart--vazio--container">
                <img src="../pages/img/shopping-bag.png" alt="" class="img--cart--vazio">
                <span class="text--cart--vazio">Por enquanto não temos produtos no carrinho</span>
                </div>
                </div>
                `
                const botaoFecharModal = document.getElementById('fechar--modal')
                botaoFecharModal.addEventListener('click', () => {
                    divCartContainer.innerHTML = ''
                    section.removeChild(divCartContainer)
                })
            }
    
        //}
        else {
            const somaProdutos = Vitrine.arrayCarrinho.reduce((acc, elem) => acc + elem.preco, 0 )
            section.appendChild(divCartContainer)
            divCartContainer.innerHTML = `
            <div class="header--modal">
                <div class="text--modal">
                    <img src="/img/cart.png" alt="">
                    <span>Carrinho</span>
                </div>
                <button id="fechar--modal">X</button>
            </div>
            <div class="cart--main">
                <ul class="ul--produtos">
                </ul>
                <div class="quantidade--preco--cart">
                    <div class="quantidadefinal--cart">
                        <span class="quantidade">Quantidade</span>
                        <span class="quantidade--valor">${Vitrine.arrayCarrinho.length}</span>
                    </div>
                    <div class="precofinal--cart">
                        <span class="preco">Preço</span>
                        <span class="preco--valor">R$ ${somaProdutos}</span>
                    </div>
                </div>
            </div>
            `
            const ul = document.getElementsByClassName('ul--produtos')
            const botaoFecharModal = document.getElementById('fechar--modal')
            botaoFecharModal.addEventListener('click', () => {
                divCartContainer.innerHTML = ''
                section.removeChild(divCartContainer)
            })
            Vitrine.arrayCarrinho.forEach((elem) => {
    
                const li = document.createElement('li')
                const imgProduto = document.createElement('img')
                const div = document.createElement('div')
                const h2 = document.createElement('h2')
                const spanSecao = document.createElement('span')
                const spanPreco = document.createElement('span')
                const imgLixo = document.createElement('img')
    
                li.classList.add("li--produtos")
                imgProduto.classList.add("img--cart--produtos")
                div.classList.add("text--produtos")
                h2.classList.add("nome--cart--produto")
                spanSecao.classList.add("secao--cart--produto")
                spanPreco.classList.add("preco--cart--produto")
                imgLixo.id = "remover--cart--produtos"
                
                imgProduto.src = elem.imagem
                h2.innerText = elem.nome
                spanSecao.innerText = elem.categoria
                spanPreco.innerText = elem.preco
                imgLixo.src = "../pages/img/trash.png"
                
                div.append(h2, spanSecao, spanPreco)
                li.append(imgProduto, div, imgLixo)
                
                ul[0].appendChild(li)
    
                imgLixo.addEventListener('click', () => {
                    Vitrine.arrayCarrinho.splice(elem, 1)
                    Carrinho.criarModal()
                })
            })
        }
    }
    
    
    
    static desktop () {
        if (screen.width >= 1366) {
            if (Vitrine.arrayCarrinho.length === 0) {
                section.appendChild(divCartContainer)
                divCartContainer.innerHTML = `   
                <div class="header--modal">
                    <div class="text--modal">
                        <img src="../pages/img/cart.png" alt="">
                        <span>Carrinho</span>
                    </div>
                </div>
                <div class="cart--main">
                    <div class="cart--vazio--container">
                        <img src="../pages/img/shopping-bag.png" alt="" class="img--cart--vazio">
                        <span class="text--cart--vazio">Por enquanto não temos produtos no carrinho</span>
                    </div>
                </div>
                `
            }
            else {
                const somaProdutos = Vitrine.arrayCarrinho.reduce((acc, elem) => acc + elem.preco, 0 )
                section.appendChild(divCartContainer)
                divCartContainer.innerHTML = `
            <div class="header--modal">
                <div class="text--modal">
                    <img src="../pages/img/cart.png" alt="">
                    <span>Carrinho</span>
                </div>
            </div>
            <div class="cart--main">
                <ul class="ul--produtos">
                </ul>
                <div class="quantidade--preco--cart">
                    <div class="quantidadefinal--cart">
                        <span class="quantidade">Quantidade</span>
                        <span class="quantidade--valor">${Vitrine.arrayCarrinho.length}</span>
                    </div>
                    <div class="precofinal--cart">
                        <span class="preco">Preço</span>
                        <span class="preco--valor">R$ ${somaProdutos}</span>
                    </div>
                </div>
            </div>
            `
            const ul = document.getElementsByClassName('ul--produtos')
            Vitrine.arrayCarrinho.forEach((elem) => {
    
                const li = document.createElement('li')
                const imgProduto = document.createElement('img')
                const div = document.createElement('div')
                const h2 = document.createElement('h2')
                const spanSecao = document.createElement('span')
                const spanPreco = document.createElement('span')
                const imgLixo = document.createElement('img')
    
                li.classList.add("li--produtos")
                imgProduto.classList.add("img--cart--produtos")
                div.classList.add("text--produtos")
                h2.classList.add("nome--cart--produto")
                spanSecao.classList.add("secao--cart--produto")
                spanPreco.classList.add("preco--cart--produto")
                imgLixo.id = "remover--cart--produtos"
                
                imgProduto.src = elem.imagem
                h2.innerText = elem.nome
                spanSecao.innerText = elem.categoria
                spanPreco.innerText = elem.preco
                imgLixo.src = "../pages/img/trash.png"
                
                div.append(h2, spanSecao, spanPreco)
                li.append(imgProduto, div, imgLixo)
                
                ul[0].appendChild(li)
    
                imgLixo.addEventListener('click', () => {
                    Vitrine.arrayCarrinho.splice(elem, 1)
                    Carrinho.desktop()
                })
                })
             }
        }
    }

    static teste () {
        if (screen.width >= 1366) {
            if (localStorage.getItem('itensCarrinho') === 0) {
                section.appendChild(divCartContainer)
                divCartContainer.innerHTML = `   
                <div class="header--modal">
                    <div class="text--modal">
                        <img src="../pages/img/cart.png" alt="">
                        <span>Carrinho</span>
                    </div>
                </div>
                <div class="cart--main">
                    <div class="cart--vazio--container">
                        <img src="../pages/img/shopping-bag.png" alt="" class="img--cart--vazio">
                        <span class="text--cart--vazio">Por enquanto não temos produtos no carrinho</span>
                    </div>
                </div>
                `
            }
            else {
                const somaProdutos = Vitrine.arrayCarrinho.reduce((acc, elem) => acc + elem.preco, 0 )
                section.appendChild(divCartContainer)
                divCartContainer.innerHTML = `
            <div class="header--modal">
                <div class="text--modal">
                    <img src="../pages/img/cart.png" alt="">
                    <span>Carrinho</span>
                </div>
            </div>
            <div class="cart--main">
                <ul class="ul--produtos">
                </ul>
                <div class="quantidade--preco--cart">
                    <div class="quantidadefinal--cart">
                        <span class="quantidade">Quantidade</span>
                        <span class="quantidade--valor">${Vitrine.arrayCarrinho.length}</span>
                    </div>
                    <div class="precofinal--cart">
                        <span class="preco">Preço</span>
                        <span class="preco--valor">R$ ${somaProdutos}</span>
                    </div>
                </div>
            </div>
            `
            const ul = document.getElementsByClassName('ul--produtos')
            localStorage.getItem('itensCarrinho').forEach((elem) => {
    
                const li = document.createElement('li')
                const imgProduto = document.createElement('img')
                const div = document.createElement('div')
                const h2 = document.createElement('h2')
                const spanSecao = document.createElement('span')
                const spanPreco = document.createElement('span')
                const imgLixo = document.createElement('img')
    
                li.classList.add("li--produtos")
                imgProduto.classList.add("img--cart--produtos")
                div.classList.add("text--produtos")
                h2.classList.add("nome--cart--produto")
                spanSecao.classList.add("secao--cart--produto")
                spanPreco.classList.add("preco--cart--produto")
                imgLixo.id = "remover--cart--produtos"
                
                imgProduto.src = elem.imagem
                h2.innerText = elem.nome
                spanSecao.innerText = elem.categoria
                spanPreco.innerText = elem.preco
                imgLixo.src = "../pages/img/trash.png"
                
                div.append(h2, spanSecao, spanPreco)
                li.append(imgProduto, div, imgLixo)
                
                ul[0].appendChild(li)
    
                imgLixo.addEventListener('click', () => {
                    Vitrine.arrayCarrinho.splice(elem, 1)
                    Carrinho.desktop()
                })
                })
             }
        }
    }
}


abrirModalMobile[0].addEventListener('click', Carrinho.criarModal)


export default Carrinho