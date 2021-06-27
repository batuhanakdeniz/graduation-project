import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { setAidLocationLatLng, setAidLocationProperties } from "../../../redux";
import AddAidModal from "../Layer_3/AddAidModal";
import { Col, Row } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";

function LocationMarker(props) {
	const position = useSelector((state) => state.addAidLocation);
	const dispatch = useDispatch();
	const popupRef = useRef();
	const geocoder = L.Control.Geocoder.nominatim();
	const map = useMapEvents({
		click(e) {
			dispatch(setAidLocationLatLng(e.latlng));
			console.log(popupRef.current);
			popupRef.current.openPopup();
			geocoder.reverse(
				e.latlng,
				map.options.crs.scale(map.getZoom()),
				(results) => {
					var r = results[0];
					console.log("r", r);
					if (results[0]) dispatch(setAidLocationProperties(r.properties));
				}
			);
		},
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleModalClick = () => {
		onOpen();
	};

	return position === null ? null : (
		<>
			<Marker position={position} icon={props.icon} ref={popupRef}>
				<Popup>
					<Row>
						<Col md={12}>
							<span style={{ fontSize: "larger", textAlign: "center" }}>
								<strong>Buraya yardım ekleyebilirsin</strong>
							</span>
						</Col>
						<Col md={12}>
							<Button
								onClick={() => {
									handleModalClick();
								}}
								key={"xl"}
								colorScheme="telegram"
								leftIcon={<FaPlusSquare />}
								isFullWidth
								size="lg"
								mt="1rem"
							>
								Ekle
							</Button>
						</Col>
					</Row>
				</Popup>
			</Marker>
			<AddAidModal onClose={onClose} isOpen={isOpen} />
		</>
	);
}

export default LocationMarker;
