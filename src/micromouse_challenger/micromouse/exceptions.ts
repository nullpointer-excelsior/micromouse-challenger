export class InvalidMazeLocationException extends Error { 
    constructor(message: string) {
        super(message)
        this.name ='InvalidMazeLocationException'
    }
}

export class InvalidCellNameException extends Error { 
    constructor(message: string) {
        super(message)
        this.name ='InvalidCellNameException'
    }
}