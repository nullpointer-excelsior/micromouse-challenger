import { useEffect } from "react";
import { createScriptElement, deleteScriptElement } from "../native-dom";

export default function useScriptElement() {
    const scriptId = "micromouse-script"

    useEffect(() => {
        return () => deleteScriptElement(scriptId);
    }, []);

    const createScript = (code: string, onload: () => void) => {
        createScriptElement(scriptId, code, onload)
    }

    return {
        createScript
    }
}