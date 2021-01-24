import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/details" component={Details} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
