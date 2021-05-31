import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Footer from "./components/Footer/footer";
import HomePage from "./components/Home Page/HomePage";
import LoginPage from "./components/LoginForm/LoginForm";
import YardimEkle from "./components/YardimEkle/YardimEkle";
import MapComponent from "./components/Map/Layer_1/MapComponent";
import DetailPage from "./components/Details/Detail";
import AboutPage from "./components/About/about";
import ProfilePage from "./components/Profile/ProfilePageComponent";
import ProfileEditPage from "./components/Profile/ProfileEditPage";
import RegistrationTypesPage from "./components/RegistrationForm/RegistrationTypesPage";
import NasilIsler from "./components/NasilIsler/NasilIsler";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedIn } from "./redux";
axios.defaults.withCredentials = true; // ? always set true cookielere izin verir her zaman

const DIVM = styled.div`
	min-height: 60vh;
`;

const colors = {
	brand: {
		500: "#2d9659",
	},
	addAidWarning: {
		500: "#db9704",
	},
	warningRed: {
		500: "#ff0f0f",
	},
	components: {
		Button: {
			variants: {
				"with-shadow": {
					bg: "red.400",
					boxShadow: "0 0 2px 2px #efdfde",
				},
			},
		},
	},
};

const theme = extendTheme({ colors });

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLoggedIn());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<div className="App">
					<NavbarComponent />
					<DIVM>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/detail/:id" exact component={DetailPage} />
							<Route path="/NasilIsler" exact component={NasilIsler} />
							<Route exact path="/login">
								<LoginPage />
							</Route>
							<Route path="/map" exact component={MapComponent} />
							<Route path="/about" exact component={AboutPage} />

							<Route path="/signup" exact component={RegistrationTypesPage} />
							<Route
								path="/yardimekle/:lng/:lat"
								exact
								component={YardimEkle}
							/>

							<Route path="/profile" exact component={ProfilePage} />
							<Route path="/profile/edit" exact component={ProfileEditPage} />
							<Route path="/map" exact component={MapComponent} />
						</Switch>
					</DIVM>
					<Footer />
				</div>
			</Router>
		</ChakraProvider>
	);
}

export default App;
