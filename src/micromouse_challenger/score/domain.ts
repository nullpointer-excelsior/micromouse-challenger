import { v4 as uuidv4 } from 'uuid';

export class Score {

    private constructor(public readonly id: string, public movements: number) { }

    incrementMovements() {
        this.movements += 1
    }

    properties() {
        return {
            id: this.id,
            movements: this.movements,
        }
    }

    static createNewScore() {
        return new Score(uuidv4(), 0)
    }
    
}