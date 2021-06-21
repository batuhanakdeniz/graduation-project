import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../mapStyle.scss";
import styled from "styled-components";
import { useMap, useMapEvents } from "react-leaflet";

const MyCard = styled.div`
	background: ${(props) => (props.color ? props.color : "white")};
	margin-bottom: 0.5rem;
	border-style: solid;
	border-width: 0.1rem;
	border-radius: 1rem;
	border-color: rgb(33, 6, 95);
	color: ${(props) =>
		props.color === "black" || props.color === "red" || props.color === "purple"
			? "white"
			: "black"};
	padding: 1rem;
	button {
		margin-top: 2rem;
	}
	.cardInfos {
	}
	.cardHeader {
		font-weight: bolder;
	}
`;

function AidCard({ aid }) {
	console.log("last", aid);
	const parentMap = useMap();
	const gotoAidHandler = (
		lat = 41.020835883676874,
		lng = 28.657279014587406
	) => {
		parentMap.setView([lat, lng]);
	};

	const SearchDetailHandler = () => {
		console.log("detay gelecek");
	};
	return (
		<Col>
			<MyCard
				color={
					aid.emergencyLevel && aid.emergencyLevel >= 5
						? aid.emergencyLevel > 4
							? "black"
							: aid.emergencyLevel <= 3
							? "purple"
							: "red"
						: aid.emergencyLevel <= 1
						? "green"
						: "orange"
				}
			>
				<Row>
					<Col md={8}>
						<div className="cardHeader">{aid.header && aid.header}</div>
						<div className="cardHeader">{aid.detail && aid.detail}</div>
						{aid.emergencyLevel && (
							<div className="cardInfos">
								Emergency Level : aid.emergencyLevel.level
							</div>
						)}
					</Col>
					<Col md={4}>
						<Row>
							<Col>
								<Button onClick={() => gotoAidHandler(aid.lat, aid.lng)}>
									Git
								</Button>
							</Col>
							<Col>
								<Button onClick={() => SearchDetailHandler()}>Detay</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</MyCard>
		</Col>
	);
}

export default AidCard;
