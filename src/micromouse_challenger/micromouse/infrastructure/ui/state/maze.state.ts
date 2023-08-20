import { create } from 'zustand'

export interface MazeState {
    message: string;
    mousePosition: string;
    maze: string[][];
    updateMousePosition: (position: string) => void;
    setMaze: (maze: string[][]) => void;
    updateMessage: (message: string) => void;
    reset: () => void;
}

const defaultState = {
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    maze: [
        [' ', 'X', 'X', 'X', 'X'],
        [' ', 'X', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', ' '],
        [' ', ' ', ' ', 'X', ' '],
        ['X', 'X', 'X', 'X', 'S']
    ],
}

export const useMazeState = create<MazeState>((set) => ({
   ...defaultState,
    updateMousePosition: (position: string) => set({ mousePosition: position }),
    setMaze: (maze: string[][]) => set({ maze }),
    updateMessage: (message: string) => set({ message }),
    reset: () => set({ ...defaultState })
}))

