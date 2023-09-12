import { useLocation } from "wouter";
import SandBox from "../../code-runner/infrastructure/ui/components/SandBox";
import PrimaryButton from "../components/PrimaryButton";
import BackHomeButton from "../components/BackHomeButton";
import { micromouseGame } from "../../micromouse/application/MicromouseGame";
import { Paths } from "../router/utils/paths";

export default function SandBoxPage() {

    const [, navigate] = useLocation();
    const gameSetup = micromouseGame.getSetup()

    const handleOnStop = () => {
        micromouseGame.finish()
        navigate(Paths.MICROMOUSE_CODERUNNER)
    }

    return (
        <>
            <p className="m-8 text-orange-300 text-lg">
                Tendras 3 minutos para que tu algoritmo pueda resolver el desafio. el ranking sera basado en tu tiempo y numero de movimientos. Suerte!!
            </p>
            <div className='flex place-content-center gap-6'>
                <div className="flex justify-center items-center gap-6">
                    <SandBox message={gameSetup} />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 my-8">
                    <PrimaryButton text="DETENER" onClick={handleOnStop} className="w-40" />
                    <BackHomeButton onClick={() => { }} className="w-40" />
                </div>
            </div>
        </>
    )
}