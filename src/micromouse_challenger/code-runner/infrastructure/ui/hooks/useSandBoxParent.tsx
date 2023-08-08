import { useEffect, useState } from "react";

export interface MicromouseMessage {
    matrix: string[][];
    code: string
}

export default function useSandBoxParent() {

    const [message, setMessage] = useState<MicromouseMessage>(null)
    
    useEffect(() => {
        const handleMessageFromParent = (event : MessageEvent<MicromouseMessage>) => {
            setMessage(event.data)
        };
        window.addEventListener('message', handleMessageFromParent);
        return () => {
            window.removeEventListener('message', handleMessageFromParent);
        };
    }, [])

    return {
        message
    }
}