import { useEffect, useState } from "react";
import { eventbus } from "../../../../../utils/infrastructure";
import { micromouse } from "../../../../application";
import { useMazeState } from "../../state/maze.state";
import { useScoreState } from "../../../../../score/infrastructure/ui/state/score.state";
import useStopwatch from "../../../../../score/infrastructure/ui/components/stopwatch/useStopwatch";
import useObservable from "../../../../../ui/hooks/useObservable";
import { MouseMoveEvent } from "../../../../domain";
import ControlButton from "../control-button/ControlButton";
import PrimaryButton from "../../../../../ui/components/PrimaryButton";

export default function MicroMouseControl() {
    // console.log('Component: MicroMouseControl()')
    const { mousePosition, updateMessage, updateMousePosition, flag, maze } = useMazeState()
    const { incrementMovements } = useScoreState()
    const {time, start, end }= useStopwatch()
    const [ playing, setPlaying] = useState(false)

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
        setPlaying(true)
        if (time === "00:00") {
            console.log('starting!!!')
            start()
        }
    }

    const onClickUp = () => micromouse.move('up')
    const onClickDown = () => micromouse.move('down')
    const onClickLeft = () => micromouse.move('left')
    const onClickRight = () => micromouse.move('right')

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.keyCode === 37) {
            onClickLeft()
          } else if (event.keyCode === 38) {
            onClickUp()
          } else if (event.keyCode === 39) {
            onClickRight()
          } else if (event.keyCode === 40) {
            onClickDown()
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    if (!micromouse.ready) {
        return <p>Esperando iniciar juego...</p>
    }

    return (
        <div className="flex flex-col my-10">
            {!playing? <div>
                <PrimaryButton className="bg-amber-600 w-40 hover:bg-amber-800" text="JUGAR" onClick={onClickControls}/>
            </div>: <><div>
                <ControlButton text="UP" onClick={onClickUp}/>
            </div>
            <div>
                <ControlButton text="LEFT" onClick={onClickLeft}/>
                <ControlButton text="RIGHT" onClick={onClickRight}/>
            </div>
            <div>
                <ControlButton text="DOWN" onClick={onClickDown}/>
            </div>
            </>}
        </div>
    )
}
