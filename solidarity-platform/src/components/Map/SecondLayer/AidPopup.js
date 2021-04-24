import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import greenMarker from '../assets/free-map-marker-icon-green.png';
import redMarker from '../assets/free-map-marker-icon-red.png';
import orangeMarker from '../assets/free-map-marker-icon-orange.png';
import darkMarker from '../assets/free-map-marker-icon-dark.png';
import pinkMarker from '../assets/free-map-marker-icon-pink.png';
import { Button, Col, Row, Image } from 'react-bootstrap';
import { popupContent, popupHead, popupButtons, popupText } from './PopupStyles'
import { Link } from 'react-router-dom';



function AidPopUp({ aid }) {

    return (
        <div>
            <Popup className="request-popup">
                <div style={popupContent}>
                    <div style={popupHead}>
                        {aid.header}
                    </div>
                    <div style={popupText}>
                        <Row>
                            <Col md={4} xs={12}>
                                <Image src={aid.img} fluid rounded />
                            </Col>
                            <Col md={8} xs={12}>
                                Aid No: {aid.aidNo}
                                <br />
                                            Aid Name: {aid.personName}
                                <br />
                                            Aid LastName: {aid.personLastName}
                                <br />
                                            Aid EmercenyLevel: {aid.emergencyLevel}
                            </Col>
                        </Row>
                        <br />
                    </div>
                    <div style={popupButtons}>
                        <Col md={4} xs={12}>
                            <Button variant="danger">Rapor Et</Button>
                        </Col>
                        <Col md={4} xs={12}>
                            <Link to={`/detail/${aid.id}`} >
                                <Button variant="outline-primary">Detayları Gör</Button>
                            </Link>
                        </Col>
                        <Col md={4} xs={12}>
                            <Link to={`/detail/${aid.id}`} >
                                <Button variant="outline-primary">Yardım Et</Button>
                            </Link>
                        </Col>
                    </div>
                    <br />
                </div>
            </Popup>

        </div>
    )
}

export default AidPopUp
