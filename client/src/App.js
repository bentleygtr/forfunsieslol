import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 

const App = () => (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/:id" component={Detail} />
      <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
