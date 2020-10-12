import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component }) => {
          return <Route path={path} component={component} exact key={path} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
