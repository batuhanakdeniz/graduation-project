import { Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup, useMapEvents } from 'react-leaflet'

import { setAidLocation } from '../../../redux'
import AddAidModal from '../SecondLayer/AddAidModal';

function LocationMarker(props) {
    const position = useSelector(state => state.addAidLocation);
    const dispatch = useDispatch()
    const map = useMapEvents({
        click(e) {
            dispatch(setAidLocation(e.latlng))
            map.locate(e)
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleModalClick = () => {
        onOpen()
    }
    const [isSuccesfullySubmitted, setIsSuccesfullySubmitted] = useState(false)
    return position === null ? null : (
        <>
            <Marker position={position} icon={props.icon}>
                <Popup>
                    <span>
                        <h2>Buraya yardım ekle</h2>
                        <br />
                    </span>
                    <Button
                        onClick={() => { handleModalClick(); setIsSuccesfullySubmitted(false); }}
                        key={"xl"}
                        m={4}
                    >Buraya Yardım Ekle</Button>
                </Popup >
            </Marker >
            <AddAidModal isSuccesfullySubmitted={isSuccesfullySubmitted} setIsSuccesfullySubmitted={setIsSuccesfullySubmitted} onClose={onClose} isOpen={isOpen} />

        </>
    )
}


export default LocationMarker


{/* <Link to={`/yardimekle/${position.lng}/${position.lat}`} >
                    <Button type='submit' >Buraya Yardım Ekle</Button>
                </Link> */}