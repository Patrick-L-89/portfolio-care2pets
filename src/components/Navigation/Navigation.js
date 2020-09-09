import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import "./Navigation.css";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./loggedOut";

import logo from "../../Icons/logo.png";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <div class="topnav">
        <NavbarItem path="/home" linkText="Home" />
        <NavbarItem path="/searchcaretakers" linkText="Search caretakers" />
        <NavbarItem path="/mypets" linkText="My pets" />
        <NavbarItem path="/joinchat" linkText="Join chat" />
        <NavbarItem path="/signup" linkText="Sign up" />
        {loginLogoutControls}
        <NavbarItem path="/about" linkText="About" />
      </div>
    </Navbar>
  );
}
