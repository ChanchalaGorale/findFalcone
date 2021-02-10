import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import FinalDestination from "./Component/Game/FinalDestination/Finaldestination";
import Success from "./Component/Game/Success/Success";
import Home from "./Component/Game/Home/Home";
import Knowmore from "./Component/Game/Home/Knowmore";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/knowmore" exact component={Knowmore} />
          <Route path="/findFalcone" exact component={FinalDestination} />
          <Route path="/success" exact component={Success} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
