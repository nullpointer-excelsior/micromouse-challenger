import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state"
import Maze from "../../micromouse/infrastructure/ui/components/maze/Maze"
import MicroMouseControl from "../../micromouse/infrastructure/ui/components/micromouse-control/MicroMouseControl"
// import ScoreDashboard from "../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard"
import BackHomeButton from "../components/BackHomeButton"

export default function MicroMousePage() {

  const { message } = useMazeState()

  return (
      <>
        <h3 className="m-8 text-orange-300 text-lg">{message}</h3>
        <div className="flex justify-center items-center">
          <div className="p-4">
            <Maze />
          </div>
          <div className="p-4">
            {/* <ScoreDashboard/> */}
            <MicroMouseControl />
          </div>
        </div>
        <div className="flex justify-center items-center w-full gap-4">
          <BackHomeButton onClick={() => {}} className="w-80 my-8" />
        </div>
      </>
  )
}