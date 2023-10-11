import { useLocation } from 'wouter';
import executeMicromouseGame from '../../code-runner/application/executeMicromouseGame';
import CodeEditor from '../../code-runner/infrastructure/ui/components/CodeEditor';
import BackHomeButton from '../components/BackHomeButton';
import PrimaryButton from '../components/PrimaryButton';
import { Paths } from '../router/utils/paths';
import { useCodeRunnerPageState } from '../state/code-runner-page.state';


export default function CodeRunnerPage() {

  const {code, setCode} = useCodeRunnerPageState()
  const [,navigate] = useLocation();

  const onExecuteMicromouse = () => {
    executeMicromouseGame(code)
    navigate(Paths.MICROMOUSE_SANDBOX)
  }

  const onChangeCode = (value: string) => {
    setCode(value)
  }

  return (
    <>
      <p className="m-8 text-orange-300 text-lg">
        ¿Tienes lo que se necesita para liberar al ratoncito atrapado en el laberinto?
        Este reto te invita a poner a prueba tus habilidades de programación y resolución de problemas.
        Tu misión, si decides aceptarla, es crear una función que permita liberar al pequeño ratón atrapado en un laberinto.
        La estructura de la función que debes desarrollar es la siguiente:
      </p>
      <div className='flex place-content-center gap-6'>
        <div className="flex justify-center items-center gap-6">
          <CodeEditor defaultValue={code} onChange={onChangeCode} />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 my-8">
          <PrimaryButton text="EJECUTAR" onClick={onExecuteMicromouse} className="w-40" />
          <BackHomeButton onClick={() => { }} className="w-40" />
        </div>
      </div>
    </>
  )
}