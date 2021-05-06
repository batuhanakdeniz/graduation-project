import React, { createRef, useEffect, useRef, useState } from "react";
import L from "leaflet";
import {
	MapContainer,
	TileLayer,
	LayersControl,
	LayerGroup,
	MapConsumer,
	ZoomControl,
	useMap,
	useMapEvents,
} from "react-leaflet";
import "../mapStyle.scss";
import addAidMarker from "../assets/free-map-marker-icon-blue.png";

import { Col, Row } from "react-bootstrap";
import LocationMarker from "../Layer_2/LocationMarker";
import ShowAids from "../Layer_2/ShowAids";
//import DrawerExample from './Drawer'
import { AddButton } from "../Layer_2/AddButton";
import { Search } from "../Layer_2/SearchComponent";
import { useSelector } from "react-redux";
import { FlyToLocationButton } from "../Layer_2/FlyToLocationButton";
//import { Button } from '@chakra-ui/react'

function MapComponent({ match }) {
	const [zoom, setZoom] = useState(17);

	const mapCenter = useSelector((state) => state.userLocation);

	const [mapmod, setMapmod] = useState(false);

	const addAidIcon = L.icon({
		iconUrl: addAidMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});

	return (
		<div>
			<Row>
				<Col sm={12} md={12}>
					<MapContainer
						className="map-container"
						center={[mapCenter.lng, mapCenter.lat]}
						zoom={zoom}
						zoomControl={false}
						scrollWheelZoom={false}
						whenCreated={(map) => {
							map.locate();
							// do whatever makes sense. I've set it to a ref
						}}
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<ZoomControl position="topright" zoomInText="➕" zoomOutText="➖" />
						<Search />
						<AddButton
							position="bottomleft"
							eventKey={mapmod}
							setMapmod={setMapmod}
							mapmod={mapmod}
						/>
						<FlyToLocationButton position="bottomright" />
						{mapmod ? <LocationMarker icon={addAidIcon} /> : <ShowAids />}
					</MapContainer>
				</Col>
			</Row>
		</div>
	);
}

export default MapComponent;
