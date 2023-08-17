import { MicroMouse } from "./MicroMouse"

export class MicromouseGame {
    
    private micromouse: MicroMouse | null = null
    
    start(micromouse: MicroMouse) {
        this.micromouse = micromouse
    }

    getMicromouse() {
        return this.micromouse
    }

}

export const micromouseGame = new MicromouseGame()