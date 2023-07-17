import { Event } from "../utils/eventbus";

export class InvalidMazeLocationException extends Error { 
    constructor(message: string) {
        super(message)
        this.name ='InvalidMazeLocationException'
    }
}

export class InvalidCellNameException extends Error { 
    constructor(message: string) {
        super(message)
        this.name ='InvalidCellNameException'
    }
}

export class Cell {
    position: string;
    type: string;

    constructor(position: string, type: string) {
        this.position = position;
        this.type = type;
    }

    canWalk(): boolean {
        return this.type === ' ';
    }

    isExit(): boolean {
        return this.type === '🏆';
    }
}

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return cells[position];
    }

    getCurrentPosition(): string {
        return this.value.position;
    }
}

export class MouseMaze {

    constructor(public readonly maze: Cell[][]) { }

    private findIndexes(valor: string): [number, number] | null {
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                if (this.maze[i][j].position === valor) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    getPosition(position: string): CellPosition | null {
        const loc = this.findIndexes(position);
        return loc ? this.showPositionMaze(loc) : null;
    }

    private showPositionMaze(loc: [number, number]): CellPosition {
        const maze = this.maze;
        const row = loc[0];
        const col = loc[1];

        if (row < 0 || col < 0) {
            throw new InvalidMazeLocationException('No se admiten coordenadas negativas');
        }
        if (row >= maze.length) {
            throw new InvalidMazeLocationException('No se admiten coordenadas fuera de rango');
        }
        if (col >= maze[0].length) {
            throw new InvalidMazeLocationException('No se admiten coordenadas fuera de rango');
        }

        const currentLocation = maze[row][col];

        const up = row > 0 ? maze[row - 1][col] : null;
        const down = row < maze.length - 1 ? maze[row + 1][col] : null;
        const left = col > 0 ? maze[row][col - 1] : null;
        const right = col < maze[0].length - 1 ? maze[row][col + 1] : null;

        return new CellPosition(
            currentLocation,
            up,
            down,
            left,
            right
        );
    }

    static fromMatriz(maze: string[][]): MouseMaze {
        const matrixCells: Cell[][] = [];
        for (let i = 0; i < maze.length; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < maze[i].length; j++) {
                const position = String.fromCharCode('A'.charCodeAt(0) + i) + String(j);
                const cell = new Cell(position, maze[i][j]);
                row.push(cell);
            }
            matrixCells.push(row);
        }
        return new MouseMaze(matrixCells);
    }
}

export class MoveMouseResponse {

    constructor(
        public readonly message: string,
        public readonly cellPosition: CellPosition,
        public readonly mouseMoved: boolean
    ) { }
}

export interface MouseEventProps {
    isMoved: boolean;
    message: string;
    position: string;
}

export class MouseMoveEvent extends Event<MouseEventProps>{
    get name(): string {
        return "micromouse.mouse-move";
    }
}

export class MouseWinEvent extends Event<string> {
    get name(): string {
        return "micromouse.mouse-win";
    }
}

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
            `Me he movido 🐁 -> (${cellPosition.getCurrentPosition()})`,
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

    getUpCell(): Cell | null {
        return this.currentPosition.up;
    }

    getDownCell(): Cell | null {
        return this.currentPosition.down;
    }

    getLeftCell(): Cell | null {
        return this.currentPosition.left;
    }

    getRightCell(): Cell | null {
        return this.currentPosition.right;
    }

}
