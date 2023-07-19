
export default function Home({ children }){
    return (
        <>
            <h1 className="text-3xl font-bold underline">MicroMouse challenger</h1>
            <p>Desafio de micromouse donde programaras tu ratoncito para que pueda escapar del maldito laberinto.</p>
            <div>
                {children}
            </div>
        </>
    )
}