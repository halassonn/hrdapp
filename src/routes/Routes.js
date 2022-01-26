import { useContext } from "react";
import { Switch, Redirect, Link } from "react-router-dom";
import { Mainlayout } from "../components/layout";

import { AuthContext } from "../context";
import Routeall from "./routescustom/Routeall";
import Home from "../pages/Home";
import RouteProtect from "./routescustom/Routeprotect";
import Login from "../pages/login/Login";

const Routes = () => {
  const { isAuth, level } = useContext(AuthContext);
  console.log("isAuth")
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to={
          !level && isAuth === false
            ? "/login"
            : level && level.toLowerCase() === "operator"
            ? "/home"
            : "/admin"
        }
      />
      <Routeall
        level={level}
        exact
        layout={Mainlayout}
        path="/home"
        component={Home}
      />
      <RouteProtect
        level={level}
        isAuth={isAuth}
        component={Login}
        exact
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
