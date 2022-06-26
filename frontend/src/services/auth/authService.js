export const authService = {
    async login (username, password){
        return fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(username, password)
        })
        .then((res) => {
            if(!res.ok) throw new Error('Usuários ou senhas inválidos!');
        })
    }
}

