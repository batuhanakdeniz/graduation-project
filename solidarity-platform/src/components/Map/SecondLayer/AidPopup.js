import React, { useEffect } from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import greenMarker from '../assets/free-map-marker-icon-green.png';
import redMarker from '../assets/free-map-marker-icon-red.png';
import orangeMarker from '../assets/free-map-marker-icon-orange.png';
import darkMarker from '../assets/free-map-marker-icon-dark.png';
import pinkMarker from '../assets/free-map-marker-icon-pink.png';
import { Button, Col, Row, Image } from 'react-bootstrap';
import { popupInnerContent, popupHead, popupButtons, popupText } from './PopupStyles'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopupContent } from '../../../redux'


function AidPopUp({ aidId }) {

    const popupContent = useSelector(state => state.popupContent)

    const dispatch = useDispatch();

    const popUpHandler = () => {
        dispatch(fetchPopupContent(aidId));
        console.log("aidID", aidId);
    }


    return (
        <div>
            <Popup onOpen={popUpHandler} className="request-popup">
                <div style={popupInnerContent}>
                    <div style={popupHead}>
                        {popupContent.aidHeader}
                    </div>
                    <div style={popupText}>
                        <Row>
                            <Col md={4} xs={12}>
                                <Image src={popupContent.aidImgSrc} fluid rounded />
                            </Col>
                            <Col md={8} xs={12}>
                                Aid No: {popupContent.aidId}
                                <br />
                                            Aid Name: {popupContent.aidName}
                                <br />
                                            Aid LastName: {popupContent.aidSurname}
                                <br />
                                            Aid EmercenyLevel: {popupContent.aidEmercenyLevel}
                            </Col>
                        </Row>
                        <br />
                    </div>
                    <div style={popupButtons}>
                        <Col md={4} xs={12}>
                            <Button variant="danger">Rapor Et</Button>
                        </Col>
                        <Col md={4} xs={12}>
                            <Link to={`/detail/${popupContent.aidId}`} >
                                <Button variant="outline-primary">Detayları Gör</Button>
                            </Link>
                        </Col>
                        <Col md={4} xs={12}>
                            <Link to={`/detail/${popupContent.aidId}`} >
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
