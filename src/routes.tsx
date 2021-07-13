import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Notifier from "./pages/Notifier";
import Clips from "./pages/Clips";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notifier" component={Notifier} />
        <Route path="/clips" component={Clips} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
