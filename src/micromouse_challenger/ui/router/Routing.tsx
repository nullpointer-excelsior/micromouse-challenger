import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import CodeRunnerPage from "../pages/CodeRunnerPage";
import { Paths } from "./utils/paths";
import SandBoxPage from "../pages/SandBoxPage";
import Home from "../Home";

function GenerateMazeRoute() {
    return (
        <Home>
            <GenerateMazePage />
        </Home>
    )
}
function CodeRunnerRoute() {
    return (
        <Home>
            <CodeRunnerPage />
        </Home>
    )
}

export default function Routing() {
    return (
        <Switch>
            <Route path={Paths.GENERATE_MAZE} component={GenerateMazeRoute} />
            <Route path={Paths.MICROMOUSE_CODERUNNER} component={CodeRunnerRoute} />
            <Route path={Paths.SANDBOX} component={SandBoxPage} />
            {/* <Route component={GenerateMazeRoute} /> */}
        </Switch>
    )
}