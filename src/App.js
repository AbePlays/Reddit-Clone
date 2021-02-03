import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import Auth from "./components/Auth";
import Spinner from "./components/Spinner";

const App = () => {
  const { user, isLoading } = useAuth0();

  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/"
          component={isLoading ? Spinner : user ? Home : Auth}
          exact
        />
        {user && <Route path="/details" component={Details} />}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
