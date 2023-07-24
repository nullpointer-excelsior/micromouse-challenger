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

export function createMicromouseCode(code: string) {
    return transpile(code)
        .replace('export {};', '')
        .replace(' export ', '')
        .replace('export ', '')
}

export function getCodeExample() {
    return  `
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
        message: string,
        cellPosition: CellPosition,
    }
    
    interface MicroMouseContext {
        move(position: 'up' | 'down' | 'left' | 'right'): MoveMouseResponse 
        startChallenger(options: MouseMazeProps): void ;
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
    function play(micromouse: MicroMouseContext) {
      // aca debes realizar tus operaciones con el objeto micromouse
      // para poder mover el ratoncito 🐁
      console.log('vengo de typescript', micromouse)
      if (micromouse.getDownCell().canWalk()) {
        micromouse.move("down")
      }
      // ... your fucking awesome code!!!
    }
    //alert('script ok')
    
    `
}