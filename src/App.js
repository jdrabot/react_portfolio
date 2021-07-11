import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./components/pages/aboutme";
import Contactme from "./components/pages/contactme";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/contact" component={Contactme} />
          </div>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
