import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/footer';
import HomePage from './components/Home Page/HomePage';
import LoginPage from './components/LoginForm/LoginForm';
import YardımEkle from './components/YardımEkle/YardımEkle';
import MapComponent from './components/Map/MapComponent';
import DetailPage from './components/Details/Detail';
import AboutPage from './components/About/about';
import RegistrationTypesPage from './components/RegistrationForm/RegistrationTypesPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
}
const theme = extendTheme({ colors })


function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <div className="App">
                    <NavbarComponent />
                    <Switch >
                        <Route path="/" exact component={HomePage} />
                        <Route path="/detail" exact component={DetailPage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/map" exact component={MapComponent} />
                        <Route path="/signup" exact component={RegistrationTypesPage} />
                        <Route path="/about" exact component={AboutPage} />
                        <Route path="/signup/:id" component={RegistrationForm} />
                        <Route path="/yardımekle/:lng/:lat" exact component={YardımEkle} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </ChakraProvider>
    );
}


export default App;
