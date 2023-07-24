import useStopwatch from "../../../../score/infrastructure/ui/components/stopwatch/useStopwatch"
import { useScoreState } from "../../../../score/infrastructure/ui/state/score.state"
import useObservable from "../../../../ui/hooks/useObservable"
import { eventbus } from "../../../../utils/infrastructure"
import { micromouse } from "../../../application"
import { MouseMoveEvent } from "../../../domain"
import { useMazeState } from "../state/maze.state"

export default function useStartChallenge() {
    const { mousePosition, updateMessage, updateMousePosition, flag, maze } = useMazeState()
    const { incrementMovements, movements } = useScoreState()
    const {time, start, end }= useStopwatch()

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

    return {
        start : () => {
            micromouse.startChallenger({ flag, matrix: maze })
            start()
        },
        end,
        time,
        movements
    }
}