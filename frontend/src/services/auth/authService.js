import { HttpClient } from "../../infra/HttpClient";

export const authService = {
    async login (username, password){
        return await HttpClient('http://localhost:4000/api/login', {
            method: 'POST',
            body: {username, password}
        })
        .then((response) => {
            if(!response.ok) throw new Error('Usuários ou senhas inválidos!');
        })
    }
}

