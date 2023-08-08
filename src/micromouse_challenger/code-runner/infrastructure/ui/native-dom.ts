
export function deleteScriptElement(id: string) {
    const scriptElement = document.querySelector(`[id="${id}"]`);
    if (scriptElement) {
        scriptElement.remove();
    }
}

export function createScriptElement(id: string, src: string, onload: () => void) {
    deleteScriptElement(id)
    const script = document.createElement('script');
    script.id = id
    script.src = URL.createObjectURL(new Blob([src], { type: 'application/javascript' }));
    script.async = true;
    script.onload = onload
    document.body.appendChild(script);
}

export function sendMessageToIframe<T>(id: string, message: T) {
    const iframe = document.getElementById(id) as HTMLIFrameElement;
    console.log('sending message', iframe)
    if (iframe) {
      iframe.contentWindow.postMessage(message, '*');
    }
}