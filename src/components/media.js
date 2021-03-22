import React from "react"
import { Link } from "gatsby"
import "../styles/media.scss"
import "../styles/global.scss"
import { Navbar, Nav } from "react-bootstrap";
import git from "../images/github.png"
import code from "../images/codepen.png"
import twit from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import insta from "../images/instagram.png"
import mail from "../images/mail.png"

const ListLink = props => (
    <ListLink style={{className:"nav"}}>
      <Link to={props.to}>{props.children}</Link>
    </ListLink>
  )


export default function Layout ({ children }) {
    return (
        <footer>
                <Navbar className="icons">
                  <Nav.Item as="a" href="https://github.com/rodrigohdiaz" target="_blank"><img src={git} className="icon" alt="git"></img></Nav.Item>
                  <Nav.Item as="a" href="https://twitter.com/rodrigohdiaz" target="_blank"><img src={twit} className="icon" alt="twitter"></img></Nav.Item>
                  <Nav.Item as="a" href="https://www.linkedin.com/in/rodrigohdiaz/" target="_blank"><img src={linkedin} className="icon" alt="linkedin"></img></Nav.Item>
                  <Nav.Item as="a" href="https://codepen.io/rodrigohdiaz" target="_blank"><img src={code} className="icon" alt="code"></img></Nav.Item>
                  <Nav.Item as="a" href="https://www.instagram.com/rodrigohdiaz/" target="_blank"><img src={insta} className="icon" alt="insta"></img></Nav.Item>
                  <Nav.Item as="a" href="mailto: rodrigohdiaz@gmail.com" target="_blank"><img src={mail} className="icon" alt="mail"></img></Nav.Item>
                </Navbar>
        </footer>
        
    )
}

// export default function Layout ({ children }) {
//     return (
//         <header>
//         <Navbar expand="md" >
//             <Navbar.Brand href="/">
//                         <img src={logo} alt="Logo" className="logo"/>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarResponsive" />
//                 <Navbar.Collapse id="navbarResponsive">
//                     <Nav as="ul" className="ml-auto">
//                         <Nav.Item as="li" className="link" activeClassName="active" href="/">Home</Nav.Item>
//                         <Nav.Item as="li" className="link" activeClassName="active" href="#">About</Nav.Item>
//                         <Nav.Item as="li" className="link" activeClassName="active" href="#">Gallery</Nav.Item>
//                         <Nav.Item as="li" className="link" activeClassName="active" href="#">Projects</Nav.Item>
//                         <Nav.Item as="li" className="link" activeClassName="active" href="#">Contact</Nav.Item>
//                     </Nav>
//                 </Navbar.Collapse>
//         </Navbar>
//         {children}
//         </header>
//     )
// }