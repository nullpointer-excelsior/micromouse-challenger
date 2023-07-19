import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state"
import Maze from "../../micromouse/infrastructure/ui/components/maze/Maze"
import MicroMouseControl from "../../micromouse/infrastructure/ui/components/micromouse-control/MicroMouseControl"
import ScoreDashboard from "../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard"

export default function MicroMousePage() {

  const { message } = useMazeState()
  
  return (
      <>
        <h3>{message}</h3>
        <Maze />
        <div>
          <ScoreDashboard/>
          <MicroMouseControl />
        </div>
      </>
  )
}