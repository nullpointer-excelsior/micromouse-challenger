import { create, useStore } from 'zustand'
import { Cell, MouseMaze } from '../../../../core/micromouse/domain';

// import { StoreApi, createStore } from 'zustand/vanilla'

// const store = createStore<MazeState>((set) => ({
//     mousePosition: 'A0',
//     maze: MouseMaze.fromMatriz([
//         [' ', 'X', 'X', 'X', 'X'], 
//         [' ', 'X', ' ', ' ', ' '],
//         [' ', 'X', ' ', 'X', ' '], 
//         [' ', ' ', ' ', 'X', ' '], 
//         ['X', 'X', 'X', 'X', 'S'] 
//     ]).maze,
//     updateMousePosition: (position: string) => set({ mousePosition: position}),
//     updateMaze: (maze: Cell[][]) => set({ maze })
// }))

// const { subscribe } = store

// export const useMazeState2 = () => useStore<StoreApi<MazeState>>(store)

export const useMazeState = create<MazeState>((set) => ({
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    maze: MouseMaze.fromMatriz([
        [' ', 'X', 'X', 'X', 'X'], 
        [' ', 'X', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', ' '], 
        [' ', ' ', ' ', 'X', ' '], 
        ['X', 'X', 'X', 'X', 'S'] 
    ]).maze,
    updateMousePosition: (position: string) => set({ mousePosition: position}),
    updateMaze: (maze: Cell[][]) => set({ maze }),
    updateMessage:(message: string) => set({ message })
}))

export interface MazeState {
    message: string;
    mousePosition: string;
    maze: Cell[][],
    updateMousePosition:(position: string) => void,
    updateMaze: (maze: Cell[][]) => void
    updateMessage: (message: string) => void
}