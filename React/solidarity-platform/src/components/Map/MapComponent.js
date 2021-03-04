import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import './mapStyle.scss'
import addAidMarker from './assets/free-map-marker-icon-blue-darker.png';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import TabComponent from './Tab';
import { Container } from 'react-bootstrap';
import LocationMarker from './LocationMarker';
import ShowAids from './ShowAids';
function MapComponent({ match }) {
    const [zoom, setZoom] = useState('17');
    const [mapmod, setMapmod] = useState(false);

    const addAidIcon = L.icon({
        iconUrl: addAidMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });

    const inlineStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    return (
        <Container>
            <TabComponent setMapmod={setMapmod} />
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
                        <ShowAids />
                }
            </MapContainer>
        </Container>
    );
}

export default MapComponent

