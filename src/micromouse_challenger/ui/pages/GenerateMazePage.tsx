import MazeGenerator from "../../maze/infrastructure/ui/components/maze-generator/MazeGenerator";
import { useMazeGeneratorState } from "../../maze/infrastructure/ui/state/maze-generator.state";
import StartChallengerButton from "../../micromouse/infraestructure/ui/components/start-challenger-button/StartChallengerButton";


export default function GenerateMazePage() {

    const { matrix, flag } = useMazeGeneratorState()

    return (
        <>
            <h2>Generar laberinto</h2>
            <p>Genera el laberinto que quieres desafiar y comienza el desafio</p>
            <MazeGenerator />
            { 
            matrix ? <StartChallengerButton matrix={matrix} flag={flag} />: null
            }
            
        </>
    )
}