import { create } from 'zustand'

interface State {
    flag: string;
    matrix: string[][];
}

export interface MazeGeneratorState {
    flag: string;
    matrix: string[][];
    updateMaze: (newState: State) => void
}

export const useMazeGeneratorState = create<MazeGeneratorState>((set) => ({
    flag: '',
    matrix: null,
    updateMaze: (newState: State) => set(newState)
}))

