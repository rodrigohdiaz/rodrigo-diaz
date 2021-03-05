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
                        <Nav.Item as="li" className="link" href="/">Home</Nav.Item>
                        <Nav.Item as="li" className="link" href="#">About</Nav.Item>
                        <Nav.Item as="li" className="link" href="#">Gallery</Nav.Item>
                        <Nav.Item as="li" className="link" href="#">Projects</Nav.Item>
                        <Nav.Item as="li" className="link" href="#">Contact</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        {children}
        </header>
    )
}
{/* <Link to="/page" className="nav-link" activeClassName="active" */}
