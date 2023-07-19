import MazeView from "../maze-view/MazeView"
import { mazeGenerator } from "../../../../application"
import { useMazeGeneratorState } from "../../state/maze-generator.state"


export default function MazeGenerator() {

    const { matrix, updateMaze } = useMazeGeneratorState()
    
    const onClicGenerate = (e) => {
        mazeGenerator
            .generate()
            .then(maze => updateMaze({ 
                flag: maze.flag, 
                matrix: maze.matrix 
            }))
    }

    return (
        <>
            <MazeView maze={matrix} />
            <div>
                <button onClick={onClicGenerate}>GENERAR</button>
            </div>
        </>
    )
}