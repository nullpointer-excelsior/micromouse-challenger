import { BehaviorSubject, distinctUntilChanged } from "rxjs";

export interface State {
    message: string;
    mousePosition: string;
    maze: string[][];
    time: string
    movements: number
    isWinner: boolean
    code: string
}

export class MicromouseState {

    private defaultState: State 
    private message: BehaviorSubject<string>
    private maze: BehaviorSubject<string[][]>
    private mousePosition: BehaviorSubject<string>
    private time: BehaviorSubject<string>
    private movements: BehaviorSubject<number>
    private isWinner: BehaviorSubject<boolean>
    private code: BehaviorSubject<string>

    constructor(props: State) {
        this.defaultState = props
        this.maze = new BehaviorSubject(props.maze)
        this.message = new BehaviorSubject(props.message)
        this.mousePosition = new BehaviorSubject(props.mousePosition)
        this.time = new BehaviorSubject(props.time)
        this.movements = new BehaviorSubject(props.movements)
        this.isWinner = new BehaviorSubject(props.isWinner)
        this.code = new BehaviorSubject(props.code)
    }

    setMaze(maze: string[][]) {
        this.maze.next(maze)
    }

    updateMousePosition(position: string) {
        this.mousePosition.next(position)
    }

    updateMessage(message: string) {
        this.message.next(message)
    }

    onMessage() {
        return this.message.pipe(distinctUntilChanged())
    }

    onMaze() {
        return this.maze.pipe(distinctUntilChanged())
    }

    getMaze() {
        return this.maze.value
    }

    onMousePosition() {
        return this.mousePosition.pipe(distinctUntilChanged())
    }

    reset() {
        this.maze.next(this.defaultState.maze)
        this.message.next(this.defaultState.message)
        this.mousePosition.next(this.defaultState.mousePosition)
    }

    resetMousePosition() {
        this.mousePosition.next(this.defaultState.mousePosition)
        this.movements.next(0)
    }

    updatePlayerResult(payload: { time: string, isWinner: boolean}){
        this.time.next(payload.time)
        this.isWinner.next(payload.isWinner)
    }

    getIsWinner() {
        return this.isWinner.value
    }

    setIsWinner(payload: boolean) {
        this.isWinner.next(payload)
    }

    incrementMovements() {
        this.movements.next(this.movements.value + 1)
    }

    onMovement() {
        return this.movements.pipe(distinctUntilChanged())
    }

    setCode(payload: string){
        this.code.next(payload)
    }

    getCode(){
        return this.code.value
    }
}
