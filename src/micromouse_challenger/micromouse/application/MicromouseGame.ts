import { Observable, filter, map } from "rxjs";
import { Stopwatch } from "../../utils/stopwatch";
import { MicromouseState } from "../domain/state/MicromouseState";
import { GameOverResponse, SetupGame } from "../dto";

export type MicromouseGameOptions = {
    stopwatch: Stopwatch,
    gameTime: `${number}:${number}`,
    state: MicromouseState
}

export class MicromouseGame {

    private stopwatch: Stopwatch
    private gameTime: `${number}:${number}`
    private state$: MicromouseState

    constructor(options: MicromouseGameOptions) {
        this.stopwatch = options.stopwatch
        this.gameTime = options.gameTime
        this.state$ = options.state
    }

    start() {
        this.stopwatch.start()
        this.stopGameAt(this.gameTime)
    }

    finish() {
        this.stopwatch.stop()
        this.state$.resetMousePosition()
    }

    reset() {
        this.stopwatch.stop()
        this.state$.reset()
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
                this.state$.updatePlayerResult({
                    time: time,
                    isWinner: false
                })
                this.state$.resetMousePosition()
            })

    }

    onGameOver(callback: () => void) {
        this.stopwatch.onStop().subscribe({
            next: () => {
                callback()
            },
            error: err => console.log(err)
        })
    }

    gameOver(): Observable<GameOverResponse> {
        return this.stopwatch.onStop().pipe(
            map(() => ({
                isWinner: this.state$.getIsWinner()
            }))
        )
    }

    updateScore(params: { message: string, position: string }) {
        this.state$.updateMousePosition(params.position)
        this.state$.updateMessage(params.message)
        this.state$.incrementMovements()
    }

    movements() {
        return this.state$.onMovement()
    }

    setup(code: string) {
        this.state$.setCode(code)
    }

    getSetup(): SetupGame {
        return {
            code: this.state$.getCode(),
            matrix: this.state$.getMaze()
        }
    }

    win() {
        this.state$.setIsWinner(true)
        this.finish()
    }

}



