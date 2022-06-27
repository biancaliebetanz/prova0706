import { Link } from "react-router-dom"
import './index.scss'

export function Home() {
    return (
        <main className="Pagina">
            <section className="faixa">

                <h1> Home </h1> 

                <Link className="voltar" to="/inserir"> Insira </Link>

                <p></p>
            
                <Link className="voltar" to='/consultar'> Consulte </Link>

            </section>
        </main>
    )
}