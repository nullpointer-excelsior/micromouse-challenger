import { Stopwatch } from "../../utils/stopwatch";
import { Observable, filter, map } from "rxjs";
import { ReactiveState } from "../../utils/reactive-state";
import { MicromouseGameState } from "../domain/state/MicromouseGameState";
import { GameOverResponse, SetupGame } from "../dto";
import { MazeState } from "../domain/state/MazeState";

export class MicromouseGame {

    constructor(
        private stopwatch: Stopwatch, 
        private gameState$: ReactiveState<MicromouseGameState>,
        private mazeState$: MazeState
    ) { }

    start(params: { maze: string[][], stopGameAt: `${number}:${number}`}) {
        this.gameState$.reset()
        this.stopwatch.start()
        this.mazeState$.setMaze(params.maze)
        this.stopGameAt(params.stopGameAt)
    }

    finish() {
        this.stopwatch.stop()
    }

    reset() {
        this.gameState$.reset()
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
                this.gameState$.update({
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
                isWinner: this.gameState$.snapshot().isWinner
            }))
        )
    }

    updateScore(params: { message: string, position: string}) {
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

    setup(params: SetupGame) {
        this.gameState$.reduce(state => ({
            ...state,
            ...params
        }))
    }

    getSetup(): SetupGame {
        return {
            code: this.gameState$.snapshot().code,
            matrix: this.gameState$.snapshot().matrix
        }
    }

    getSetup$(): Observable<SetupGame> {
        return this.gameState$.listen().pipe(
            map(state => ({ code: state.code, matrix: state.matrix }))
        )
    }

    win() {
        this.gameState$.reduce(state => ({
            ...state,
            isWinner: true,
        }))
        this.finish()
    }

}



