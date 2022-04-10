import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return ( 
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          color: "blue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          color: "blue",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          color: "blue",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        activeStyle={{
          color: "blue",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
