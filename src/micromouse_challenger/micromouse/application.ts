import { Cell, Mouse, MouseMaze, MouseMazeProps, MouseMoveEvent, MoveMouseResponse } from "./domain";
import { EventBus } from "../utils/eventbus";
import { eventbus } from "../utils/infrastructure";

export class MicroMouse {

    ready = false
    private mouse: Mouse

    constructor(private readonly eventbus: EventBus) { }

    move(position: 'up' | 'down' | 'left' | 'right'): MoveMouseResponse {
        const response = this.mouse.move(position)
        this.eventbus.dispatch(new MouseMoveEvent({
            isMoved: response.mouseMoved,
            message: response.message,
            position: response.cellPosition.getCurrentPosition()
        }))
        return response
    }

    startChallenger(options: MouseMazeProps) {
        const maze = MouseMaze.create(options)
        this.mouse = new Mouse(maze, maze.getPosition('A0'))
        this.ready = true
    }

    getFlag(): string {
        return this.mouse.getFlag()
    }

    getCurrentPosition(): string {
        return this.mouse.getCurrentPosition()
    }

    getCurrentCell(): Cell {
        return this.mouse.getCurrentCell()
    }

    getUpCell(): Cell | null {
        return this.mouse.getUpCell();
    }

    getDownCell(): Cell | null {
        return this.mouse.getDownCell()
    }

    getLeftCell(): Cell | null {
        return this.mouse.getLeftCell()
    }

    getRightCell(): Cell | null {
        return this.mouse.getRightCell()
    }

}

export const micromouse = new MicroMouse(eventbus)