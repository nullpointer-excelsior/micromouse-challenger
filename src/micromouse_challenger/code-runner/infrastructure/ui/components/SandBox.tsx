import useScriptElement from "../hooks/useScriptElement";
import useSandBoxParent from "../hooks/useSandBoxParent";
import { useEffect } from "react";
import { MicroMouse, micromouseGame} from "../../../../micromouse/application";
import { eventbus } from "../../../../utils/infrastructure";
import { useMazeState } from "../../../../micromouse/infrastructure/ui/state/maze.state";
import ScoreDashboard from "../../../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard";
import Maze from "../../../../micromouse/infrastructure/ui/components/maze/Maze";
import { MouseMoveEvent } from "../../../../micromouse/domain";
import useStopwatch from "../../../../score/infrastructure/ui/components/stopwatch/useStopwatch";
import { useScoreState } from "../../../../score/infrastructure/ui/state/score.state";
import useObservable from "../../../../ui/hooks/useObservable";

export default function SandBox() {
    
    const { createScript } = useScriptElement()
    const { message } = useSandBoxParent()
    const initChallenge = useMazeState(state => state.initMaze)
    const { mousePosition, updateMessage, updateMousePosition, flag, maze } = useMazeState()
    const { incrementMovements } = useScoreState()
    const { start, end } = useStopwatch()
    

    const mouseMove$ = eventbus.onEvent<MouseMoveEvent>('micromouse.mouse-move')

    useObservable(mouseMove$, {
        complete: () => console.log("terminado!!!"),
        next: (event: MouseMoveEvent) => {
            console.log('event', event)
        console.log(`event: ${event.payload.position}, mousePosition: ${mousePosition}`)
        updateMousePosition(event.payload.position)
        updateMessage(event.payload.message)
        incrementMovements()
        if (event.payload.isMoved && micromouseGame.getMicromouse().getCurrentCell().isExit()) {
            end()
            alert("Congratulations!! ")
        }
    }})

    useEffect(() => {
        console.log('message-from-parent', message)
        if (message) {
            const micromouse = MicroMouse.create({
                flag: "na",
                matrix: message.matrix,
                moveDelay: 500
            })
            micromouseGame.start(micromouse)
            initChallenge("na", message.matrix)
            createScript(message.code, () => {
                console.log("script loaded!!", micromouseGame.getMicromouse())
                // @ts-ignore
                play(micromouseGame.getMicromouse())
            })
            start()
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