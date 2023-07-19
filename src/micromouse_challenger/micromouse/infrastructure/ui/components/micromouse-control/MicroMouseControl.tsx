import { useState } from "react";
import { eventbus } from "../../../../../utils/infrastructure";
import { micromouse } from "../../../../application";
import { useMazeState } from "../../state/maze.state";
import { useScoreState } from "../../../../../score/infrastructure/ui/state/score.state";
import useStopwatch from "../../../../../score/infrastructure/ui/components/stopwatch/useStopwatch";
import useObservable from "../../../../../ui/hooks/useObservable";
import { MouseMoveEvent } from "../../../../domain";

export default function MicroMouseControl() {
    console.log('Component: MicroMouseControl()')
    const { mousePosition, updateMessage, updateMousePosition } = useMazeState()
    const { incrementMovements } = useScoreState()
    const [startTime, setStartTime] = useState<Date>(null)
    const [endTime, setEndTime] = useState<Date>(null)
    const stopwatch = useStopwatch({ startTime, endTime })

    useObservable(eventbus.onEvent<MouseMoveEvent>('micromouse.mouse-move'), (event: MouseMoveEvent) => {
        console.log(`event: ${event.payload.position}, mousePosition: ${mousePosition}, micromouse ${micromouse.getCurrentPosition()}`)
        updateMousePosition(event.payload.position)
        updateMessage(event.payload.message)
        incrementMovements()
        if (event.payload.isMoved && micromouse.getCurrentCell().isExit()) {
            setEndTime(new Date())
            alert("Congratulations!! ")
        }
    })

    const onClickControls = () => {
        if (!startTime) {
            setStartTime(new Date())
        }
    }

    const onClickUp = () => micromouse.move('up')
    const onClickDown = () => micromouse.move('down')
    const onClickLeft = () => micromouse.move('left')
    const onClickRight = () => micromouse.move('right')

    return (
        <div onClick={onClickControls}>
            <div>
                { stopwatch.time }
            </div>
            <div>
                <button onClick={onClickUp}>Up</button>
            </div>
            <button onClick={onClickLeft}>Left</button>
            <button onClick={onClickRight}>right</button>
            <div>
                <button onClick={onClickDown}>Down</button>
            </div>
        </div>
    )
}