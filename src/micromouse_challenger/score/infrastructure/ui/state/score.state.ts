import { create } from 'zustand'

export interface ScoreState {
   id: string;
   movements: number;
   incrementMovements: () => void;
}

export const useScoreState = create<ScoreState>((set) => ({
   id: null,
   movements: 0,
   incrementMovements: () => set((state) => ({ movements: state.movements + 1})),
}))

