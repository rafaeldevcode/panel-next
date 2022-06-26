import { HttpClient } from "../../infra/HttpClient";
import { tokenService } from './tokenService';

export const authService = {
    async login ({ username, password }){
        return await HttpClient(`${process.env.NEXT_PUBLIC_URL_API}/api/login`, {
            method: 'POST',
            body: {username, password}
        })
        .then(async (response) => {
            if(!response.ok) throw new Error('Usuários ou senhas inválidos!');

            const data = await response.body.data;
            tokenService.save(data.access_token);
        })
    }
}

