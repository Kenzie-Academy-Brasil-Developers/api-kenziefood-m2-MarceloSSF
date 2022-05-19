export class Api {

    static token = '';

    static async buscarProdutosAPI() {

        const URLGET = 'https://api-kenzie-food.herokuapp.com/products';

        const produtos = await fetch(URLGET, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
    
        return produtos;
    }

    static async criarUsuario(data) {

        const URLCRIARUSUARIO = 'https://api-kenzie-food.herokuapp.com/auth/register';

        const response = await fetch(URLCRIARUSUARIO, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)

        return response;
    }

    static async autenticarUsuario(data) {

        const URLAUTENTICAR = 'https://api-kenzie-food.herokuapp.com/auth/login'
        const token = await fetch(URLAUTENTICAR, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('Token', res)
                return res;
            })
            .catch(error => error)

            return token;
    }

    static async buscarItensCriados(token) {

        const URLPEGARCART = 'https://api-kenzie-food.herokuapp.com/my/products';

        const response = await fetch(URLPEGARCART, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
    
        return response;
    }

    static async criarItens(data, token) {
        const URLCRIARITEM = 'https://api-kenzie-food.herokuapp.com/my/products';
        const response = await fetch(URLCRIARITEM, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)

        return response;
    }

    static async editarItensCriados(data, id, token) {
        const URLEDITARITEM = `https://api-kenzie-food.herokuapp.com/my/products/${id}`;
        const response = await fetch(URLEDITARITEM, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)

        return response;
    }

    static async deletarItensCriados(id, token) {
        const URLDELETARCARRINHO = `https://api-kenzie-food.herokuapp.com/my/products/${id}`;

        const response = await fetch(URLDELETARCARRINHO, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
        
        return response;
    }
}
