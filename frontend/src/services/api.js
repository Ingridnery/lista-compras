import axios from 'axios';

export const login = async (email, senha) => {
    try {
        const data = new URLSearchParams();
        data.append('email', email);
        data.append('senha', senha);
        const response = await axios.post('http://localhost:8080/login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
export const createUser = async (nome, email, senha) => {
    try{
        const data = new URLSearchParams();
        data.append('nome', nome);
        data.append('email', email);
        data.append('senha', senha);
        
        const response = await axios.post('http://localhost:8080/user', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}