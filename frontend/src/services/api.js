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
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
export const updateItem = async(item) =>{
    const data = new URLSearchParams();
    data.append('id', item.id);
    data.append('estado', item.estado);

    try{
        const response = await axios.put('http://localhost:8080/item/'+item.id, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response;
    }catch(error){
        console.error(error);
    }

}
export const findItensList = async (id) => {
    try {

        const response = await axios.get(`http://localhost:8080/item/user/${id}`);
        return response;
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