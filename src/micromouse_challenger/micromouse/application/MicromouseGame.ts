import { Observable, filter, map } from "rxjs";
import { Stopwatch } from "../../utils/stopwatch";
import { ReactiveState } from "../../utils/reactive-state";
import { MicromouseGameState } from "../domain/state/MicromouseGameState";
import { GameOverResponse } from "../dto";

export class MicromouseGame {

    constructor(private stopwatch: Stopwatch, private state$: ReactiveState<MicromouseGameState> ) { }

    start() {
        this.state$.reset()
        this.stopwatch.start()
    }

    finish() {
        this.stopwatch.stop()
    }

    reset() {
        this.state$.reset()
        this.stopwatch.stop()
    }

    time() {
        return this.stopwatch.time()
    }

    stopGameAt(time: `${number}:${number}`) {
        this.stopwatch
            .time()
            .pipe(filter(timeValue => timeValue === `${time}:00`))
            .subscribe((time: string) => {
                this.stopwatch.stop()
                this.state$.update({
                    time: time,
                    isWinner: false
                })
            })

    }

    onGameOver(callback: () => void) {
        this.stopwatch.onStop().subscribe({
            next:() => {
                callback()
            },
            error: err => console.log(err)
        })
    }

    gameOver(): Observable<GameOverResponse> {
        return this.stopwatch.onStop().pipe(
            map(() => ({
                isWinner: this.state$.snapshot().isWinner
            }))
        )
    }

    incrementMovements() {
        this.state$.reduce(state => ({
            ...state,
            movements: state.movements + 1
        }))
    }

    movements() {
        return this.state$.listenTo(state => state.movements)
    }

}



export const micromouseGame = new MicromouseGame(
    new Stopwatch(),
    new ReactiveState({
        isWinner: false,
        movements: 0,
        time: "00:00:00"
    })
)



