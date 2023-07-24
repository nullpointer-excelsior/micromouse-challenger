
import Editor from '@monaco-editor/react';
import PrimaryButton from '../components/PrimaryButton';
import { useEffect, useState } from 'react';
import { createMicromouseCode, getCodeExample } from '../../code-runner/application';
import { createScriptElement, deleteScriptElement } from '../../code-runner/infrastructure/ui/native-dom';
import { useMazeState } from '../../micromouse/infrastructure/ui/state/maze.state';
import { micromouse } from '../../micromouse/application';
import { useLocation } from 'wouter';
import Maze from '../../micromouse/infrastructure/ui/components/maze/Maze';
import useStartChallenge from '../../micromouse/infrastructure/ui/hooks/useStartChallenge';


export default function CodeRunnerPage() {
  const micromouseScriptId = "micromouse-script"
  const defaultCode = getCodeExample()
  const [code, setCode] = useState(null)
  const { flag, maze } = useMazeState()
  const [, location] = useLocation()

  const { start } = useStartChallenge()


    useEffect(() => {
        micromouse.startChallenger({ flag, matrix: maze })
    }, [])

  useEffect(() => {
    return () => deleteScriptElement(micromouseScriptId);
  }, []);

  const executeMicromouse = () => {
    start()
    const micromouseCode = createMicromouseCode(code ?? defaultCode)
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
        <Maze />
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
        
      </div>
      <div className="flex justify-center items-center gap-6 my-8">
        <PrimaryButton text="EJECUTAR MICROMOUSE" onClick={executeMicromouse} />
        <PrimaryButton text="VOLVER" onClick={() => location("/")} />
      </div>
    </>
  )
}