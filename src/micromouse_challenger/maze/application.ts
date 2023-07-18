import { v4 as uuidv4 } from 'uuid';
import { Maze } from './domain';

export class MazeGenerator {

    generate(): Promise<Maze> {
        const flag = uuidv4()
        const matrix = [
            [' ', 'X', 'X', 'X', 'X'],
            [' ', 'X', ' ', ' ', ' '],
            [' ', 'X', ' ', 'X', ' '],
            [' ', ' ', ' ', 'X', ' '],
            ['X', 'X', 'X', 'X', 'S']
        ]
        return Promise.resolve(new Maze(flag, matrix))
    }

}

export const mazeGenerator = new MazeGenerator()