import { MouseMoveEvent } from "../../micromouse/domain"

export type CodeRunnerMessageType =  'START_MICROMOUSE' | 'WORKER' | 'MICROMOUSE_MOVE'

export abstract class CodeRunnerMessage<T> {
    abstract type: CodeRunnerMessageType
    constructor(public readonly payload: T) {}
}

export class WorkerMessage extends CodeRunnerMessage<string> {
    type: CodeRunnerMessageType = "WORKER"
}

export class StartMicromouseMessage extends CodeRunnerMessage<{ code: string, matrix: string[][]}> {
    type: CodeRunnerMessageType = "START_MICROMOUSE"
}

export class MicromouseMoveMessage extends CodeRunnerMessage<{ micromouseEvent: MouseMoveEvent }> {
    type: CodeRunnerMessageType = "MICROMOUSE_MOVE"
}
