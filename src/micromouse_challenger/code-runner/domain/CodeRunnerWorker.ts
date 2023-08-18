import { Observable, filter, fromEventPattern, map } from "rxjs"
import { CodeRunnerMessageType, CodeRunnerMessage } from "./CodeRunnerMessage";


export class CodeRunnerWorker {

    private message$: Observable<MessageEvent<any>>

    constructor(private readonly worker: Worker) {
        this.message$ = fromEventPattern(
            handler => worker.addEventListener("message", handler),
            handler => worker.removeEventListener("message", handler)
        );
    }

    sendMessage<T extends CodeRunnerMessage<any>>(message: T): void {
        this.worker.postMessage(message)
    }

    onMessage<T extends CodeRunnerMessage<any>>(type?: CodeRunnerMessageType): Observable<T> {
        const onMessage$ = this.message$.pipe(map(message => message.data as T))
        if (!type) {
            return onMessage$
        }
        return onMessage$.pipe(filter(m => m.type === type)) 
    }
    
    terminate() {
        this.worker.terminate()
    }

}