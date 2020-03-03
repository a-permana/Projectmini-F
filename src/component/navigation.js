import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
function Navigation() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  function logout() {
    sessionStorage.setItem("persisted_state_hook:token", "");
    sessionStorage.clear();
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!token) {
    return (
      <Navbar color="teal" light expand="md">
        <NavbarBrand>My BLOG</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div class="container">
              <NavItem>
                <NavLink to="/login" tag={RRNavLink}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register" tag={RRNavLink}>
                  Register
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token.token.admin === true) {
    return (
      <Navbar color="teal" light expand="md">
        <NavbarBrand>Code1234</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div class="container">
              <NavItem>
                <NavLink to="/home" tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} to="/login" tag={RRNavLink}>
                  Logout
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token.token.admin === false) {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand>Code</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div class="container">
              <NavItem>
                <NavLink to="/home" tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} to="/login" tag={RRNavLink}>
                  Logout
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
