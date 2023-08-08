import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { createMicromouseCode, getCodeExample } from '../../code-runner/application';
import CodeEditor from '../../code-runner/infrastructure/ui/components/CodeEditor';
import { useMazeState } from '../../micromouse/infrastructure/ui/state/maze.state';
import SandboxIframe from '../../code-runner/infrastructure/ui/components/SandboxIframe';
import BackHomeButton from '../components/BackHomeButton';


const helpTexts = {
  editor: `¿Tienes lo que se necesita para liberar al ratoncito atrapado en el laberinto?
  Este reto te invita a poner a prueba tus habilidades de programación y resolución de problemas.
  Tu misión, si decides aceptarla, es crear una función que permita liberar al pequeño ratón atrapado en un laberinto.
  La estructura de la función que debes desarrollar es la siguiente:`,
  sandbox: `Tendras 3 minutos para que tu algoritmo pueda resolver el desafio. el ranking sera basado en tu tiempo y numero de movimientos. Suerte!!`
}


export default function CodeRunnerPage() {
  
  const [code, setCode] = useState(getCodeExample())
  const { maze } = useMazeState()
  const [message, setMessage] = useState(null)
  const [showSandbox, setShowSandbox] = useState(false)
  const [btnText, setBtText] = useState("EJECUTAR")
  const [helpText, setHelpText] = useState(helpTexts.editor)
  
  const onExecuteMicromouse = () => {

    const micromouseCode = createMicromouseCode(code)
    console.log("execute-micromouse")
    
    setShowSandbox(!showSandbox)
    setBtText(!showSandbox? "DETENER" : "EJECUTAR")
    setHelpText(!showSandbox? helpTexts.sandbox : helpTexts.editor)
    setMessage({
      code: micromouseCode,
      matrix: maze
  })
  }

  const onChangeCode = (value: string, e: any) => setCode(value)

  return (
    <>
      <p className="m-8 text-orange-300 text-lg">
        {helpText}
      </p>
      <div className='flex place-content-center gap-6'>
        <div className="flex justify-center items-center gap-6">
          { showSandbox? <SandboxIframe message={message}/>: <CodeEditor defaultValue={code} onChange={onChangeCode} />}
        </div>
        <div className="flex flex-col justify-center items-center gap-6 my-8">
          <PrimaryButton text={btnText} onClick={onExecuteMicromouse} className="w-60" />
          <BackHomeButton onClick={() => stop()} className="w-60" />
        </div>
      </div>
    </>
  )
}