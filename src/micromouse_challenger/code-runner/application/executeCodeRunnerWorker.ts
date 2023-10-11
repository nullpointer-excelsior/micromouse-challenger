import { map } from "rxjs"
import { micromouseGame } from "../../micromouse/infrastructure/services"
import { MicromouseMoveMessage, StartMicromouseMessage } from "../domain/CodeRunnerMessage"
import { createCodeRunnerWorker } from "./createCodeRunnerWorker"


export type ExecuteCodeRunnerWorkerOptions = {
    onGameOver: () => void
}

export default function executeCodeRunnerWorker(options: ExecuteCodeRunnerWorkerOptions) {
    
    const worker = createCodeRunnerWorker()

    micromouseGame.start()

    micromouseGame.onGameOver(() => {
        worker.terminate()
        options.onGameOver()
    })

    worker.sendMessage(new StartMicromouseMessage(micromouseGame.getSetup()))

    worker
        .onMessage<MicromouseMoveMessage>("MICROMOUSE_MOVE")
        .pipe(map(event => event.payload.micromouseEvent))
        .subscribe({
            next: (micromouseEvent) => {
                micromouseGame.updateScore({
                    message: micromouseEvent.data.message,
                    position: micromouseEvent.data.position
                })
            },
            error: (err) => console.log(err)
        })

    worker.onMessage<MicromouseMoveMessage>("MICROMOUSE_WIN").subscribe({
        next: () => {
            micromouseGame.win()
        },
        error: (err) => console.log(err)
    })

    return worker

}