import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav.Item className="flex-column">
      <img
        src="file:///home/mimir/Codaisseur/portfolio_project/logo.png"
        alt="my awesome logo"
      />
      <ul>
        <li>TODO: search for caretakers</li>
        <li>
          <Link to="/nearbyvets">Veterinarians near you</Link>
        </li>
        <li>TODO: link to nearby petshops</li>
        <li>TODO: about us</li>
      </ul>
    </Nav.Item>
  );
}
