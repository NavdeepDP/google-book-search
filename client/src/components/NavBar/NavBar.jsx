import React from "react";
import {  Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Google Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li
              className={
                window.location.pathname === "/search"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link
                to="/search"
                className={
                  window.location.pathname === "/search"
                    ? "nav-link "
                    : "nav-link"
                }
              >
                Search
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/save"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link
                to="/save"
                className={
                  window.location.pathname === "/save"
                    ? "nav-link "
                    : "nav-link"
                }
              >
                Save
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
