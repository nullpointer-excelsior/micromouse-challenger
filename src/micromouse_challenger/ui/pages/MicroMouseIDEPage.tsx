
import Editor from '@monaco-editor/react';
import PrimaryButton from '../components/PrimaryButton';
import { micromouse } from '../../micromouse/application';
import { useEffect, useState } from 'react';
import * as Babel from '@babel/standalone'

const defaultCode = `
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
  if (micromouse.getUpCell().canWalk()) {
    micromouse.move("up")
  }
  // ... your fucking awesome code!!!
}
alert('script ok')

`



function transpileCode(code: string) {
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

function deleteScriptElement(id: string) {
  const scriptElement = document.querySelector(`[id="${id}"]`);
  if (scriptElement) {
    scriptElement.remove();
  }
}

function createScriptElement(id: string, src: string) {
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

export default function MicroMouseIDEPage() {
  const micromouseScriptId = "micromouse-script"
  const [code, setCode] = useState(null)

  useEffect(() => {
    return () => deleteScriptElement(micromouseScriptId);
  }, []);

  const executeMicromouse = () => {
    const micromouseCode = transpileCode(code ?? defaultCode)
      .replace('export {};', '')
      .replace(' export ', '')
      .replace('export ', '')
    createScriptElement(micromouseScriptId, micromouseCode)
  }

  return (
    <>
      <p className="m-8 text-orange-300 text-lg">
        ¿Tienes lo que se necesita para liberar al ratoncito atrapado en el laberinto?
        Este reto te invita a poner a prueba tus habilidades de programación y resolución de problemas.
        Tu misión, si decides aceptarla, es crear una función que permita liberar al pequeño ratón atrapado en un laberinto.
        La estructura de la función que debes desarrollar es la siguiente:
      </p>
      <div className="flex justify-center items-center gap-6">
        <Editor
          height="50vh"
          width="90vh"
          defaultLanguage="typescript"
          theme='vs-dark'
          defaultValue={defaultCode}
          onChange={(value: string, e: any) => {
            setCode(value)
          }}
        />
        <PrimaryButton text="EJECUTAR MICROMOUSE" onClick={executeMicromouse} />
      </div>
    </>
  )
}