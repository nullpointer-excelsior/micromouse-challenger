import { micromouse } from "../../../micromouse/application";

export function deleteScriptElement(id: string) {
    const scriptElement = document.querySelector(`[id="${id}"]`);
    if (scriptElement) {
        scriptElement.remove();
    }
}

export function createScriptElement(id: string, src: string) {
    deleteScriptElement(id)
    const script = document.createElement('script');
    script.id = id
    script.src = URL.createObjectURL(new Blob([src], { type: 'application/javascript' }));
    script.async = true;
    script.onload = () => {
        console.log('Micromouse code loaded!')
        // @ts-ignore
        play(micromouse)
    }
    document.body.appendChild(script);
}