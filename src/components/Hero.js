import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">QuickFix Project</h1>

    <p className="lead">
      This is a application that access QuickBook API s to show details <a href="#">Please login to continue
      </a>
    </p>
  </div>
);

export default Hero;
