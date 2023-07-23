import MazeGenerator from "../../maze/infrastructure/ui/components/maze-generator/MazeGenerator";
import { useMazeGeneratorState } from "../../maze/infrastructure/ui/state/maze-generator.state";
import StartChallengerButton from "../../micromouse/infrastructure/ui/components/start-challenger-button/StartChallengerButton";
import PrimaryButton from "../components/PrimaryButton";


export default function GenerateMazePage() {

    const { matrix, flag } = useMazeGeneratorState()

    return (
        <>
            <p className="m-8 text-orange-300 text-lg">Genera el laberinto que quieres desafiar y comienza el desafio</p>
            <MazeGenerator />
            <div>
                <StartChallengerButton matrix={matrix} flag={flag} />
            </div>
            {/* <div>
                <PrimaryButton className="w-80 my-6" text="CREAR MICROMOUSE" />
            </div> */}
        </>
    )
}