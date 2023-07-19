import { useEffect } from "react";
import { eventbus } from "../../../../../utils/infrastructure";
import { micromouse } from "../../../../application";
import { useMazeState } from "../../state/maze.state";
import { useScoreState } from "../../../../../score/infrastructure/ui/state/score.state";
import useStopwatch from "../../../../../score/infrastructure/ui/components/stopwatch/useStopwatch";
import useObservable from "../../../../../ui/hooks/useObservable";
import { MouseMoveEvent } from "../../../../domain";
import ControlButton from "../control-button/ControlButton";

export default function MicroMouseControl() {
    // console.log('Component: MicroMouseControl()')
    const { mousePosition, updateMessage, updateMousePosition, flag, maze } = useMazeState()
    const { incrementMovements } = useScoreState()
    const {time, start, end }= useStopwatch()

    useEffect(() => {
        micromouse.startChallenger({ flag, matrix: maze })
    }, [])

    useObservable(eventbus.onEvent<MouseMoveEvent>('micromouse.mouse-move'), (event: MouseMoveEvent) => {
        console.log(`event: ${event.payload.position}, mousePosition: ${mousePosition}, micromouse ${micromouse.getCurrentPosition()}`)
        updateMousePosition(event.payload.position)
        updateMessage(event.payload.message)
        incrementMovements()
        if (event.payload.isMoved && micromouse.getCurrentCell().isExit()) {
            end()
            alert("Congratulations!! ")
        }
    })

    const onClickControls = () => {
        if (time === "00:00") {
            start()
        }
    }

    const onClickUp = () => micromouse.move('up')
    const onClickDown = () => micromouse.move('down')
    const onClickLeft = () => micromouse.move('left')
    const onClickRight = () => micromouse.move('right')

    if (!micromouse.ready) {
        return <p>Esperando iniciar juego...</p>
    }

    return (
        <div className="flex flex-col my-10" onClick={onClickControls}>
            <div>
                <ControlButton text="UP" onClick={onClickUp}/>
            </div>
            <div>
                <ControlButton text="LEFT" onClick={onClickLeft}/>
                <ControlButton text="RIGHT" onClick={onClickRight}/>
            </div>
            <div>
                <ControlButton text="DOWN" onClick={onClickDown}/>
            </div>
        </div>
    )
}