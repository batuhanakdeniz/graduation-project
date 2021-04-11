import React, { useContext } from 'react'
//import { Link } from 'react-router-dom'
import { Button, Nav, Navbar } from 'react-bootstrap'
//import { useHistory } from 'react-router-dom'
import './Navbar.scss'
import AuthContext from "../../context/AuthContext";


function NavbarComponent() {
    /*
    const history = useHistory();
    */
    const handleLoggedOut = () => {
        /*
        !!!!! Buraya Çıkış yaparken ne olacağı yazılacak 
        ? setIsLoggedIn(false)
        ? setLoggedUser('')
        ? history.push('/login')
         */
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
                        <>
                            <Nav.Link id="NavlinksStyle" > Giriş Yapıldı: {loggedInfos.loggedUser} </Nav.Link>
                            <Button type="submit" onSubmit={handleLoggedOut} id="NavlinksStyle">Çıkış Yap</Button>
                        </>
                    )}


                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarComponent
