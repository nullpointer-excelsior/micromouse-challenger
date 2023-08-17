import { InvalidMazeLocationException } from "../exceptions";
import { Cell } from "./Cell";
import { CellPosition } from "./CellPosition";

export interface MouseMazeProps {
    matrix: string[][];
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

    static create(props: MouseMazeProps): MouseMaze {
        const {matrix } = props
        const matrixCells: Cell[][] = [];
        for (let i = 0; i < matrix.length; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                const position = String.fromCharCode('A'.charCodeAt(0) + i) + String(j);
                const cell = new Cell(position, matrix[i][j]);
                row.push(cell);
            }
            matrixCells.push(row);
        }
        return new MouseMaze(matrixCells);
    }

    static mapMatrixToCells(matrix: string[][]): Cell[][] {
        const matrixCells: Cell[][] = [];
        for (let i = 0; i < matrix.length; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                const position = String.fromCharCode('A'.charCodeAt(0) + i) + String(j);
                const cell = new Cell(position, matrix[i][j]);
                row.push(cell);
            }
            matrixCells.push(row);
        }
        return matrixCells
    }
}