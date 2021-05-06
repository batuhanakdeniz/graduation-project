import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { setAidLocationLatLng, setAidLocationProperties } from "../../../redux";
import AddAidModal from "../Layer_3/AddAidModal";

import LCG from "leaflet-control-geocoder";

function LocationMarker(props) {
	const position = useSelector((state) => state.addAidLocation);
	const dispatch = useDispatch();

	const geocoder = L.Control.Geocoder.nominatim();
	const map = useMapEvents({
		click(e) {
			dispatch(setAidLocationLatLng(e.latlng));
			console.log("1");
			geocoder.reverse(
				e.latlng,
				map.options.crs.scale(map.getZoom()),
				(results) => {
					var r = results[0];
					console.log("r : ", r.properties);
					if (results[0]) dispatch(setAidLocationProperties(r.properties));
				}
			);
		},
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleModalClick = () => {
		onOpen();
	};
	const [isSuccesfullySubmitted, setIsSuccesfullySubmitted] = useState(false);
	return position === null ? null : (
		<>
			<Marker position={position} icon={props.icon}>
				<Popup>
					<span>
						<h2>Buraya yardım ekleyebilirsin</h2>
						<br />
					</span>
					<Button
						onClick={() => {
							handleModalClick();
							setIsSuccesfullySubmitted(false);
						}}
						key={"xl"}
						m={4}
					>
						Buraya Yardım Ekle
					</Button>
				</Popup>
			</Marker>
			<AddAidModal
				isSuccesfullySubmitted={isSuccesfullySubmitted}
				setIsSuccesfullySubmitted={setIsSuccesfullySubmitted}
				onClose={onClose}
				isOpen={isOpen}
			/>
		</>
	);
}

export default LocationMarker;
