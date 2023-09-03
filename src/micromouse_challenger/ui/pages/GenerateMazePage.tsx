import MazeGenerator from "../../maze/infrastructure/ui/components/maze-generator/MazeGenerator";
import { useMazeGeneratorState } from "../../maze/infrastructure/ui/state/maze-generator.state";
import StartCodeChallengeButton from "../../micromouse/infrastructure/ui/components/start-code-challenge-button/StartCodeChallengeButton";

export default function GenerateMazePage() {

    const { matrix } = useMazeGeneratorState()

    return (
        <>
            <p className="m-4 text-orange-300 text-lg">Genera el laberinto que quieres desafiar y comienza el desafio</p>
            <MazeGenerator />
            <StartCodeChallengeButton matrix={matrix} />
        </>
    )
}