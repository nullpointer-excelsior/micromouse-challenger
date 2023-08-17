import { Cell } from "./Cell";
import { CellPosition } from "./CellPosition";
import { MouseMaze } from "./MouseMaze";
import { MoveMouseResponse } from "./MoveMouseResponse";

export class Mouse {

    constructor(
        private readonly maze: MouseMaze,
        private currentPosition: CellPosition
    ) { }

    move(position: string): MoveMouseResponse {
        const navigateTo = this.currentPosition.getCell(position);

        if (!navigateTo) {
            return new MoveMouseResponse(
                '⚠️  Raton culiao No puedes moverte fuera de tu universo 🪐',
                this.currentPosition,
                false
            );
        }

        if (!navigateTo.canWalk()) {
            return new MoveMouseResponse(
                '✋ 🐁 no puedes ir por aca raton culiao.',
                this.currentPosition,
                false
            );
        }

        const cellPosition = this.maze.getPosition(navigateTo.position);
        this.currentPosition = cellPosition;

        return new MoveMouseResponse(
            `Me he movido 🐁 -> (${this.currentPosition.getCurrentPosition()})`,
            cellPosition,
            true
        );
    }

    getCurrentPosition(): string {
        return this.currentPosition.getCurrentPosition();
    }

    getCurrentCell(): Cell {
        return this.currentPosition.value;
    }

    getUpCell(): Cell {
        return this.currentPosition.up;
    }

    getDownCell(): Cell {
        return this.currentPosition.down;
    }

    getLeftCell(): Cell {
        return this.currentPosition.left;
    }

    getRightCell(): Cell {
        return this.currentPosition.right;
    }

}
