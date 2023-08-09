import MazeGenerator from "../../maze/infrastructure/ui/components/maze-generator/MazeGenerator";
import { useMazeGeneratorState } from "../../maze/infrastructure/ui/state/maze-generator.state";
import StartCodeChallengeButton from "../../micromouse/infrastructure/ui/components/start-code-challenge-button/StartCodeChallengeButton";
import StartHumanChallengeButton from "../../micromouse/infrastructure/ui/components/start-human-challenge-button/StartHumanChallengeButton";


export default function GenerateMazePage() {

    const { matrix, flag } = useMazeGeneratorState()

    return (
        <>
            <p className="m-4 text-orange-300 text-lg">Genera el laberinto que quieres desafiar y comienza el desafio</p>
            <MazeGenerator />
            {/* <div>
                <StartHumanChallengeButton matrix={matrix} flag={flag} />
            </div> */}
            {/* <div className="mt-6"> */}
                <StartCodeChallengeButton matrix={matrix} flag={flag}/>
            {/* </div> */}
        </>
    )
}