import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";

function App() {
  return (
    <div className="App">
      <div className="App-header">        
        <h2>Welcome to Google Books Search(React)</h2>
        <h4>Search and Save books of your Interest</h4>
      </div>

      <Router>
      <div >
        
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/save" component={Save} />

      </div>
    </Router>

    </div>
  );
}


export default App;
