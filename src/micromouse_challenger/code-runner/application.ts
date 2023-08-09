import * as Babel from '@babel/standalone'

function transpile(code: string) {
    try {
        const options = {
            presets: ["typescript"],
            filename: 'my-file.ts',
            comments: false,
        }
        return Babel.transform(code, options).code;
    } catch (error) {
        console.error("Error al transpilar el código TypeScript:", error);
    }
}

export function createMicromouseCode(code: string): string {
    return transpile(code)
        .replace('export {};', '')
        .replace(' export ', '')
        .replace('export ', '')
}

export function getCodeExample() {
    return  `
    //#region Context
    
    
    //#region Context
    
    export interface MouseMazeProps {
        flag: string;
        matrix: string[][];
    }
    
    interface Cell {
        canWalk(): boolean;
        isExit(): boolean;
    }
    
    interface CellPosition {
        getCell(position: string): Cell;
        getCurrentPosition(): string;
    }
    
    interface MoveMouseResponse {
        message: string;
        cellPosition: CellPosition;
        mouseMoved: boolean;
    }
    
    interface MicroMouseContext {
        move(position: 'up' | 'down' | 'left' | 'right'): Promise<MoveMouseResponse> 
        getFlag(): string ;
        getCurrentPosition(): string ;
        getCurrentCell(): Cell ;
        getUpCell(): Cell | null ;
        getDownCell(): Cell | null ;
        getLeftCell(): Cell | null ;
        getRightCell(): Cell | null ;
    }
    //#endregion
    /**
     * Funcion principal que ejecutará la lógica de resolución del laberinto.
     * @param micromouse objeto encargado de dirigir y realizar operaciones con el ratoncito.
     */
    async function play(micromouse: MicroMouseContext) {
      // aca debes realizar tus operaciones con el objeto micromouse
      // para poder mover el ratoncito 🐁
      console.log('Challenge micromouse', micromouse)
    let res: MoveMouseResponse  = null
    let invalidPositions = []
    while (true) {
        if (micromouse.getDownCell() && micromouse.getDownCell().canWalk() && !invalidPositions.includes('down')) {
            res = await micromouse.move("down")
            if (res.mouseMoved) {
                continue
            } else {
                invalidPositions.push('down')
                if (invalidPositions.length === 4) {
                    invalidPositions = []
                    continue
                }
            }
        } else {
            invalidPositions.push('down')
            if (invalidPositions.length === 4) {
                invalidPositions = []
                continue
            }
        }
        if (micromouse.getLeftCell() && micromouse.getLeftCell().canWalk() && !invalidPositions.includes('left')) {
            res = await micromouse.move("left")
            if (res.mouseMoved) {
                continue
            } else {

                invalidPositions.push('left')
                if (invalidPositions.length === 4) {
                    invalidPositions = []
                    continue
                }
            }
        } else {
            invalidPositions.push('left')
            if (invalidPositions.length === 4) {
                invalidPositions = []
                continue
            }
        }
        if (micromouse.getRightCell() && micromouse.getRightCell().canWalk() && !invalidPositions.includes('right')) {
            res = await micromouse.move('right')
            if (res.mouseMoved) {
                continue
            } else {
                invalidPositions.push('rigth')
                if (invalidPositions.length === 4) {
                    invalidPositions = []
                    continue
                }
            }
        } else {
            invalidPositions.push('rigth')
        }
        if (micromouse.getUpCell() && micromouse.getUpCell().canWalk() && !invalidPositions.includes('up')) {
            res = await micromouse.move("up")
            if (res.mouseMoved) {
                continue
            } else {
                invalidPositions.push('up')
                if (invalidPositions.length === 4) {
                    invalidPositions = []
                    continue
                }
            }
        } else {
            invalidPositions.push('up')
            if (invalidPositions.length === 4) {
                invalidPositions = []
                continue
            }
        }
        console.log('mouse-log', invalidPositions.length)
        if (invalidPositions.length === 4) {
            invalidPositions = []

        }
        
    }

      
      // ... your fucking awesome code!!!
    }
    //alert('script ok')
    
    
    
    `
}