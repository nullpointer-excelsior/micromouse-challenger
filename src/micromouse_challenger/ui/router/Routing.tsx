import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import MicroMousePage from "../pages/MicroMousePage";
import MicroMouseIDEPage from "../pages/MicroMouseIDEPage";


export default function Routing() {
    return (
        <Switch>
            <Route path="/maze/generate" component={GenerateMazePage} />
            <Route path="/micromouse/challenger" component={MicroMousePage} />
            <Route path="/micromouse/ide" component={MicroMouseIDEPage} />
            <Route component={GenerateMazePage} />
        </Switch>
    )
}