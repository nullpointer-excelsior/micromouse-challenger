import { useEffect, useState } from "react";
import { useMazeState } from "../../../../micromouse/infrastructure/ui/state/maze.state";
import ScoreDashboard from "./ScoreDashboard";
import Maze from "../../../../micromouse/infrastructure/ui/components/maze/Maze";
import { createCodeRunnerWorker } from "../../../application/createCodeRunnerWorker";
import { StartMicromouseMessage, MicromouseMoveMessage } from "../../../domain/CodeRunnerMessage";
import { micromouseGame } from "../../../../micromouse/application/MicromouseGame";
import useObservableValue from "../../../../ui/hooks/useObservableValue";
import getGameConfiguration from "../../../application/getGameConfiguration";
import Modal from "../../../../ui/components/Modal";
import GameOverModalContent from "./GameOverModalContent";
import WinnerModalContent from "./WinnerModalContent";
import { useLocation } from "wouter";
import { Paths } from "../../../../ui/router/utils/paths";

export interface MicromouseMessage {
    matrix: string[][];
    code: string;
}

const configuration = getGameConfiguration()

export default function SandBox({ message }: { message: MicromouseMessage }) {

    const { updateMessage, updateMousePosition, setMaze } = useMazeState()
    const [time] = useObservableValue(micromouseGame.time(), "00:00:00")
    const [movements] = useObservableValue(micromouseGame.movements(), 0)
    const [gameOver] = useObservableValue(micromouseGame.gameOver(), { isWinner: false })
    const [,navigate] = useLocation();

    const [open, setOpen] = useState(false)

    useEffect(() => {

        if (message) {

            setMaze(message.matrix)

            const worker = createCodeRunnerWorker()

            micromouseGame.start()
            micromouseGame.stopGameAt(configuration.gameTimeout)
            micromouseGame.onGameOver(() => {
                worker.terminate()
                setOpen(true)
            })

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

    const onGameOver = () => {
        setOpen(false)
        navigate(Paths.MICROMOUSE_CODERUNNER)
    }


    if (!message) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="rounded w-[800px] h-[500px] bg-gray-900">
            <div className="flex flex-col items-center">
                <ScoreDashboard time={time} movements={movements} />
                <Maze />
                <Modal title={ gameOver.isWinner? "Felicitaciones" : "Que penita"} open={open} onAccept={onGameOver} onClose={onGameOver}>
                   { gameOver.isWinner?  <WinnerModalContent/> : <GameOverModalContent /> }
                </Modal>
            </div>
        </div>
    )
}