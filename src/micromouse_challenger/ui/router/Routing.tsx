import { Route, Switch } from "wouter";
import GenerateMazePage from "../pages/GenerateMazePage";
import MicroMousePage from "../pages/MicroMousePage";


export default function Routing() {
    return (
        <Switch>
            <Route path="/maze/generate" component={GenerateMazePage} />
            <Route path="/micromouse/challenger" component={MicroMousePage} />
            <Route component={GenerateMazePage} />
        </Switch>
    )
}