import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import axios from "axios";
import { useHistory } from "react-router";
import blank_avatar from "./blank-avatar.svg";
import { getLoggedIn } from "../../redux";
import { getLoggedUserData } from "../../redux";
import { Button } from "@chakra-ui/button";

function NavbarComponent() {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleLoggedOut = async () => {
		await axios.get("http://localhost:5000/api/loggedOut");
		dispatch(getLoggedIn());
		history.push("/");
	};
	const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);

	// eslint-disable-next-line
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);

	const getUser = () => {
		dispatch(getLoggedUserData);
	};

	useEffect(() => {
		getUser();
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Navbar className="NavbarStyle" collapseOnSelect expand="lg" variant="dark">
			<Navbar.Brand className="NavBrandStyle" href="/">
				Social Aid and Solidarity
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse
				id="responsive-navbar-nav"
				className="justify-content-end"
			>
				<Nav>
					<Nav.Link id="NavlinksStyle" href="/">
						Harita
					</Nav.Link>
					<Nav.Link id="NavlinksStyle" href="/NasilIsler">
						Nasıl İşler
					</Nav.Link>
					<Nav.Link id="NavlinksStyle" href="/about">
						Hakkımızda
					</Nav.Link>
					{!isLoggedIn && (
						<>
							<Nav.Link id="NavlinksStyle" href="/login">
								<Button colorScheme="teal" size="lg" isFullWidth>
									Giriş Yap
								</Button>
							</Nav.Link>
							<Nav.Link id="NavlinksStyle" href="/signup">
								<Button colorScheme="teal" size="lg" isFullWidth>
									Üye Ol
								</Button>
							</Nav.Link>
						</>
					)}
					{isLoggedIn && (
						// todo avatarlı profil işleri yapılacak
						// ! avatar olacak dropdown olacak çıkış yap içinde olacak
						<>
							<NavDropdown
								title={
									<Image
										src={
											loggedUserData.ppImage
												? loggedUserData.ppImage
												: blank_avatar
										}
										width="35"
										height="35"
										className="d-inline-block align-center"
										color="white"
										alt=" "
										fluid
									/>
								}
								id="NavlinksStyle"
							>
								<NavDropdown.Item href="/profile" id="NavDropdownStyle">
									<i className="fa fa-user fa-fw"></i> Profil Sayfası
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/profile/edit" id="NavDropdownStyle">
									<i className="fas fa-user-cog"></i> Ayarlar
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									onClick={handleLoggedOut}
									id="NavDropdownStyle"
								>
									<i className="fas fa-sign-out-alt"></i> Çıkış Yap
								</NavDropdown.Item>
							</NavDropdown>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComponent;
