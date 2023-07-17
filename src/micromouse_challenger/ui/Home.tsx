
export default function Home({ children }){
    return (
        <>
            <h1>MicroMouse challenger</h1>
            <p>Desafio de micromouse donde programaras tu ratoncito para que pueda escapar del maldito laberinto.</p>
            <div>
                {children}
            </div>
        </>
    )
}