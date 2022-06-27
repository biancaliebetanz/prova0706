import { con } from "./connection.js";

export async function inserirSuperHeroi(superheroi){
    const comando = 
    `insert into tb_super_heroi (nm_super_heroi, ds_super_poder, bt_voa)
	values (?, ?, ?)`;

    const [resposta] = await con.query(comando, [superheroi.nome, superheroi.superpoder, superheroi.voa]);
    return(resposta[0]);
}

export async function listarSuperHeroi() {
    const comando = 
    `
    select
            id_super_heroi id,
            nm_super_heroi nome,
            ds_super_poder superpoder,
            bt_voa voa
    from    tb_super_heroi`;

    const linhas = await con.query(comando);
    return (linhas);
}