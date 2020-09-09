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
      <div className="topnav">
        <NavbarItem path="/home" linkText="Home" />
        <NavbarItem path="/searchcaretakers" linkText="Search caretakers" />
        {token ? <NavbarItem path="/mypets" linkText="My Pets" /> : null}
        <NavbarItem path="/joinchat" linkText="Join chat" />
        <NavbarItem path="/about" linkText="About" />
        {token ? null : <NavbarItem path="/signup" linkText="Sign up" />}
        {loginLogoutControls}

        <img src={logo} alt="Our beautiful logo" />
      </div>
    </Navbar>
  );
}
