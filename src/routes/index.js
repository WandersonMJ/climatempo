import React, { useContext, useEffect } from "react";

import { Switch, Route, useHistory } from "react-router-dom";

import { Context } from "../services";

import Menu from "../components/Menu";
import History from "../pages/history";
import TimeSearch from "../pages/timeSearch";
import Login from "../pages/login";
import Register from "../pages/register";

export default function Routes() {
  const history = useHistory();
  const { token } = useContext(Context);

  useEffect(() => {
    if (token?.length > 0) {
      history.push("/");
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token?.length > 0) {
    return (
      <Switch>
        <Menu>
          <Route exact path="/">
            <TimeSearch />
          </Route>
          <Route path="/historico">
            <History />
          </Route>
        </Menu>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cadastrar">
        <Register />
      </Route>
    </Switch>
  );
}
