import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import greenMarker from './assets/free-map-marker-icon-green.png';
import redMarker from './assets/free-map-marker-icon-red.png';
import orangeMarker from './assets/free-map-marker-icon-orange.png';
import darkMarker from './assets/free-map-marker-icon-dark.png';
import pinkMarker from './assets/free-map-marker-icon-pink.png';
import { Button, Col, Row, Image } from 'react-bootstrap';
import { popupContent, popupHead, popupButtons, popupText } from './PopupStyles'
import { Link } from 'react-router-dom';

function ShowAids({aidData}) {


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
            
                    <Marker
                        key={aidData[0].id}
                        position={[aidData[0].lng, aidData[0].lat]}
                        icon={
                            (aidData[0].emergencyLevel > 5)
                                ?
                                ((aidData[0].emergencyLevel > 9)
                                    ? darkIcon
                                    : (aidData[0].emergencyLevel <= 7) ? pinkIcon : redIcon)
                                :
                                ((aidData[0].emergencyLevel < 4) ? greenIcon : orangeIcon)
                        }
                    >
                        <Popup className="request-popup">
                            <div style={popupContent}>
                                <div style={popupHead}>
                                    {aidData[0].header}
                                </div>
                                <div style={popupText}>
                                    <Row>
                                        <Col md={4} xs={12}>
                                            <Image src="https://picsum.photos/300/300" fluid rounded />
                                        </Col>
                                        <Col md={8} xs={12}>
                                            Aid No: {aidData.aidNo}
                                            <br />
                                            Aid Name: {aidData.personName}
                                            <br />
                                            Aid LastName: {aidData.personLastName}
                                            <br />
                                            Aid EmercenyLevel: {aidData.emergencyLevel}
                                        </Col>
                                    </Row>
                                    <br />
                                </div>
                                <div style={popupButtons}>
                                    <Col md={4} xs={12}>
                                        <Button variant="danger">Rapor Et</Button>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <Link to={`/detail/${aidData[0].id}`} >
                                            <Button variant="outline-primary">Detayları Gör</Button>
                                        </Link>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <Link to={`/detail/${aidData[0].helps.id}`} >
                                            <Button variant="outline-primary">Yardım Et</Button>
                                        </Link>
                                    </Col>
                                </div>
                                <br />
                            </div>
                        </Popup>
                    </Marker>
        </div >
    )
}

export default ShowAids
