import { EventBus } from "../../utils/eventbus";
import { eventbus } from "../../utils/infrastructure";
import { Cell } from "../domain/Cell";
import { MicromouseEvent, MouseMoveEvent, MouseWinEvent } from "../domain/Events";
import { Mouse } from "../domain/Mouse";
import { MouseMaze } from "../domain/MouseMaze";
import { MoveMouseResponse } from "../domain/MoveMouseResponse";

export class MicroMouse {

    constructor(
        private readonly eventbus: EventBus<MicromouseEvent>,
        private readonly mouse: Mouse,
        private readonly moveDelay = 0,
    ) { }

    async move(position: 'up' | 'down' | 'left' | 'right'): Promise<MoveMouseResponse> {

        await new Promise(resolve => setTimeout(resolve, this.moveDelay));

        const response = this.mouse.move(position)
        
        this.eventbus.dispatch(new MouseMoveEvent({
            isMoved: response.mouseMoved,
            message: response.message,
            position: response.cellPosition.getCurrentPosition()
        }))

        if (response.mouseMoved && response.cellPosition.value.isExit()) {
            this.eventbus.dispatch(new MouseWinEvent("Felicitaciones ganaste maldito bastardo!!"))
        }

        return response

    }

    static create(params: { matrix: string[][], moveDelay: number }) {
        const maze = MouseMaze.create({
            matrix: params.matrix
        })
        const mouse = new Mouse(maze, maze.getPosition('A0'))
        return new MicroMouse(
            eventbus,
            mouse,
            params.moveDelay
        )
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