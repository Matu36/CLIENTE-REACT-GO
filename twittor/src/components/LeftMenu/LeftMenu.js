import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {} from "@fortawesome/react-fontawesome";
import LogoWhite from "../../assets/png/logo-white.png";

import "./LeftMenu.scss";

export default function LeftMenu() {
  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="twittor" />

      <Link to="/">Inicio</Link>
    </div>
  );
}
