import React, { useState } from "react";
import L from "leaflet";
import {
	FeatureGroup,
	LayersControl,
	MapContainer,
	TileLayer,
	ZoomControl,
} from "react-leaflet";
import "../mapStyle.scss";
import addAidMarker from "../assets/free-map-marker-icon-blue.png";

import { Col, Row } from "react-bootstrap";
import LocationMarker from "../Layer_2/LocationMarker";
import ShowAids from "../Layer_2/ShowAids";
import { AddButton } from "../Layer_2/AddButton";
import { Search } from "../Layer_2/SearchComponent";
import { useSelector } from "react-redux";
import { FlyToLocationButton } from "../Layer_2/FlyToLocationButton";

function MapComponent({ match }) {
	//eslint-disable-next-line
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
						<LayersControl position="topright">
							<LayersControl.Overlay name="Feature group">
								<FeatureGroup pathOptions={{ color: "purple" }}>
									<ZoomControl position="bottomright" />
									<Search />
									<AddButton
										position="bottomleft"
										eventKey={mapmod}
										setMapmod={setMapmod}
										mapmod={mapmod}
									/>
									<FlyToLocationButton />
									{mapmod ? <LocationMarker icon={addAidIcon} /> : <ShowAids />}
								</FeatureGroup>
							</LayersControl.Overlay>
						</LayersControl>
					</MapContainer>
				</Col>
			</Row>
		</div>
	);
}

export default MapComponent;
