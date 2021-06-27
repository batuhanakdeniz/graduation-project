import React from "react";
import { Col, Row } from "react-bootstrap";
import "../mapStyle.scss";
import styled from "styled-components";
import { useMap } from "react-leaflet";
import { Button, Text } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { fetchDetailContent } from "../../../redux";
import DetailModal from "./DetailModal";
const MyCard = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 2rem;
	margin: 0;
	.cardHeader {
		font-weight: bolder;
	}
`;

function LocationCard({ location }) {
	const parentMap = useMap();
	const gotoAidHandler = (
		lat = 41.020835883676874,
		lng = 28.657279014587406
	) => {
		parentMap.flyTo([lat, lng], 13, {
			animate: true,
			duration: 2, // in seconds
		});
	};

	return (
		<>
			<Text ml="2rem" fontSize="x-large">
				{location && location.city && location.city}
			</Text>
			<Button
				size="sm"
				ml="2rem"
				colorScheme="teal"
				onClick={() => gotoAidHandler(location.lat, location.lng)}
			>
				<FaLocationArrow />
			</Button>
		</>
	);
}

export default LocationCard;
