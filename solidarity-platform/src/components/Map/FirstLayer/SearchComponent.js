import React, { useMemo, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useMap } from 'react-leaflet'
import { AidCards } from '../SecondLayer/AidCards';
import { POSITION_CLASSES } from '../PositionClass';



export const Search = ({ position, zoom }) => {
    const [isSearch, setIsSearch] = useState(false);

    const handleSearchClick = () => {
        setIsSearch((prev) => !prev);
    }
    const handleSearch = (e) => {
        console.log("e : ", e.target.value);
    }
    const parentMap = useMap()
    const button = useMemo(
        () => (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onBlur={handleSearchClick} onClick={handleSearchClick} onChange={handleSearch} />
                <Button variant="success"><i class="fas fa-search-location" /></Button>
            </Form>)
    )

    const positionClass =
        (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft
    return (
        <div style={{ marginLeft: "5rem" }} className={positionClass}>
            <div className="leaflet-control leaflet-bar">{button}</div>
            {isSearch ? <div className="leaflet-control leaflet-bar">
                <AidCards />
            </div>
                : null}

        </div>
    )
}