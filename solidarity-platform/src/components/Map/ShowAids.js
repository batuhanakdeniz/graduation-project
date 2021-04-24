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
import AidPopUp from './AidPopup'
function ShowAids({ aidData }) {


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
                        <AidPopUp aidData={aidData} />   
                    </Marker>
                ))
            }

        </div >
    )
}

export default ShowAids
