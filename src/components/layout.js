import React from "react"
import { Link } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import logo from "../images/logoR.png"
import { Nav, Navbar } from "react-bootstrap";

const ListLink = props => (
  <listLink style={{ Nav }}>
    <Link to={props.to}>{props.children}</Link>
  </listLink>
)

export default function Layout ({ children }) {
    return (
        <header>
        <Navbar expand="md" >
            <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ml-auto">
                        <listLink as="li" className="link" activeClassName="active" href="/">Home</listLink>
                        <listLink as="li" className="link" activeClassName="active" href="#">About</listLink>
                        <listLink as="li" className="link" activeClassName="active" href="#">Gallery</listLink>
                        <listLink as="li" className="link" activeClassName="active" href="#">Projects</listLink>
                        <listLink as="li" className="link" activeClassName="active" href="#">Contact</listLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        {children}
        </header>
    )
}

