import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";

export default function Routing(props) {
  const { setRefreshCheckLogin } = props;

  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component setRefreshCheckLogin={setRefreshCheckLogin} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
