import { useLocation } from 'wouter'
import { Paths } from '../router/utils/paths'

export default function LandingPage() {

    const [, location] = useLocation()

    const handleGoChallenger = (e) => {
        e.preventDefault()
        location(Paths.GENERATE_MAZE)
    }

    const handleCliclMicromouse  = (e) => {
        window.open('https://www.youtube.com/watch?v=IDiuQNmKOdo', '_blank')
    }

    return (
        <>
            <header>
                <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                    <div className="py-1 text-white text-2xl font-semibold">MicroMouse Challenger 🐁 </div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-orange-300 uppercase text-xs">
                        <li className="cursor-pointer">
                            <i className="fas fa-envelope m-2"></i> Contact
                        </li>
                        <li className="cursor-pointer">
                            <a href="https://github.com/nullpointer-excelsior" target='_blank'>
                                <i className="fab fa-github m-2 cursor-pointer"></i> Github
                            </a>
                        </li>
                    </ul>
                    <div className="flex sm:hidden flex-1 justify-end">
                        <i className="text-2xl fas fa-bars m-2"></i>
                    </div>
                </nav>
            </header>

            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    {/* <!-- Content --> */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-orange-300 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                            MicroMouse Challenger
                        </h2>
                        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                            La emocionante competencia de Micromouse ha capturado la atención de miles de entusiastas de la robótica,
                            siendo un desafío que requiere una destreza excepcional en hardware. Ahora, te presentamos un fascinante reto
                            diseñado especialmente para desarrolladores apasionados como tú.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <button onClick={handleCliclMicromouse}  className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-lg">
                                Saber de MicroMouse
                            </button>
                            <button
                                onClick={handleGoChallenger}
                                type="button"
                                className="text-white shadow-md py-2 px-4 rounded-md transition duration-300 border-purple-700 border-2 hover:bg-purple-700 hover:text-white">
                                Empezar
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/hero-bg.png" alt="" />
                    </div>
                </div>
                <div className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "></div>
            </section>

            {/* <!-- Features --> */}
            <section className="py-20 mt-20 lg:mt-60">
                {/* <!-- Heading --> */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-orange-300">Reglas</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Tu tarea consistirá en desarrollar un algoritmo en TypeScript que asista al ratoncito en su misión de encontrar
                        la salida en un laberinto.
                        El ratón dispondrá de un tiempo límite de 5 minutos para alcanzar la salida.
                    </p>
                </div>
                {/* <!-- Feature #1 --> */}
                <div className="relative mt-20 lg:mt-24">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* <!-- Image --> */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-1.png"
                                alt="" />
                        </div>
                        {/* <!-- Content --> */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-orange-300">Editor de codigo integrado</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Utiliza el editor de código incorporado en la página para poner a prueba tu algoritmo.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Rounded Rectangle --> */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "></div>
                </div>
                {/* <!-- Feature #2 --> */}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/* <!-- Image --> */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-2.png"
                                alt="" />
                        </div>
                        {/* <!-- Content --> */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-orange-300">Generación de laberinto aleatorio</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Puedes generar un laberinto aleatorio para poder jugar.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Rounded Rectangle --> */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          "></div>
                </div>
                {/* <!-- Feature #3 --> */}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/* <!-- Image --> */}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/illustration-features-tab-3.png"
                                alt="" />
                        </div>
                        {/* <!-- Content --> */}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-orange-300">Visualiza el repositorio</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Este proyecto se llevó a cabo con el propósito de implementar una aplicación web React utilizando
                                la arquitectura limpia. Además, nos aventuramos en el emocionante mundo de la programación reactiva con
                                RxJS,
                                lo que nos brinda la capacidad de manejar flujos asincrónicos complejos con facilidad.
                                Te extendemos una cordial invitación a clonar este proyecto y agregar las características que desees,
                                lo que te permitirá elevar tu nivel de competencia en el ámbito de la arquitectura de software. Esta
                                iniciativa está especialmente dirigida a aquellos con muchas ganas de aprender y un interés en el desarrollo
                                web.
                            </p>
                            <button type="button"
                                className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-lg">Repositorio</button>
                        </div>
                    </div>
                    {/* <!-- Rounded Rectangle --> */}
                    <div className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "></div>
                </div>
            </section>

            {/* <!-- Start challenger --> */}
            <section className="py-20 mt-20">

                <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16 max-w-screen-lg mt-16">
                    {/* <!-- Card start --> */}
                    <div className="flex flex-col rounded-md lg:my-8">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./imgs/mouse-logo.svg" width="150" height="150" alt="" className="fill-pink-500" />
                            <h3 className="mt-5 mb-2 text-orange-300 text-3xl">Empezar el Desafio</h3>
                            <p className="text-center text-bookmark-grey mt-4 mb-2">
                                Ahora que estás familiarizado con el desafío MicroMouse Challenger, te invitamos a unirte y ayudar a
                                nuestro ratoncito. Pon a prueba tus conocimientos en programación y crea el algoritmo
                                más adecuado para superar este emocionante desafío
                            </p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex justify-center items-center p-6">
                            <button onClick={handleGoChallenger} type="button" className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-lg">
                                Ir a MicroMouse
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-bookmark-blue py-8 text-white">
                <div className="container flex flex-col md:flex-row items-center">
                    <p className="font-normal text-center text-[18px] leading-[27px] ">
                        Copyright Ⓒ {new Date().getFullYear()} Micromouse. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
