import { Cell, Mouse, MouseMoveEvent, MoveMouseResponse } from "./domain";
import { EventBus } from "../utils/eventbus";

export class MicroMouse {
    
    constructor(private readonly mouse: Mouse, private readonly eventbus: EventBus<any>) {}

    move(position: 'up' | 'down' | 'left' | 'right'): MoveMouseResponse {
        const response  = this.mouse.move(position)
        this.eventbus.dispatch(new MouseMoveEvent({
            isMoved: response.mouseMoved,
            message: response.message,
            position: response.cellPosition.getCurrentPosition()
        }))
        return response
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