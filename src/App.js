import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import FinalDestination from "./Game/finalDestination";
import Success from "./Game/success";
import Home from "./Game/home";
import Knowmore from "./Game/Knowmore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/knowmore" exact component={Knowmore} />
          <Route path="/findFalcone" exact component={FinalDestination} />
          <Route path="/success" exact component={Success} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
