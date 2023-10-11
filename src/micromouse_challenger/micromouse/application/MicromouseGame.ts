import { Stopwatch } from "../../utils/stopwatch";
import { Observable, filter, map } from "rxjs";
import { ReactiveState } from "../../utils/reactive-state";
import { MicromouseGameState } from "../domain/state/MicromouseGameState";
import { GameOverResponse, SetupGame } from "../dto";
import { MazeState } from "../domain/state/MazeState";

export type MicromouseGameOptions = {
    stopwatch: Stopwatch,
    gameTime: `${number}:${number}`,
    gameState: ReactiveState<MicromouseGameState>,
    mazeState: MazeState
}

export class MicromouseGame {

    private stopwatch: Stopwatch
    private gameTime: `${number}:${number}`
    private gameState$: ReactiveState<MicromouseGameState>
    private mazeState$: MazeState

    constructor(options: MicromouseGameOptions) {
        this.stopwatch = options.stopwatch
        this.gameTime = options.gameTime
        this.gameState$ = options.gameState
        this.mazeState$ = options.mazeState
    }

    start() {
        this.stopwatch.start()
        this.stopGameAt(this.gameTime)
    }

    finish() {
        this.stopwatch.stop()
        this.mazeState$.resetPosition()
    }

    reset() {
        this.gameState$.reset()
        this.stopwatch.stop()
        this.mazeState$.reset()
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
                this.gameState$.update({
                    time: time,
                    isWinner: false
                })
                this.mazeState$.resetPosition()
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
                isWinner: this.gameState$.snapshot().isWinner
            }))
        )
    }

    updateScore(params: { message: string, position: string }) {
        this.mazeState$.updateMousePosition(params.position)
        this.mazeState$.updateMessage(params.message)
        this.gameState$.reduce(state => ({
            ...state,
            movements: state.movements + 1
        }))
    }

    movements() {
        return this.gameState$.listenTo(state => state.movements)
    }

    setup(code: string) {
        this.gameState$.reduce(state => ({
            ...state,
            code
        }))
    }

    getSetup(): SetupGame {
        return {
            code: this.gameState$.snapshot().code,
            matrix: this.mazeState$.getMaze()
        }
    }

    win() {
        this.gameState$.reduce(state => ({
            ...state,
            isWinner: true,
        }))
        this.finish()
    }

}



