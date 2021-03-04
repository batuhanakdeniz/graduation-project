import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import greenMarker from './assets/free-map-marker-icon-green.png';
import redMarker from './assets/free-map-marker-icon-red.png';
import orangeMarker from './assets/free-map-marker-icon-orange.png';
import darkMarker from './assets/free-map-marker-icon-dark.png';
import pinkMarker from './assets/free-map-marker-icon-pink.png';
import { ButtonGroup, Button, Col, Row } from 'react-bootstrap';

import { popupContent, popupHead, popupButtons, popupButton } from './PopupStyles'

function ShowAids() {
    const aidData = [
        {
            id: 1,
            header: "Aid 1",
            lng: 36.919767118351025,
            lat: 31.088782114558335,
            message: 'number 1',
            emergencyLevel: 8,
            img: 'https://picsum.photos/200/200'
        },
        {
            id: 2,
            header: "Aid 2",
            lng: 36.918767118351025,
            lat: 31.088782114558335,
            message: 'number 2',
            emergencyLevel: 2,
            img: 'https://picsum.photos/200/200'
        },
        {
            id: 3,
            header: "Aid 2",
            lng: 36.917767118351025,
            lat: 31.088782114558335,
            message: 'number 3',
            emergencyLevel: 5,
            img: 'https://picsum.photos/200/200'
        },
        {
            id: 4,
            header: "Aid 2",
            lng: 36.920767118351025,
            lat: 31.088782114558335,
            message: 'number 4',
            emergencyLevel: 1,
            img: 'https://picsum.photos/200/200'
        },
        {
            id: 5,
            header: "Aid 2",
            lng: 36.916767118351025,
            lat: 31.088782114558335,
            message: 'number 5',
            emergencyLevel: 10,
            img: 'https://picsum.photos/200/200'
        },
        {
            id: 6,
            header: "Aid 2",
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
                        key={aid.id}
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
                        <Popup className="request-popup">
                            <div style={popupContent}>
                                <div style={popupHead}>
                                    {aid.header}
                                </div>
                                <div style={popupContent}>
                                    <img src={aid.img} witdh="300" height="300" alt="" />
                                    <br />
                                    {aid.message}
                                </div>
                                <div style={popupButtons}>
                                    <Col md={4} xs={12}>
                                        <Button variant="danger">Rapor Et</Button>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <Button variant="outline-primary">Detayları Gör</Button>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <Button variant="outline-primary">Yardım Et</Button>
                                    </Col>
                                </div>
                                <br />
                            </div>
                        </Popup>
                    </Marker>
                ))
            }

        </div >
    )
}

export default ShowAids
