import React, { useContext } from 'react'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavbarComponent from './components/Navbar/NavbarComponent';
import Footer from './components/Footer/footer';
import HomePage from './components/Home Page/HomePage';
import LoginPage from './components/LoginForm/LoginForm';
import YardimEkle from './components/YardimEkle/YardimEkle';
import MapComponent from './components/Map/MapComponent';
import DetailPage from './components/Details/Detail';
import AboutPage from './components/About/about';
import ProfilePage from './components/Profile/profile';
import RegistrationTypesPage from './components/RegistrationForm/RegistrationTypesPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import NasilIsler from './components/NasilIsler/NasilIsler';
import styled from 'styled-components';
import axios from 'axios';
import AuthContext, { AuthContextProvider } from "./context/AuthContext";


axios.defaults.withCredentials = true; // ? always set true cookielere izin verir her zaman

const DIVM = styled.div`
    min-height: 60vh;
`

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
    components: {
        Button: {
            variants: {
                "with-shadow": {
                    bg: "red.400",
                    boxShadow: "0 0 2px 2px #efdfde",
                }
            }
        }
    }
}
const theme = extendTheme({ colors })


function App() {

    const loggedIn = useContext(AuthContext);
    return (
        <ChakraProvider theme={theme}>
            <AuthContextProvider>
                <Router>
                    <div className="App">
                        <NavbarComponent loggedIn={loggedIn} />
                        <DIVM>
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/detail/:id" exact component={DetailPage} />
                                <Route path="/NasilIsler" exact component={NasilIsler} />
                                <Route exact path="/login" >
                                    <LoginPage />
                                </Route>
                                <Route path="/map" exact component={MapComponent} />
                                <Route path="/about" exact component={AboutPage} />
                                {!loggedIn && (
                                    <Route path="/signup" exact component={RegistrationTypesPage} />)
                                }
                                {!loggedIn &&
                                    (<Route path="/signup/:userType" component={RegistrationForm} />)
                                }
                                <Route path="/yardimekle/:lng/:lat" exact component={YardimEkle} />

                                <Route path="/profile/:id" exact component={ProfilePage} />
                                <Route path="/map" exact component={MapComponent} />
                            </Switch>
                        </DIVM>
                        <Footer />
                    </div>
                </Router>
            </AuthContextProvider>
        </ChakraProvider>
    );
}


export default App;
