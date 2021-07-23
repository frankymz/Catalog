import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from "./Components/General-Components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOhFour from "./Pages/404/FourOhFour";
import Category from "./Pages/Category/Category";
import Footer from "./Components/General-Components/Footer/Footer";
import Book from "./Pages/Book/Book";
import Rated from "./Pages/Top Rated/Rated";
import UserList from "./Pages/User List/User";
import Authors from "./Pages/Authors/Authors";

function App() {
  // maybe for auth, make access token appear in url, so if url appears then
  // modify the webpage
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/TopRated" component={Rated} />
          <Route exact strict path="/Authors" component={Authors} />
          <Route exact strict path="/list/:userid" component={UserList} />
          <Route exact strict path="/:category" component={Category} />
          <Route strict path="/book/:bookid" component={Book} />
          
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
