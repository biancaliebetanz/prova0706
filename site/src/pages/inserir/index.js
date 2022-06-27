import { useState } from "react"
import { inserir } from "../../api/superheroiApi"
import { Link } from "react-router-dom";
import './index.scss'

export function Inserir() {

    const [nome, setNome]= useState('');
    const [superpoder, setSuperpoder]= useState('');
    const [voa, setVoa] = useState(false);

    async function salvar() {
        try{
            const superheroi= await inserir(nome, superpoder, voa);
            alert('Super herói inserido!');
        }
        catch(err) {
            alert(err.message);
        }
    }

    return(
        <main className="Pagina">
            <section className="faixa">
                <h1>Inserir</h1>

                <h2> Insira um Super Herói</h2>

                <div>
                    <label> Nome:</label>
                    <input  className="input" type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>

                <div>
                    <label> Superpoder:</label>
                    <input  className="input" type='text' value={superpoder} onChange={e => setSuperpoder(e.target.value)}></input>
                </div>
                
                <div>
                <label> Pode voar?</label>
                <input type='checkbox' value={voa} onChange={e => setVoa(e.target.checked)}></input>
                </div>

                <p></p>

                <button onClick={salvar}> Salvar </button>
                <p></p>
                <Link to='/' className="voltar"> Voltar</Link>
                
            </section>
        </main>
    )
}