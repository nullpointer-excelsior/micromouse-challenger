export class Cell {

    constructor(
        public readonly position: string, 
        public readonly type: string
    ) { }

    canWalk(): boolean {
        return this.type === ' ' || this.type === 'S';
    }

    isExit(): boolean {
        return this.type === 'S';
    }
}
