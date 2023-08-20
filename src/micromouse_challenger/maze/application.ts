import { Maze } from './domain';


export class MazeMatrixGenerator {

    private width: number;
    private height: number;
    private maze: string[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.maze = [];

        // Inicializar el laberinto con todas las paredes
        for (let row = 0; row < height; row++) {
            const rowArr: string[] = [];
            for (let col = 0; col < width; col++) {
                rowArr.push("X");
            }
            this.maze.push(rowArr);
        }
    }

    generate(): string[][] {
        // Iniciar la generación del laberinto en la posición inicial
        this.generateRecursive(0, 0);

        // Abrir la entrada y la salida del laberinto
        this.maze[0][1] = " ";
        this.maze[this.height - 1][this.width - 2] = "S";
        return this.maze
    }

    private generateRecursive(row: number, col: number): void {
        // Definir las direcciones arriba, abajo, izquierda y derecha
        const directions = [
            [-1, 0], // Arriba
            [1, 0],  // Abajo
            [0, -1], // Izquierda
            [0, 1]   // Derecha
        ];

        // Reordenar aleatoriamente las direcciones
        directions.sort(() => Math.random() - 0.5);

        // Recorrer todas las direcciones
        for (const direction of directions) {
            const newRow = row + direction[0] * 2;
            const newCol = col + direction[1] * 2;

            // Verificar si la nueva posición es válida
            if (this.isValidCell(newRow, newCol)) {
                // Eliminar la pared entre las celdas
                this.maze[newRow][newCol] = " ";

                // Avanzar en la dirección actual
                this.maze[row + direction[0]][col + direction[1]] = " ";

                // Llamar recursivamente para la nueva posición
                this.generateRecursive(newRow, newCol);
            }
        }
    }

    private isValidCell(row: number, col: number): boolean {
        return row >= 0 && row < this.height && col >= 0 && col < this.width && this.maze[row][col] === "X";
    }

}


export class MazeGenerator {

    generate(size = 25): Promise<Maze> {
        const matrix = new MazeMatrixGenerator(size, size).generate()
        return Promise.resolve(new Maze(matrix))
    }

}

export const mazeGenerator = new MazeGenerator()