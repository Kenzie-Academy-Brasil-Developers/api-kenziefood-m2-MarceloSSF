import { Api } from "./API.js";

export class Filtros {
    
    static async filtro(filtro){
        let retorno = [];
        const todosProdutos = await Api.buscarProdutosAPI()

        if(filtro === 'Todos') {
            retorno = todosProdutos;
        } else {

            retorno = todosProdutos.filter(item => {
                return item.categoria === filtro;
            })
        }

        return retorno;
    }

    static async buscarProduto(input){
        let retorno = [];
        const todosProdutos = await Api.buscarProdutosAPI()

        if(input === '') {

            retorno = todosProdutos;

        } else {

            retorno = todosProdutos.filter(item => {
                return item.nome.toLowerCase().indexOf(input.toLowerCase()) > -1
            })
        }

        return retorno;
        
    }

}