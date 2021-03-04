import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import greenMarker from './assets/free-map-marker-icon-green.png';
import redMarker from './assets/free-map-marker-icon-red.png';
import orangeMarker from './assets/free-map-marker-icon-orange.png';
import darkMarker from './assets/free-map-marker-icon-dark.png';
import pinkMarker from './assets/free-map-marker-icon-pink.png';
import { Col, Row } from 'react-bootstrap';
function ShowAids() {
    const aidData = [
        {
            lng: 36.919767118351025,
            lat: 31.088782114558335,
            message: 'number 1',
            emergencyLevel: 8,
            img: 'https://picsum.photos/200/200'
        },
        {
            lng: 36.918767118351025,
            lat: 31.088782114558335,
            message: 'number 2',
            emergencyLevel: 2,
            img: 'https://picsum.photos/200/200'
        },
        {
            lng: 36.917767118351025,
            lat: 31.088782114558335,
            message: 'number 3',
            emergencyLevel: 5,
            img: 'https://picsum.photos/200/200'
        },
        {
            lng: 36.920767118351025,
            lat: 31.088782114558335,
            message: 'number 4',
            emergencyLevel: 1,
            img: 'https://picsum.photos/200/200'
        },
        {
            lng: 36.916767118351025,
            lat: 31.088782114558335,
            message: 'number 5',
            emergencyLevel: 10,
            img: 'https://picsum.photos/200/200'
        },
        {
            lng: 36.921767118351025,
            lat: 31.088782114558335,
            message: 'number 6',
            emergencyLevel: 6,
            img: 'https://picsum.photos/200/200'
        }
    ]

    const greenIcon = L.icon({
        iconUrl: greenMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    const darkIcon = L.icon({
        iconUrl: darkMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    const pinkIcon = L.icon({
        iconUrl: pinkMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    const orangeIcon = L.icon({
        iconUrl: orangeMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    const redIcon = L.icon({
        iconUrl: redMarker,
        iconSize: [50, 50],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    });
    return (
        <div>
            {
                aidData.map(aid => (
                    <Marker
                        position={[aid.lng, aid.lat]}
                        icon={
                            (aid.emergencyLevel > 5)
                                ?
                                ((aid.emergencyLevel > 9)
                                    ? darkIcon
                                    : (aid.emergencyLevel <= 7) ? pinkIcon : redIcon)
                                :
                                ((aid.emergencyLevel < 4) ? greenIcon : orangeIcon)
                        }
                    >
                        <Popup>
                            <Row>
                                <Col md={6}>
                                    <h2> {aid.message} </h2>
                                </Col>
                                <Col md={6}>
                                    <img src={aid.img} alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h2> {aid.message} </h2>
                                </Col>
                                <Col md={6}>
                                    <h2> {aid.message} </h2>
                                </Col>
                            </Row>
                        </Popup>
                    </Marker>
                ))
            }

        </div>
    )
}

export default ShowAids
