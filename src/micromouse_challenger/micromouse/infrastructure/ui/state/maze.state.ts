import { create } from 'zustand'

export interface MazeState {
    message: string;
    mousePosition: string;
    flag: string;
    maze: string[][];
    updateMousePosition: (position: string) => void;
    initMaze: (flag: string, maze: string[][]) => void;
    updateMessage: (message: string) => void;
}

export const useMazeState = create<MazeState>((set) => ({
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    flag: "no-flag",
    maze: [
        [' ', 'X', 'X', 'X', 'X'],
        [' ', 'X', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', ' '],
        [' ', ' ', ' ', 'X', ' '],
        ['X', 'X', 'X', 'X', 'S']
    ],
    updateMousePosition: (position: string) => set({ mousePosition: position }),
    initMaze: (flag: string, maze: string[][]) => set({ maze, flag }),
    updateMessage: (message: string) => set({ message }),
}))

