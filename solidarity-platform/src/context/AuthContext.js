import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

const AuthContext = createContext();
// todo BİRAZ DEĞİŞMESİ LAZIM BURANIN
function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {
        const loggedInRes = await axios.get("http://localhost:5000/loggedIn");
        setLoggedIn(loggedInRes.data);
    }

    useEffect(() =>{
        getLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>      
    );
}

export default AuthContext;
export { AuthContextProvider };