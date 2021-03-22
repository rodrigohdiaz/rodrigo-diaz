import React from "react"
import { Link } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import logo from "../images/logoR.png"
import { Nav, Navbar } from "react-bootstrap";

const ListLink = props => (
  <ListLink style={{ Nav }}>
    <Link to={props.to}>{props.children}</Link>
  </ListLink>
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
                        <listLink as="li" className="link" activeClassName="active"><a href='/'>Home</a></listLink>
                        <listLink as="li" className="link" activeClassName="active"><a href="/about/">About</a></listLink>
                        <listLink as="li" className="link" activeClassName="active"><a href="/gallery/">Gallery</a></listLink>
                        <listLink as="li" className="link" activeClassName="active"><a href="/projects/">Projects</a></listLink>
                        <listLink as="li" className="link" activeClassName="active"><a href="/contact.">Contact</a></listLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        {children}
        </header>
    )
}

