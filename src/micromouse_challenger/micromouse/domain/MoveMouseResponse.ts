import { CellPosition } from "./CellPosition";

export class MoveMouseResponse {

    constructor(
        public readonly message: string,
        public readonly cellPosition: CellPosition,
        public readonly mouseMoved: boolean
    ) { }

}