import { Route } from 'wouter'
import Home from './micromouse_challenger/ui/Home'
import Routing from './micromouse_challenger/ui/router/Routing'
import SandBox from './micromouse_challenger/code-runner/infrastructure/ui/components/SandBox'
import NestedRouting from './micromouse_challenger/ui/router/NestedRouting'
import { Paths } from './micromouse_challenger/ui/router/paths'

function App() {

  return (
    <>
      <NestedRouting base={Paths.home}>
        <Home>
          <Routing />
        </Home>
      </NestedRouting>
      <Route path={Paths.sandbox} component={SandBox} />
    </>
  )
}

export default App
