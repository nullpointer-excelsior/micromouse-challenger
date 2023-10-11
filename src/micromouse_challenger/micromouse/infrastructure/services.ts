import getGameConfiguration from "../../code-runner/application/getGameConfiguration";
import { Stopwatch } from "../../utils/stopwatch";
import { MicromouseGame } from "../application/MicromouseGame";
import { MicromouseState } from "../domain/state/MicromouseState";


const configuration = getGameConfiguration()


export const micromouseState = new MicromouseState({
    message: "Micromouse challenger iniciando 🏆 <- 🐁",
    mousePosition: 'A0',
    maze: [
        [' ', 'X', 'X', 'X', 'X'],
        [' ', 'X', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', ' '],
        [' ', ' ', ' ', 'X', ' '],
        ['X', 'X', 'X', 'X', 'S']
    ],
    isWinner: false,
    movements: 0,
    time: "00:00:00",
    code: "// you must to code a solution for Micromouse Challenge",
})


export const micromouseGame = new MicromouseGame({
    stopwatch: new Stopwatch(),
    gameTime: configuration.gameTimeout,
    state: micromouseState
})
