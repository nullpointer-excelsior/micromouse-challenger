import MazeView from "../maze-view/MazeView"
import { useMazeGeneratorState } from "../../state/maze-generator.state"
import PrimaryButton from "../../../../../ui/components/PrimaryButton"
import { useEffect } from "react"
import { mazeGenerator } from "../../../services"


export default function MazeGenerator() {

    const { matrix, updateMaze } = useMazeGeneratorState()
    
    const onClickGenerate = () => {
        mazeGenerator
            .generate()
            .then(maze => updateMaze({ 
                matrix: maze.matrix 
            }))
    }

    useEffect(() => {
        onClickGenerate()
    }, [])

    return (
        <div className="flex flex-col items-center">
            <MazeView maze={matrix} />
            <div className="my-6">
                <PrimaryButton className="w-80" onClick={onClickGenerate} text="GENERAR"></PrimaryButton>
            </div>
        </div>
    )
}