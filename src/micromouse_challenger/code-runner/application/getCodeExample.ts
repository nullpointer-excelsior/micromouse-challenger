
export function getCodeExample() {
    return  `
/**
 * Interfaz que define las propiedades requeridas para configurar un laberinto para el ratón.
 */
export interface MouseMazeProps {
    flag: string;          // La bandera que el ratón debe encontrar en el laberinto.
    matrix: string[][];    // La matriz que representa el laberinto.
}

/**
 * Interfaz que representa una celda en el laberinto.
 */
interface Cell {
    /**
     * Verifica si es posible caminar sobre esta celda.
     * @returns \`true\` si se puede caminar sobre la celda, \`false\` de lo contrario.
     */
    canWalk(): boolean;

    /**
     * Verifica si esta celda es la salida del laberinto.
     * @returns \`true\` si es la salida, \`false\` de lo contrario.
     */
    isExit(): boolean;
}

/**
 * Interfaz que representa la posición actual del ratón en el laberinto.
 */
interface CellPosition {
    /**
     * Obtiene la celda en una posición específica en relación con la posición actual.
     * @param position La dirección en la que buscar la celda ('up', 'down', 'left', 'right').
     * @returns La celda en la posición especificada.
     */
    getCell(position: string): Cell;

    /**
     * Obtiene la posición actual del ratón en el laberinto.
     * @returns La posición actual en formato de cadena.
     */
    getCurrentPosition(): string;
}

/**
 * Interfaz que define la respuesta de un movimiento del ratón en el laberinto.
 */
interface MoveMouseResponse {
    message: string;          // Un mensaje descriptivo del resultado del movimiento.
    cellPosition: CellPosition;  // La nueva posición del ratón después del movimiento.
    mouseMoved: boolean;      // Indica si el ratón se movió con éxito.
}

/**
 * Interfaz que representa el contexto del ratón en el laberinto.
 */
interface MicroMouseContext {
    /**
     * Mueve al ratón en una dirección específica dentro del laberinto.
     * @param position La dirección en la que mover el ratón ('up', 'down', 'left', 'right').
     * @returns Una promesa que resuelve en una respuesta después del movimiento.
     */
    move(position: 'up' | 'down' | 'left' | 'right'): Promise<MoveMouseResponse>;

    /**
     * Obtiene la bandera que el ratón debe encontrar en el laberinto.
     * @returns La bandera que el ratón busca.
     */
    getFlag(): string;

    /**
     * Obtiene la posición actual del ratón en el laberinto.
     * @returns La posición actual en formato de cadena.
     */
    getCurrentPosition(): string;

    /**
     * Obtiene la celda actual en la que se encuentra el ratón.
     * @returns La celda actual del ratón.
     */
    getCurrentCell(): Cell;

    /**
     * Obtiene la celda superior a la actual en la que se encuentra el ratón, si existe.
     * @returns La celda superior o \`null\` si no es posible moverse en esa dirección.
     */
    getUpCell(): Cell | null;

    /**
     * Obtiene la celda inferior a la actual en la que se encuentra el ratón, si existe.
     * @returns La celda inferior o \`null\` si no es posible moverse en esa dirección.
     */
    getDownCell(): Cell | null;

    /**
     * Obtiene la celda a la izquierda de la actual en la que se encuentra el ratón, si existe.
     * @returns La celda a la izquierda o \`null\` si no es posible moverse en esa dirección.
     */
    getLeftCell(): Cell | null;

    /**
     * Obtiene la celda a la derecha de la actual en la que se encuentra el ratón, si existe.
     * @returns La celda a la derecha o \`null\` si no es posible moverse en esa dirección.
     */
    getRightCell(): Cell | null;
}

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
    console.log('Code-example-print-micromouse-potition', micromouse.getCurrentPosition())
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
    
    `
}