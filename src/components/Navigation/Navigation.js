import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./Navigation.css";

import logo from "../../Icons/logo.png";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <div class="topnav">
        <NavbarItem path="/home" linkText="Home" />
        <NavbarItem path="/searchcaretakers" linkText="Search caretakers" />
        <NavbarItem path="/mypets" linkText="My pets" />
        <NavbarItem path="/join" linkText="Join chat" />
        <NavbarItem path="/about" linkText="About" />
        <NavbarItem path="/signup" linkText="Sign up" />
      </div>
    </Navbar>
  );
}
