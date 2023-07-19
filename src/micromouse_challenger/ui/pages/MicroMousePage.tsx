import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state"
import Maze from "../../micromouse/infrastructure/ui/components/maze/Maze"
import MicroMouseControl from "../../micromouse/infrastructure/ui/components/micromouse-control/MicroMouseControl"
import ScoreDashboard from "../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard"
import PrimaryButton from "../components/PrimaryButton"
import { useLocation } from "wouter"
import { useScoreState } from "../../score/infrastructure/ui/state/score.state"

export default function MicroMousePage() {

  const { message, reset: resetMazeState } = useMazeState()
  const { reset: resetScoreState } = useScoreState()
  const [,navigate] = useLocation();

  const onCLick = () => {
    resetScoreState()
    resetMazeState()
    navigate("/")
  }
  
  return (
      <>
        <h3 className="m-8 text-orange-300 text-lg">{message}</h3>
        <div className="flex justify-center items-center">
          <div className="p-4">
            <Maze />
          </div>
          <div className="p-4">
            <ScoreDashboard/>
            <MicroMouseControl />
          </div>
        </div>
        <PrimaryButton onClick={onCLick} className="w-80 my-8" text="VOLVER"/>
      </>
  )
}