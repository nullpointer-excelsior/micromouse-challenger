import { Redirect, Route } from 'wouter'
import Home from './micromouse_challenger/ui/Home'
import Routing from './micromouse_challenger/ui/router/Routing'
import NestedRouting from './micromouse_challenger/ui/router/NestedRouting'
import { Paths } from './micromouse_challenger/ui/router/utils/paths'
import SandBoxPage from './micromouse_challenger/ui/pages/SandBoxPage'

function App() {

  return (
    <>
      <NestedRouting base={Paths.HOME}>
        <Home>
          <Routing />
        </Home>
      </NestedRouting>
      <Route path={Paths.SANDBOX} component={SandBoxPage} />
      <Route path={Paths.ROOT}>
        <Redirect to={Paths.HOME}/>
      </Route>
    </>
  )
}

export default App
