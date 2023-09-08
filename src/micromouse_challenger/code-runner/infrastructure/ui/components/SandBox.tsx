import useSandBoxParent from "../hooks/useSandBoxParent";
import { useEffect } from "react";
import { useMazeState } from "../../../../micromouse/infrastructure/ui/state/maze.state";
import ScoreDashboard from "./ScoreDashboard";
import Maze from "../../../../micromouse/infrastructure/ui/components/maze/Maze";
import { createCodeRunnerWorker } from "../../../application/createCodeRunnerWorker";
import { StartMicromouseMessage, MicromouseMoveMessage } from "../../../domain/CodeRunnerMessage";
import { micromouseGame } from "../../../../micromouse/application/MicromouseGame";
import useObservableValue from "../../../../ui/hooks/useObservableValue";
import getGameConfiguration from "../../../application/getGameConfiguration";

const configuration = getGameConfiguration()

export default function SandBox() {

    const { message } = useSandBoxParent()
    const { updateMessage, updateMousePosition, setMaze: initMaze } = useMazeState()
    const [time] = useObservableValue(micromouseGame.time(), "00:00:00")
    const [movements] = useObservableValue(micromouseGame.movements(), 0)


    useEffect(() => {

        if (message) {

            initMaze(message.matrix)

            const worker = createCodeRunnerWorker()

            micromouseGame.start()
            micromouseGame.stopGameAt(configuration.gameTimeout)
            micromouseGame.onGameOver(() => worker.terminate())

            worker.sendMessage(new StartMicromouseMessage(message))

            worker.onMessage<MicromouseMoveMessage>("MICROMOUSE_MOVE").subscribe({
                next: (x) => {
                    updateMousePosition(x.payload.micromouseEvent.data.position)
                    updateMessage(x.payload.micromouseEvent.data.message)
                    micromouseGame.incrementMovements()
                },
                error: (err) => console.log(err)
            })

            return () => {
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
            <ScoreDashboard time={time} movements={movements} />
            <Maze />
        </div>
    )
}