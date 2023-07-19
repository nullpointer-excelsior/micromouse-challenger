
export default function Home({ children }){
    return (
        <div className="container mx-auto rounded text-center bg-slate-800 text-white mt-10 flex flex-col p-10">
            <h1 className="text-4xl font-bold">MicroMouse challenger</h1>
            <p className="my-6 text-slate-500">Desafio de micromouse donde programaras tu ratoncito para que pueda escapar del maldito laberinto.</p>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}