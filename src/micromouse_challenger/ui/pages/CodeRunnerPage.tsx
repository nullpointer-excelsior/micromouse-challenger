import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { createMicromouseCode, getCodeExample } from '../../code-runner/application';
import Maze from '../../micromouse/infrastructure/ui/components/maze/Maze';
import useStartChallenge from '../../micromouse/infrastructure/ui/hooks/useStartChallenge';
import BackHomeButton from '../components/BackHomeButton';
import useScriptElement from '../../code-runner/infrastructure/ui/hooks/useScriptElement';
import ScoreDashboard from '../../score/infrastructure/ui/components/score-dashboard/ScoreDashboard';
import CodeEditor from '../../code-runner/infrastructure/ui/components/CodeEditor';


export default function CodeRunnerPage() {
  
  const [code, setCode] = useState(null)
  const { start, stop } = useStartChallenge()
  const { createScript } = useScriptElement()
  
  const defaultCode = getCodeExample()

  const onExecuteMicromouse = () => {
    stop()
    start(300)
    const micromouseCode = createMicromouseCode(code ?? defaultCode)
    createScript(micromouseCode)
  }

  const onChangeCode = (value: string, e: any) => setCode(value)

  return (
    <>
      <p className="m-8 text-orange-300 text-lg">
        ¿Tienes lo que se necesita para liberar al ratoncito atrapado en el laberinto?
        Este reto te invita a poner a prueba tus habilidades de programación y resolución de problemas.
        Tu misión, si decides aceptarla, es crear una función que permita liberar al pequeño ratón atrapado en un laberinto.
        La estructura de la función que debes desarrollar es la siguiente:
      </p>
      <div className="flex justify-center items-center my-8">
        <ScoreDashboard />
      </div>
      <div className="flex justify-center items-center gap-6">
        <Maze />
        <CodeEditor defaultValue={defaultCode} onChange={onChangeCode} />
      </div>
      <div className="flex justify-center items-center gap-6 my-8">
        <PrimaryButton text="EJECUTAR MICROMOUSE" onClick={onExecuteMicromouse} />
        <BackHomeButton className="w-80 my-8" />
      </div>
    </>
  )
}