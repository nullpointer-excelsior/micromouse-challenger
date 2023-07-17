import { Link } from "wouter";

export default function GenerateMazePage() {
    return (
        <>
            <h2>Generar laberinto</h2>
            <p>Genera el laberinto que quieres desafiar y comienza el desafio</p>
            <div>
                <button>GENERAR</button>
            </div>
            <div>
                <Link href="/micromouse/challenger">
                    <button>COMENZAR DESAFIO</button>
                </Link>
            </div>
        </>
    )
}