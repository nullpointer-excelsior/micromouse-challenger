import useStopwatch from "../../../../score/infrastructure/ui/components/stopwatch/useStopwatch"
import { useScoreState } from "../../../../score/infrastructure/ui/state/score.state"
import useObservable from "../../../../ui/hooks/useObservable"
import { eventbus } from "../../../../utils/infrastructure"
import { MicroMouse } from "../../../application/MicroMouse"
// import { micromouseGame } from "../../../application/MicromouseGame"
import { MouseMoveEvent } from "../../../domain/Events"
import { useMazeState } from "../state/maze.state"



export default function useStartChallenge() {
    const { updateMessage, updateMousePosition, maze } = useMazeState()
    const { incrementMovements, movements, reset } = useScoreState()
    const {time, start, end } = useStopwatch()

    const mouseMove$ = eventbus.onEvent("micromouse.mouse-move")

    useObservable(mouseMove$, {
        complete: () => console.log("terminado!!!"),
        next: (event: MouseMoveEvent) => {
        updateMousePosition(event.data.position)
        updateMessage(event.data.message)
        incrementMovements()
    }})

    return {
        start : (moveDelay = 0) => {
            // const micromouse = MicroMouse.create({
            //     matrix: maze,
            //     moveDelay: moveDelay
            // })
            start()
        },
        stop: () => {
            end()
            reset()
        },
        end,
        time,
        movements
    }
}