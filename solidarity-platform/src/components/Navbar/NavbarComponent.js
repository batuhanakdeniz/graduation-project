import React, { useContext, useState } from 'react'
//import { Link } from 'react-router-dom'
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
//import { useHistory } from 'react-router-dom'
import './Navbar.scss'
import AuthContext from "../../context/AuthContext";
import axios from 'axios';
import { useHistory } from 'react-router';
import navbarPP from '../Details/joe.jpg'

function NavbarComponent() {

    const history = useHistory();
    const { getLoggedIn } = useContext(AuthContext);
    const handleLoggedOut = async () => {
        await axios.get("http://localhost:5000/loggedOut");
        await getLoggedIn();
        history.push('/');
    }
    const loggedInfos = useContext(AuthContext);

    return (
        <Navbar className="NavbarStyle" collapseOnSelect expand="lg" variant="dark" >
            <Navbar.Brand className="NavBrandStyle" href="/">Social Aid and Solidarity Platform</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link id="NavlinksStyle" href="/">Anasayfa</Nav.Link>
                    <Nav.Link id="NavlinksStyle" href="/NasilIsler">Nasıl İşler</Nav.Link>
                    <Nav.Link id="NavlinksStyle" href="/map">Harita</Nav.Link>
                    <Nav.Link id="NavlinksStyle" href="/about">About</Nav.Link>
                    {!loggedInfos.loggedIn && (
                        <>
                            <Nav.Link id="NavlinksStyle" href="/login">Giriş Yap</Nav.Link>
                            <Nav.Link id="NavlinksStyle" href="/signup">Üye Ol</Nav.Link>
                        </>
                    )}
                    {loggedInfos.loggedIn && (
                        // todo avatarlı profil işleri yapılacak
                        // ! avatar olacak dropdown olacak çıkış yap içinde olacak
                        <>
                            <NavDropdown title={
                                <Image
                                    src={navbarPP}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=" "
                                    fluid
                                    roundedCircle
                                />
                            }
                                id="NavlinksStyle">
                                <NavDropdown.Item href="/profile/60662c02967c4181cd2f6cf7" id="NavDropdownStyle">
                                    <i className="fa fa-user fa-fw"></i> User Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" id="NavDropdownStyle">
                                    <i class="fas fa-user-cog"></i> Settings
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLoggedOut} id="NavDropdownStyle">
                                    <i class="fas fa-sign-out-alt"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                    )}


                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarComponent
