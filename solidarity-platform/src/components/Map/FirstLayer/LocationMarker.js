import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { Link } from 'react-router-dom'

function LocationMarker(props) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng)
            map.locate(e)
        }
    })
    return position === null ? null : (
        <Marker position={position} icon={props.icon}>
            <Popup>
                <span>
                    <h2>Buraya yardım ekle</h2>
                    <br />
                </span>
                <Link to={`/yardimekle/${position.lng}/${position.lat}`} >
                    <Button type='submit' >Buraya Yardım Ekle</Button>
                </Link>
            </Popup >
        </Marker >
    )
}


export default LocationMarker
