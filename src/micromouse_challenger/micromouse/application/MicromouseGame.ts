import { Stopwatch } from "../../utils/stopwatch";
import { Observable, filter, map } from "rxjs";
import { ReactiveState } from "../../utils/reactive-state";
import { MicromouseGameState } from "../domain/state/MicromouseGameState";
import { GameOverResponse, SetupGame } from "../dto";

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

    setup(params: SetupGame) {
        this.state$.reduce(state => ({
            ...state,
            ...params
        }))
    }

    getSetup(): SetupGame {
        return {
            code: this.state$.snapshot().code,
            matrix: this.state$.snapshot().matrix
        }
    }

    getSetup$(): Observable<SetupGame> {
        return this.state$.listen().pipe(
            map(state => ({ code: state.code, matrix: state.matrix }))
        )
    }

    win() {
        this.state$.reduce(state => ({
            ...state,
            isWinner: true,
        }))
        this.finish()
    }

}



