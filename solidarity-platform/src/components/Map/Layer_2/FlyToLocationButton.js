import { Button } from "@chakra-ui/button";
import React, { useMemo } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../../../redux";
import { BiCurrentLocation } from "react-icons/bi";
export const FlyToLocationButton = () => {
	const parentMap = useMap();
	const dispatch = useDispatch();
	const locationButton = () => {
		parentMap.locate();
	};
	const map = useMapEvents({
		locationfound: (location) => {
			map.setView(location.latlng);
			dispatch(setUserLocation(location.latlng));
			map.setZoom(16);
		},
	});
	// eslint-disable-next-line
	const button = useMemo(() => (
		<Button onClick={locationButton} colorScheme="brand" size="lg">
			<BiCurrentLocation size="2rem" />
		</Button> //todo onClick ekle ve yardım eklenir hale gelsin
	));

	return (
		<div className="fly-to-location-button">
			<div className="leaflet-control leaflet-bar">{button}</div>
		</div>
	);
};
