import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from "./Components/General-Components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOhFour from "./Pages/404/FourOhFour";
import Category from "./Pages/Category/Category";
import Footer from "./Components/General-Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route path="/" component={Category} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
