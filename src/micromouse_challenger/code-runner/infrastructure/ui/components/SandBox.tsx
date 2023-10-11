import { useEffect, useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import { useLocation } from "wouter";
import { micromouseGame } from "../../../../micromouse/infrastructure/services";
import Maze from "../../../../micromouse/infrastructure/ui/components/maze/Maze";
import Modal from "../../../../ui/components/Modal";
import useObservableValue from "../../../../ui/hooks/useObservableValue";
import { Paths } from "../../../../ui/router/utils/paths";
import executeCodeRunnerWorker from "../../../application/executeCodeRunnerWorker";
import GameOverModalContent from "./GameOverModalContent";
import ScoreDashboard from "./ScoreDashboard";
import WinnerModalContent from "./WinnerModalContent";


export default function SandBox() {

    const [, navigate] = useLocation();
    const [open, setOpen] = useState(false)

    const [time] = useObservableValue(micromouseGame.time(), "00:00:00")
    const [movements] = useObservableValue(micromouseGame.movements(), 0)
    const [gameOver] = useObservableValue(micromouseGame.gameOver(), { isWinner: false })

    useEffect(() => {

        const worker = executeCodeRunnerWorker({ onGameOver: () => setOpen(true) })
        return () => { 
            worker.terminate()
        }

    }, [])

    const handleAcceptModal = () => {
        setOpen(false)
        navigate(Paths.MICROMOUSE_CODERUNNER)
    }

    return (
        <div className="rounded w-[800px] h-[500px] bg-gray-900">
            <div className="flex flex-col items-center">
                <ScoreDashboard time={time} movements={movements} />
                <Maze />
                <Modal title={gameOver.isWinner ? "Felicitaciones" : "Que penita"} open={open} onAccept={handleAcceptModal} onClose={handleAcceptModal}>
                    {gameOver.isWinner ? <WinnerModalContent movements={movements} time={time} /> : <GameOverModalContent />}
                </Modal>
                {gameOver.isWinner ? <ConfettiExplosion zIndex={1000} /> : null}
            </div>
        </div>
    )
}