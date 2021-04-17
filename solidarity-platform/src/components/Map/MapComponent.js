import React, { useEffect, useState, useMemo } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, LayersControl,LayerGroup,Marker, Popup, useMapEvents,ImageOverlay ,useMap } from 'react-leaflet'
import './mapStyle.scss'
import addAidMarker from './assets/free-map-marker-icon-blue-darker.png';
import TabComponent from './Tab';
import { Col, Row } from 'react-bootstrap';
import LocationMarker from './LocationMarker';
import ShowAids from './ShowAids';
import aidData from '../aidData'
import DrawerExample from './Drawer'
import AidCards from './AidCards';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  }
function Addbutton({position, zoom}) {
    const parentMap = useMap()
    const button = useMemo(
        () =>(
            <Button colorScheme="teal" size="lg">Yardım Ekle</Button>
        )
    )
    const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{button}</div>
        </div>
    )
}

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


    

    return (
        <div style={{ marginLeft: "1rem" }}>
            <Row >
                <Col sm={2} md={3}>
                    <Row>
                        <Col>
                            <TabComponent setMapmod={setMapmod} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AidCards aidData={aidData} />
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} md={9}>
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
                        <Addbutton position="bottomleft"/>              
                        {
                            mapmod ?
                            <LayersControl position="topright">
                                <LayersControl.Overlay checked name="Layer group with Marker">
                                    <LayerGroup>
                                        <LocationMarker icon={addAidIcon} />
                                    </LayerGroup>
                                </LayersControl.Overlay>
                            </LayersControl>
                        :
                            <LayersControl position="topright">
                                <LayersControl.Overlay checked name="Layer group with Marker">
                                    <LayerGroup>
                                        <ShowAids aidData={aidData} />
                                    </LayerGroup>
                                </LayersControl.Overlay>
                            </LayersControl>
                        }
                    </MapContainer>
                </Col>

            </Row>
        </div>
    );
}




export default MapComponent



/**
 * <div style={{ marginLeft: "1rem" }}>
            <Row >
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



                                
 */