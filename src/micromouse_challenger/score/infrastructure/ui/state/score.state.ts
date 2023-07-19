import { create } from 'zustand'

export interface ScoreState {
   id: string;
   movements: number;
   incrementMovements: () => void;
   time: string;
   setTime: (time: string) => void;
   startTime: Date;
   endTime: Date;
   setStartTime: () => void;
   setEndTime: () => void;
   reset: () => void;
}

const defaultState = {
   id: null,
   movements: 0,
   time: "00:00",
   startTime: null,
   endTime: null,
}

export const useScoreState = create<ScoreState>((set) => ({
   ...defaultState,
   incrementMovements: () => set((state) => ({ movements: state.movements + 1})),
   setTime: (time: string) => set({ time }),
   setStartTime: () => set({ startTime: new Date()}),
   setEndTime: () => set({ endTime: new Date()}),
   reset: () => set({ ...defaultState })
}))

