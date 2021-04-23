import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, Product, Quote } from "./Pages";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector("#app"));
export default App;
