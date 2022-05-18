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

}