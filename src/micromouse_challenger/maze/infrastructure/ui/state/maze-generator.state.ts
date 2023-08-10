import { create } from 'zustand'

interface State {
    matrix: string[][];
}

export interface MazeGeneratorState {
    matrix: string[][];
    updateMaze: (newState: State) => void
}

export const useMazeGeneratorState = create<MazeGeneratorState>((set) => ({
    matrix: null,
    updateMaze: (newState: State) => set(newState)
}))

