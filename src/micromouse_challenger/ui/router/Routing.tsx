import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import MicroMousePage from "../pages/MicroMousePage";
import CodeRunnerPage from "../pages/CodeRunnerPage";
import { Paths } from "./utils/paths";

export default function Routing() {
    return (
        <Switch>
            <Route path={Paths.GENERATE_MAZE} component={GenerateMazePage} />
            <Route path={Paths.MICROMOUSE_CHALLENGE} component={MicroMousePage} />
            <Route path={Paths.MICROMOUSE_CODERUNNER} component={CodeRunnerPage} />
            <Route component={GenerateMazePage} />
        </Switch>
    )
}