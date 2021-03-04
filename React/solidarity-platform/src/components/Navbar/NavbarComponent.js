import React from 'react'
//import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function NavbarComponent() {
    const NavbarStyle = {
        background: "#438a62",
    }
    const NavlinksStyle = {
        color: "white",
        marginRight: "4rem"

    }
    return (
        <Navbar style={NavbarStyle} collapseOnSelect expand="lg" variant="dark" >
            <Navbar.Brand href="/">Social Aid and Solidarity Platform</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link style={NavlinksStyle} href="/">Anasayfa</Nav.Link>
                    <Nav.Link style={NavlinksStyle} href="/detail">Nasılİşler/Detay</Nav.Link>
                    <Nav.Link style={NavlinksStyle} href="/map">Harita</Nav.Link>
                    <Nav.Link style={NavlinksStyle} href="/about">About</Nav.Link>
                    <Nav.Link style={NavlinksStyle} href="/login">Giriş Yap</Nav.Link>
                    <Nav.Link style={NavlinksStyle} href="/signup">Üye Ol</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarComponent
