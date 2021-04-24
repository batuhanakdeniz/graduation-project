import React, { useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { useMap } from 'react-leaflet'
import { POSITION_CLASSES } from '../PositionClass';

export const AddButton = ({ position, zoom, setMapmod, mapmod }) => {
    const parentMap = useMap()
    const button = useMemo(
        () => (
            <Button onClick={() => setMapmod((prev) => !prev)} variant={mapmod ? 'warning' : 'success'} > Yardım Ekle</Button >  //todo onClick ekle ve yardım eklenir hale gelsin
        )
    )
    const positionClass =
        (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{button}</div>
        </div>
    )
}