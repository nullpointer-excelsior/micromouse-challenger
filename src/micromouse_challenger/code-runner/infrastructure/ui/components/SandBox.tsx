// import useScriptElement from "../hooks/useScriptElement";
import useSandBoxParent from "../hooks/useSandBoxParent";
import { useEffect } from "react";
import { useMazeState } from "../../../../micromouse/infrastructure/ui/state/maze.state";
import ScoreDashboard from "../../../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard";
import Maze from "../../../../micromouse/infrastructure/ui/components/maze/Maze";
import useStopwatch from "../../../../score/infrastructure/ui/components/stopwatch/useStopwatch";
import { useScoreState } from "../../../../score/infrastructure/ui/state/score.state";
import { createCodeRunnerWorker } from "../../../application/createCodeRunnerWorker";
import { StartMicromouseMessage, MicromouseMoveMessage, WorkerMessage } from "../../../domain/CodeRunnerMessage";

export default function SandBox() {

    // const { createScript } = useScriptElement()
    const { message } = useSandBoxParent()
    const { updateMessage, updateMousePosition, initMaze } = useMazeState()
    const { incrementMovements } = useScoreState()
    const { start, end } = useStopwatch()

    useEffect(() => {
        if (message) {
            initMaze(message.matrix)
            const worker = createCodeRunnerWorker()
            // createScript(message.code, () => {
                // @ts-ignore
                // play(micromouseGame.getMicromouse())
                worker.sendMessage(new WorkerMessage("sandbox starting worker!"))
                worker.sendMessage(new StartMicromouseMessage(message))
                
                worker.onMessage<MicromouseMoveMessage>("MICROMOUSE_MOVE").subscribe({
                    next: (x) => {
                        updateMousePosition(x.payload.micromouseEvent.data.position)
                        updateMessage(x.payload.micromouseEvent.data.message)
                        incrementMovements()
                    },
                    error: (err) => console.log(err)
                })
                
            // })
            start()
            return () => {
                console.log("web-worker terminated")
                worker.terminate()
            }
        }
        
    }, [message])


    if (!message) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <ScoreDashboard />
            <Maze />
        </div>
    )
}