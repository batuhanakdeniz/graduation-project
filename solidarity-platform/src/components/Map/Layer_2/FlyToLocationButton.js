import { Button } from "@chakra-ui/button";
import React, { useMemo } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../../../redux";
import { POSITION_CLASSES } from "../PositionClass";

export const FlyToLocationButton = ({position}) => {

    const parentMap = useMap();
    const dispatch = useDispatch()
    const locationButton = () => {
        parentMap.locate();
        console.log(parentMap);
    }   
    const map = useMapEvents({
		locationfound: (location) => {
            map.setView(location.latlng);
            dispatch(setUserLocation(location.latlng))
            map.setZoom(16);
		  },
	});
	// eslint-disable-next-line
	// eslint-disable-next-line
	const button = useMemo(() => (
        
		<Button
            onClick={locationButton}
            colorScheme="brand"
            size="lg"
		>
			<i class="fas fa-location-arrow"></i>
		</Button> //todo onClick ekle ve yardım eklenir hale gelsin
	));
	const positionClass =
		(position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
	return (
		<div className="fly-to-location-button">
			<div className="leaflet-control leaflet-bar">{button}</div>
		</div>
	);
};
