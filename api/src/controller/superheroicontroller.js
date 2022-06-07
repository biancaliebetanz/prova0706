import { con } from "../repository/connection.js";
import { Router } from "express"
import { inserirSuperHeroi, listarSuperHeroi } from "../repository/superheroirepository.js";

const server= Router();

server.post('/inserir', async (req, resp) => {
    
    try {
        const superheroiparainserir = req.body;
        const superheroi = await inserirSuperHeroi(superheroiparainserir);
        resp.send(superheroi);
    }
    catch(err){
        resp.status(400).send({ erro: err.message });
    }
    
})

server.get('/listar', async (req, resp) => {
    try {
        const [resposta] = await listarSuperHeroi();
        resp.send(resposta);
    }
    catch (err){
        resp.status(400).send({ erro: err.message })
    }
    
})

export default server