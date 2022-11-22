import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MyTeam from "./Components/MyTeam";
import NotFound from "./Components/NotFound";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/my-team" component={MyTeam} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
);

export default App;
