import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import greenMarker from "../assets/free-map-marker-icon-green.png";
import redMarker from "../assets/free-map-marker-icon-red.png";
import orangeMarker from "../assets/free-map-marker-icon-orange.png";
import darkMarker from "../assets/free-map-marker-icon-dark.png";
import pinkMarker from "../assets/free-map-marker-icon-pink.png";
import AidPopUp from "../Layer_3/AidPopup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAidLocations } from "../../../redux";
import { LayersControl, LayerGroup } from "react-leaflet";
function ShowAids() {
	const greenIcon = L.icon({
		iconUrl: greenMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});
	const darkIcon = L.icon({
		iconUrl: darkMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});
	const pinkIcon = L.icon({
		iconUrl: pinkMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});
	const orangeIcon = L.icon({
		iconUrl: orangeMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});
	const redIcon = L.icon({
		iconUrl: redMarker,
		iconSize: [50, 50],
		iconAnchor: [12.5, 41],
		popupAnchor: [0, -41],
	});

	const aidLocations = useSelector((state) => state.aidLocations);
	const [darkAids, setDarkAids] = useState([]);
	const [redAids, setRedAids] = useState([]);
	const [pinkAids, setPinkAids] = useState([]);
	const [orangeAids, setOrangeAids] = useState([]);
	const [greenAids, setGreenAids] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAidLocations());

		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		setDarkAids(aidLocations.locations.filter((aid) => aid.emergencyLevel > 4));
		setRedAids(
			aidLocations.locations.filter(
				(aid) => aid.emergencyLevel > 3 && aid.emergencyLevel <= 4
			)
		);
		setPinkAids(
			aidLocations.locations.filter(
				(aid) => aid.emergencyLevel > 2 && aid.emergencyLevel <= 3
			)
		);
		setOrangeAids(
			aidLocations.locations.filter(
				(aid) => aid.emergencyLevel > 1 && aid.emergencyLevel <= 2
			)
		);
		setGreenAids(
			aidLocations.locations.filter((aid) => aid.emergencyLevel <= 1)
		);
	}, [aidLocations]);

	return (
		<div>
			<LayersControl position="bottomright">
				{darkAids !== [] ? (
					<LayersControl.Overlay checked name="Dark Marker">
						<LayerGroup>
							{darkAids.map((aid) => (
								<Marker
									key={aid._id}
									position={[aid.lat, aid.lng]}
									icon={darkIcon}
								>
									<AidPopUp aidId={aid._id} />
								</Marker>
							))}
						</LayerGroup>
					</LayersControl.Overlay>
				) : null}
				{redAids !== [] ? (
					<LayersControl.Overlay checked name="Red Marker">
						<LayerGroup>
							{redAids.map((aid) => (
								<Marker
									key={aid._id}
									position={[aid.lat, aid.lng]}
									icon={redIcon}
								>
									<AidPopUp aidId={aid._id} />
								</Marker>
							))}
						</LayerGroup>
					</LayersControl.Overlay>
				) : null}
				{pinkAids !== [] ? (
					<LayersControl.Overlay checked name="Pink Marker">
						<LayerGroup>
							{pinkAids.map((aid) => (
								<Marker
									key={aid._id}
									position={[aid.lat, aid.lng]}
									icon={pinkIcon}
								>
									<AidPopUp aidId={aid._id} />
								</Marker>
							))}
						</LayerGroup>
					</LayersControl.Overlay>
				) : null}
				{orangeAids !== [] ? (
					<LayersControl.Overlay checked name="Orange Marker">
						<LayerGroup>
							{orangeAids.map((aid) => (
								<Marker
									key={aid._id}
									position={[aid.lat, aid.lng]}
									icon={orangeIcon}
								>
									<AidPopUp aidId={aid._id} />
								</Marker>
							))}
						</LayerGroup>
					</LayersControl.Overlay>
				) : null}
				{greenAids !== [] ? (
					<LayersControl.Overlay checked name="Green Marker">
						<LayerGroup>
							{greenAids.map((aid) => (
								<Marker
									key={aid._id}
									position={[aid.lat, aid.lng]}
									icon={greenIcon}
								>
									<AidPopUp aidId={aid._id} />
								</Marker>
							))}
						</LayerGroup>
					</LayersControl.Overlay>
				) : null}
			</LayersControl>
		</div>
	);
}

export default ShowAids;
