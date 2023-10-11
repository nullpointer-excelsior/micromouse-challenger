import { micromouseGame } from "../../micromouse/infrastructure/services"
import { createMicromouseCode } from "./createMicromouseCode"

export default function executeMicromouseGame(code: string) {
    const micromouseCode = createMicromouseCode(code)
    micromouseGame.setup(micromouseCode)
}