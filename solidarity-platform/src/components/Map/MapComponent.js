import React, { useEffect, useState, useContext } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import './mapStyle.scss'
import addAidMarker from './assets/free-map-marker-icon-blue-darker.png';
import TabComponent from './Tab';
import { Col, Row } from 'react-bootstrap';
import LocationMarker from './LocationMarker';
import ShowAids from './ShowAids';
//import aidData from '../aidData'
import AidCards from './AidCards';
import HelpContext  from '../../context/HelpContext.js'
function MapComponent({ match }) {
    const [zoom, setZoom] = useState('17');
    useEffect(() => {
        setZoom('17')
    }, [])
    const [mapmod, setMapmod] = useState(false);

    const addAidIcon = L.icon({
        iconUrl: addAidMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    const {helps, getHelps} = useContext(HelpContext);
    console.log("Map helps:",helps);
    const [aidData,setAidData] =useState();
    const getHelp = () => {
        getHelps();
        setAidData(helps);
    }
    useEffect(() => {
        getHelp();
        // ! Alt satır kalacak silme
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("Map component: ",aidData);
    return (
<<<<<<< Updated upstream
        <div style={{ marginLeft: "1rem" }}>
            <Row>
                <Col md={3}>
                    <Row>
                        <TabComponent setMapmod={setMapmod} />
                    </Row>
                    <Row>
                        <AidCards aidData={aidData} />
                    </Row>
                </Col>
                <Col md={9}>
                    <MapContainer
                        className="map-container"
                        center={[36.919767118351025, 31.088782114558335]}
                        zoom={zoom}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            mapmod ?
                                <LocationMarker icon={addAidIcon} />
                                :
                                <ShowAids aidData={aidData} />
                        }
                    </MapContainer>
                </Col>
            </Row>
        </div>
=======
            <div style={{ marginLeft: "1rem" }}>
                <Row>
                    <Col md={12}>
                        <TabComponent setMapmod={setMapmod} />
                    </Col>
                    <Col md={3}>
                        <AidCards aidData={helps} />
                    </Col>
                    <Col md={9}>
                        <MapContainer
                            className="map-container"
                            center={[36.919767118351025, 31.088782114558335]}
                            zoom={zoom}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {
                                mapmod ?
                                    <LocationMarker icon={addAidIcon} />
                                    :
                                    <ShowAids  aidData={aidData}/>
                            }
                        </MapContainer>
                    </Col>
                </Row>
            </div>
>>>>>>> Stashed changes
    );
}

export default MapComponent

