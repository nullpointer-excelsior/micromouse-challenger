import { useMazeState } from "../../micromouse/infrastructure/ui/state/maze.state"
import Maze from "../../micromouse/infrastructure/ui/components/maze/Maze"
import MicroMouseControl from "../../micromouse/infrastructure/ui/components/micromouse-control/MicroMouseControl"
import ScoreDashboard from "../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard"
import PrimaryButton from "../components/PrimaryButton"
import { useLocation } from "wouter"
import { useScoreState } from "../../score/infrastructure/ui/state/score.state"
// import { useCallback, useState } from "react"
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { vscodeDark } from '@uiw/codemirror-theme-vscode';
// import MicroMouseIDE from "../../micromouse/infrastructure/ui/components/MicroMouseIDE"
// import Editor from "../../micromouse/infrastructure/ui/components/Editor"

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
        <div className="flex justify-center items-center w-full gap-4">
          <PrimaryButton onClick={onCLick} className="w-80 my-8" text="VOLVER"/>
          {/* <PrimaryButton className="w-80 my-8" text="CREAR MICROMOUSE" onClick={() => setShowIde(true)} /> */}
        </div>
      </>
  )
}