import { ReactiveState } from "../../utils/reactive-state";
import { Stopwatch } from "../../utils/stopwatch";
import { MicromouseGame } from "../application/MicromouseGame";

export const micromouseGame = new MicromouseGame(
    new Stopwatch(),
    new ReactiveState({
        isWinner: false,
        movements: 0,
        time: "00:00:00",
        code: "// you must to code a solution for Micromouse Challenge",
        matrix: [[]]
    })
)
