import { Button } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useMap } from "react-leaflet";
import { POSITION_CLASSES } from "../PositionClass";

export const AddButton = ({ position, zoom, setMapmod, mapmod }) => {
	// eslint-disable-next-line
	const parentMap = useMap();
	// eslint-disable-next-line
	const button = useMemo(() => (
		<Tooltip
			hasArrow
			label="Yardım eklemek için bu butona tıklayın. Buton turuncu hale geldiğinde harita üzerinde herhangi bir noktaya tıklayıp yardım ekleyebilirsiniz"
			fontSize="sm"
			placement="right-end"
		>
			<Button
				onClick={() => setMapmod((prev) => !prev)}
				colorScheme={mapmod ? "addAidWarning" : "brand"}
			>
				Yardım Ekle
			</Button>
		</Tooltip>
	));
	const positionClass =
		(position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
	return (
		<div className={positionClass}>
			<div className="leaflet-control leaflet-bar">{button}</div>
		</div>
	);
};
