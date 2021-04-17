import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { Link } from 'react-router-dom'

function LocationMarker(props) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
    return position === null ? null : (
        <Marker position={position} icon={props.icon}>
            <Popup>
                <span>
                    You are here
                    <br />
                    Langitude : {position.lng}
                    <br />
                    Latitude : {position.lat}
                    <br />
                </span>
                <Link to={`/yardımekle/${position.lng}/${position.lat}`} >
                    <Button type='submit' >Buraya Yardım Ekle</Button>
                </Link>
            </Popup >
        </Marker >
    )
}


export default LocationMarker
