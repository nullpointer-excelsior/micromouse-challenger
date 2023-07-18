import { useMazeState } from "../../micromouse/infraestructure/ui/state/maze.state"
import Maze from "../../micromouse/infraestructure/ui/components/maze/Maze"
import MicroMouseControl from "../../micromouse/infraestructure/ui/components/micromouse-control/MicroMouseControl"

export default function MicroMousePage() {

  const { message } = useMazeState()
  
  return (
      <>
        <h3>{message}</h3>
        <Maze />
        <div>
          <MicroMouseControl />
        </div>
      </>
  )
}