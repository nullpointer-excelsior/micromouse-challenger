
export default function MicroMousePage({ children }){
    return (
        <>
            <h1>Micromouse challenger</h1>
            <p>Desafio de micromouse donde programaras tu ratoncito para que pueda escapar del maldito laberinto.</p>
            <div>
                {children}
            </div>
        </>
    )
}