import { InvalidCellNameException } from "../exceptions";
import { Cell } from "./Cell";

export class CellPosition {

    constructor(
        public readonly value: Cell,
        public readonly up: Cell,
        public readonly down: Cell,
        public readonly left: Cell,
        public readonly right: Cell
    ) { }

    getCell(position: string): Cell {
        const cells = {
            up: this.up,
            down: this.down,
            left: this.left,
            right: this.right,
        };
        
        if (!Object.keys(cells).includes(position)) {
            throw new InvalidCellNameException(`Invalid cell position: ${position}. options: (${Object.keys(cells).join(',')})`);
        }
        return cells[position];
    }

    getCurrentPosition(): string {
        return this.value.position;
    }
}