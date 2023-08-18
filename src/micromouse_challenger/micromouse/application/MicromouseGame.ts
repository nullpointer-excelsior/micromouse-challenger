import { filter, takeWhile, tap } from "rxjs";
import { Stopwatch } from "../../utils/stopwatch";
import { ReactiveState } from "../../utils/rxjs";

export class MicromouseGame {

    constructor(private stopwatch: Stopwatch, private movements$: ReactiveState<number>) { }

    start() {
        this.stopwatch.start()
    }

    stop() {
        this.stopwatch.stop()
    }

    time() {
        return this.stopwatch.time()
    }

    stopGameAt(time: `${number}:${number}`) {
        this.stopwatch
            .time()
            .pipe(filter(timeValue => timeValue === `${time}:00`))
            .subscribe(() => this.stopwatch.stop())

    }

    onGameOver(callback: () => void) {
        this.stopwatch.onStop().subscribe({
            next:() => callback(),
            error: err => console.log(err)
        })
    }

    incrementMovements() {
        this.movements$.reduce((prev: number) => prev + 1)
    }

    movements() {
        return this.movements$.listen()
    }

}


export const micromouseGame = new MicromouseGame(
    new Stopwatch(),
    new ReactiveState<number>(0)
)



