import { MouseMoveEvent, MouseWinEvent } from "../../micromouse/domain/Events"

export type CodeRunnerMessageType =  'START_MICROMOUSE' | 'WORKER' | 'MICROMOUSE_MOVE' | 'MICROMOUSE_TIMEOUT' | 'MICROMOUSE_WIN'

export abstract class CodeRunnerMessage<T> {
    abstract type: CodeRunnerMessageType
    constructor(public readonly payload: T) {}
}

export class WorkerMessage extends CodeRunnerMessage<string> {
    type: CodeRunnerMessageType = "WORKER"
}

export class StartMicromouseMessage extends CodeRunnerMessage<{ code: string, matrix: string[][] }> {
    type: CodeRunnerMessageType = "START_MICROMOUSE"
}

export class MicromouseMoveMessage extends CodeRunnerMessage<{ micromouseEvent: MouseMoveEvent }> {
    type: CodeRunnerMessageType = "MICROMOUSE_MOVE"
}

export class MicromouseWinMessage extends CodeRunnerMessage<{ micromouseEvent: MouseWinEvent }> {
    type: CodeRunnerMessageType = "MICROMOUSE_WIN"
}

export class MicromouseTimeoutMessage extends CodeRunnerMessage<string> {
    type: CodeRunnerMessageType = "MICROMOUSE_TIMEOUT"
}