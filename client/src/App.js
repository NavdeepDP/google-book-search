import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";
import NabBar from "./components/NavBar/NavBar";
function App() {  
  console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <NabBar />
        <div className="App-header">
          <h2>Welcome to Google Books Search(React)</h2>
          <h4>Search and Save books of your Interest</h4>
        </div>

        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Save} />
        </div>
      </Router>
    </div>
  );
}

export default App;
