import React, {  createRef, useEffect, useRef, useState } from "react";
import L from "leaflet";
import {
	MapContainer,
	TileLayer,
	LayersControl,
	LayerGroup,
	MapConsumer,
	ZoomControl,
	useMap,
	useMapEvents
} from "react-leaflet";
import "../mapStyle.scss";
import addAidMarker from "../assets/free-map-marker-icon-blue.png";

import { Col, Row } from "react-bootstrap";
import LocationMarker from "../FirstLayer/LocationMarker";
import ShowAids from "../FirstLayer/ShowAids";
//import DrawerExample from './Drawer'
import { AddButton } from "../FirstLayer/AddButton";
import { Search } from "../FirstLayer/SearchComponent";
import {  useSelector } from "react-redux";
import { FlyToLocationButton } from "../FirstLayer/FlyToLocationButton";

//import { Button } from '@chakra-ui/react'



function MapComponent({ match }) {
	const [zoom, setZoom] = useState(17);

	const mapCenter = useSelector(state => state.userLocation)

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
						center={[mapCenter.lng,mapCenter.lat] }
						zoom={zoom}
						zoomControl={false}
						scrollWheelZoom={false}
						whenCreated={map => {
							map.locate();
							// do whatever makes sense. I've set it to a ref
							}}
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<ZoomControl position="topright" />
						<Search />
						<AddButton
							position="bottomleft"
							eventKey={mapmod}
							setMapmod={setMapmod}
							mapmod={mapmod}
						/>
						<FlyToLocationButton position="bottomright"/>
						{mapmod ? (
							<LocationMarker icon={addAidIcon} />
						) : (
							<LayersControl position="topright">
								<LayersControl.Overlay checked name="Layer group with Marker">
									<LayerGroup>
										<ShowAids />
									</LayerGroup>
								</LayersControl.Overlay>
							</LayersControl>
						)}
					</MapContainer>
				</Col>
			</Row>
		</div>
	);
}

export default MapComponent;
