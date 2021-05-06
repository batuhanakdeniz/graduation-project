import { Button } from "@chakra-ui/button";
import React, { useMemo } from "react";
import { useMap } from "react-leaflet";
import { POSITION_CLASSES } from "../PositionClass";

export const AddButton = ({ position, zoom, setMapmod, mapmod }) => {
	// eslint-disable-next-line
	const parentMap = useMap();
	// eslint-disable-next-line
	const button = useMemo(() => (
		<Button
			onClick={() => setMapmod((prev) => !prev)}
			colorScheme={mapmod ? "addAidWarning" : "brand"}
		>
			{" "}
			Yardım Ekle
		</Button> //todo onClick ekle ve yardım eklenir hale gelsin
	));
	const positionClass =
		(position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
	return (
		<div className={positionClass}>
			<div className="leaflet-control leaflet-bar">{button}</div>
		</div>
	);
};
