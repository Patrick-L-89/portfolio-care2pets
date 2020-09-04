import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="logo">
      <img src="http://127.0.0.1:8887/logo.png" alt="my awesome logo" />

      <Nav.Item className="flex-column">
        <ul>
          <li>TODO: search for caretakers</li>
          <li>
            <Link to="/nearbyvets">Veterinarians near you</Link>
          </li>
          <li>TODO: link to nearby petshops</li>
          <li>TODO: about us</li>
        </ul>
      </Nav.Item>
    </div>
  );
}
