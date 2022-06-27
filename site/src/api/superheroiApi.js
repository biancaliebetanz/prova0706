import axios from 'axios';

const api= axios.create({
    baseURL:'http://localhost:5000'
})

export async function inserir(nome, superpoder, voa) {
    const resposta= await api.post('/superheroi', {
        nome: nome,
        superpoder: superpoder,
        voa: voa
    })
    return resposta.data;
}

export async function listar() {
    const resposta= await api.get('/superheroi');
    return resposta.data;
}