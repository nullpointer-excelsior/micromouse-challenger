import useStopwatch from "../../../../score/infrastructure/ui/components/stopwatch/useStopwatch"
import { useScoreState } from "../../../../score/infrastructure/ui/state/score.state"
import useObservable from "../../../../ui/hooks/useObservable"
import { eventbus } from "../../../../utils/infrastructure"
import { MicroMouse, micromouseGame } from "../../../application"
import { MouseMoveEvent } from "../../../domain"
import { useMazeState } from "../state/maze.state"



export default function useStartChallenge() {
    const { updateMessage, updateMousePosition, maze } = useMazeState()
    const { incrementMovements, movements, reset } = useScoreState()
    const {time, start, end } = useStopwatch()

    const mouseMove$ = eventbus.onEvent<MouseMoveEvent>('micromouse.mouse-move')

    useObservable(mouseMove$, {
        complete: () => console.log("terminado!!!"),
        next: (event: MouseMoveEvent) => {
        updateMousePosition(event.payload.position)
        updateMessage(event.payload.message)
        incrementMovements()
        if (event.payload.isMoved && micromouseGame.getMicromouse().getCurrentCell().isExit()) {
            end()
            alert("Congratulations!! ")
        }
    }})

    return {
        start : (moveDelay = 0) => {
            const micromouse = MicroMouse.create({
                matrix: maze,
                moveDelay: moveDelay
            })
            micromouseGame.start(micromouse)
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