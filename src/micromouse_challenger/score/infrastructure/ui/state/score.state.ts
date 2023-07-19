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
}

export const useScoreState = create<ScoreState>((set) => ({
   id: null,
   movements: 0,
   incrementMovements: () => set((state) => ({ movements: state.movements + 1})),
   time: "00:00",
   setTime: (time: string) => set({ time }),
   startTime: null,
   endTime: null,
   setStartTime: () => set({ startTime: new Date()}),
   setEndTime: () => set({ endTime: new Date()}),
}))

