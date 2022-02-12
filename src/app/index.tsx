import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AppointmentsModule from "./modules/AppointmentsModule";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AppointmentsModule} />
        <Route path="/year/:year/month/:month" component={AppointmentsModule} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
