import { create } from 'zustand'
import { Cell, MouseMaze } from '../../../domain';

export interface MazeState {
    message: string;
    mousePosition: string;
    maze: Cell[][];
    updateMousePosition:(position: string) => void;
    updateMaze: (maze: Cell[][]) => void;
    updateMessage: (message: string) => void;
}

export const useMazeState = create<MazeState>((set) => ({
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    maze: MouseMaze.create({
        flag: 'no-flag',
        matrix: [
            [' ', 'X', 'X', 'X', 'X'], 
            [' ', 'X', ' ', ' ', ' '],
            [' ', 'X', ' ', 'X', ' '], 
            [' ', ' ', ' ', 'X', ' '], 
            ['X', 'X', 'X', 'X', 'S'] 
        ]
    }).maze,
    updateMousePosition: (position: string) => set({ mousePosition: position}),
    updateMaze: (maze: Cell[][]) => set({ maze }),
    updateMessage:(message: string) => set({ message })
}))

