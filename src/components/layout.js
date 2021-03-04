import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"
import "../styles/global.scss"
import logo from "../images/logoR.png"
import { Nav, Navbar, Toggle } from "react-bootstrap";

const ListLink = props => (
  <listLink style={{ Nav }}>
    <Link to={props.to}>{props.children}</Link>
  </listLink>
)

export default function Layout ({ children }) {
    return (
        <header>
        <Navbar collapseOnSelect expand="sm">
                <ListLink to="/">
                        <img src={logo} alt="Logo" className="logo"/>
                </ListLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto justify-content-end menuTop">
                        <Nav.Link className="link" href="/">Home</Nav.Link>
                        <Nav.Link className="link" href="#">About</Nav.Link>
                        <Nav.Link className="link" href="#">Gallery</Nav.Link>
                        <Nav.Link className="link" href="#">Projects</Nav.Link>
                        <Nav.Link className="link" href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </header>
    )
}

