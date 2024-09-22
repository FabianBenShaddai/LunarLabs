import React from "react";
import "./index.css";
import Logo from "../../Assets/img-home.svg";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="contenedor-landing">
      <div>
        <h1>
          LazyLoonies is Token launch platform for <span>innovative</span> projects
        </h1>

        <p id="landing-label">
          Access public and special rounds of high-quality crypto projects.
        </p>
      </div>

      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default Landing;
