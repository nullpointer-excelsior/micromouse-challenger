import { BehaviorSubject, Subject, distinctUntilChanged } from "rxjs";

export interface State {
    message: string;
    mousePosition: string;
    maze: string[][];
}

export class MazeState {

    private defaultState: State 
    private message: BehaviorSubject<string>
    private maze: BehaviorSubject<string[][]>
    private mousePosition: BehaviorSubject<string>

    constructor(props: State) {
        this.defaultState = props
        this.maze = new BehaviorSubject(props.maze)
        this.message = new BehaviorSubject(props.message)
        this.mousePosition = new BehaviorSubject(props.mousePosition)
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

    resetPosition() {
        this.mousePosition.next(this.defaultState.mousePosition)
    }

}
