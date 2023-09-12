import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import CodeRunnerPage from "../pages/CodeRunnerPage";
import { Paths } from "./utils/paths";
import Home from "../Home";
import SandBoxPage from "../pages/SandBoxPage";

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

function SandboxRoute() {
    return (
        <Home>
            <SandBoxPage />
        </Home>
    )
}

export default function Routing() {
    return (
        <Switch>
            <Route path={Paths.GENERATE_MAZE} component={GenerateMazeRoute} />
            <Route path={Paths.MICROMOUSE_CODERUNNER} component={CodeRunnerRoute} />
            <Route path={Paths.MICROMOUSE_SANDBOX} component={SandboxRoute} />
            <Route component={GenerateMazeRoute} />
        </Switch>
    )
}