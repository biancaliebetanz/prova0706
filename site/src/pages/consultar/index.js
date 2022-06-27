import { listar } from "../../api/superheroiApi"
import { useState } from "react";
import { Link } from "react-router-dom";

export function Consultar() {

    const [superheroi, setSuperheroi] = useState([]);

    async function listarSuperHeroi(){
        const resposta = await listar();
        setSuperheroi(resposta);
        console.log('superheroi');
        
    }

    return(
        <main className="Pagina">
            <section className="faixa">
            <h1>
                Consulte seus superherois
            </h1>
            <p></p>

            <table>
                <thead>
                    <tr className="cabecalho">
                        <td> ID             </td>
                        <td> Nome           </td>
                        <td> Super Poder    </td>
                        <td> Pode voar?     </td>
                    </tr>
                </thead>
                <tbody>

                { superheroi.map( item => 
                     
                     <tr className="tr">
                        <td> {item.id}          </td>
                        <td> {item.nome}        </td>
                        <td> {item.superpoder}  </td>
                        <td> {item.voa ? 'Sim' : 'Não'}  </td>
                     </tr>
                )}

                </tbody>
            </table>

            <p></p>

            <button onClick={listarSuperHeroi}> Consultar </button>

            <p></p>

            <Link className="voltar" to='/'> Voltar </Link>

            </section>
            

        </main>
    )
}