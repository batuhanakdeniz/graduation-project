import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, LayersControl, LayerGroup } from 'react-leaflet'
import '../mapStyle.scss'
import addAidMarker from '../assets/free-map-marker-icon-blue.png';

import { Col, Row } from 'react-bootstrap';
import LocationMarker from '../FirstLayer/LocationMarker';
import ShowAids from '../FirstLayer/ShowAids';
import aidData from '../../aidData'
//import DrawerExample from './Drawer'
import { AddButton } from '../FirstLayer/AddButton';
import { Search } from '../FirstLayer/SearchComponent';
//import { Button } from '@chakra-ui/react'


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
        <div>
            <Row >
                <Col sm={12} md={12}>
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
                        <Search position="topleft" />
                        <AddButton position="bottomleft" eventKey={mapmod} setMapmod={setMapmod} mapmod={mapmod} />
                        {
                            mapmod ?
                                <LocationMarker icon={addAidIcon} />
                                :
                                <LayersControl position="topright">
                                    <LayersControl.Overlay checked name="Layer group with Marker">
                                        <LayerGroup>
                                            <ShowAids />
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

