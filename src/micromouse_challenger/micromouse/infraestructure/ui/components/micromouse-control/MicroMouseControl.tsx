import { useEffect } from "react";
import { eventbus } from "../../../../../utils/infraestructure";
import { Event } from "../../../../../utils/eventbus";
import { MicroMouse } from "../../../../application";
import { Mouse, MouseMaze } from "../../../../domain";
import { useMazeState } from "../../state/maze.state";

export default function MicroMouseControl() {

    const { maze, flag, mousePosition, updateMessage, updateMousePosition } = useMazeState()

    const mousemaze = MouseMaze.create({
        flag: flag,
        matrix: maze
    })
    const mouse = new Mouse(mousemaze, mousemaze.getPosition(mousePosition))
    const micromouse = new MicroMouse(mouse, eventbus)

    useEffect(() => {
        const subscription = eventbus.subscribe('micromouse.mouse-move', (event: Event<any>) => {
            updateMousePosition(event.payload.position)
            updateMessage(event.payload.message)
            if (event.payload.isMoved && micromouse.getCurrentCell().isExit()) {
                alert("Congratulations!! ")
            }
        })
        return () => subscription.unsubscribe()
    })

    return (
        <>
            <div>
                <button onClick={e => micromouse.move('up')}>Up</button>
            </div>
            <button onClick={e => micromouse.move('left')}>Left</button>
            <button onClick={e => micromouse.move('right')}>right</button>
            <div>
                <button onClick={e => micromouse.move('down')}>Down</button>
            </div>
        </>
    )
}