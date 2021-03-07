import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap';

function TabComponent({ setMapmod }) {


    const [key, setKey] = useState('show');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => {
                setMapmod(prev => !prev)
                return setKey(k)
            }}
        >
            <Tab eventKey="show" title="Show Aids">
                These are the aids
            </Tab>
            <Tab eventKey="add" title="Add Aid">
                To add aid on your current location, click on the map.
            </Tab>
        </Tabs>
    );

}

export default TabComponent
