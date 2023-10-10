import { ReactiveState } from "../../utils/reactive-state";
import { Stopwatch } from "../../utils/stopwatch";
import { MicromouseGame } from "../application/MicromouseGame";
import { MazeState } from "../domain/state/MazeState";

export const mazeState = new MazeState({
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    maze: [
        [' ', 'X', 'X', 'X', 'X'],
        [' ', 'X', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', ' '],
        [' ', ' ', ' ', 'X', ' '],
        ['X', 'X', 'X', 'X', 'S']
    ]
})

export const micromouseGame = new MicromouseGame(
    new Stopwatch(),
    new ReactiveState({
        isWinner: false,
        movements: 0,
        time: "00:00:00",
        code: "// you must to code a solution for Micromouse Challenge",
        matrix: [[]]
    }),
    mazeState
)
