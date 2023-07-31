import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import MicroMousePage from "../pages/MicroMousePage";
import CodeRunnerPage from "../pages/CodeRunnerPage";
import { Paths } from "./paths";

export default function Routing() {
    return (
        <Switch>
            <Route path={Paths.generateMaze} component={GenerateMazePage} />
            <Route path={Paths.micromouseChallenge} component={MicroMousePage} />
            <Route path={Paths.micromouseCodeRunner} component={CodeRunnerPage} />
            <Route component={GenerateMazePage} />
        </Switch>
    )
}