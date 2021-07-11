import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Aboutme from "./pages/aboutme";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Wrap from "./components/wrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Wrap>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/portfolio" component={Projects} />
          </Wrap>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
