import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const HelpContext = createContext();
// todo BİRAZ DEĞİŞMESİ LAZIM BURANIN
function HelpContextConsumer(props) {
    const [helps, setHelps] = useState(undefined);

    async function getHelps() {
        const helpRes = await axios.get("http://localhost:5000/map/api/help");
        setHelps(helpRes.data);
        console.log("Context: ",helpRes.data);
    }
    useEffect(() => {
        getHelps();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <HelpContext.Consumer value={{ helps, getHelps }}>
            {props.children}
        </HelpContext.Consumer>
    );
}

export default HelpContext;
export { HelpContextConsumer };