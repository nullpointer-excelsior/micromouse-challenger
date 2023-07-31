import { useEffect, useState } from "react";
import { createScriptElement } from "../native-dom";

export interface MicromouseMessage {
    matrix: string[][];
}

export default function SandBox() {

    const [message, setMessage] = useState<MicromouseMessage>(null)
    createScriptElement("sandbox-iframe", `
    async function loop (){ 
        while(true) {
            await new Promise((resolve, reject) => setTimeout(resolve, 1000))
            console.log("hello!!")

        }
    }
    loop().then(() => console.log('loop done!'))
`)

    useEffect(() => {
        
        const handleMessageFromParent = (event: MessageEvent<MicromouseMessage>) => {
            console.log('Mensaje recibido desde la página padre:', event.data);
            setMessage(event.data)
        };
        window.addEventListener('message', handleMessageFromParent);

        return () => {
            window.removeEventListener('message', handleMessageFromParent);
        };
    }, [])

    return (
        <>
        <h1>Code Sandbox</h1>
            { message? "Maze OK": "No maze given"}
        </>
    )
}