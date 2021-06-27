import React from "react";
import { Col, Row } from "react-bootstrap";
import "../mapStyle.scss";
import styled from "styled-components";
import { useMap } from "react-leaflet";
import { Button } from "@chakra-ui/react";
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
	.cardInfos {
	}
	.cardHeader {
		font-weight: bolder;
	}
`;

function AidCard({ aid }) {
	const parentMap = useMap();
	const gotoAidHandler = (
		lat = 41.020835883676874,
		lng = 28.657279014587406
	) => {
		parentMap.setView([lat, lng]);
	};
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const detailModalHandler = () => {
		dispatch(fetchDetailContent(aid._id));
		console.log("aidID", aid._id);
	};
	const handleModalClick = () => {
		onOpen();
	};
	return (
		<Col
			style={{
				height: "97%",
			}}
		>
			<MyCard
				color={
					aid.emergencyLevel &&
					aid.emergencyLevel.level &&
					aid.emergencyLevel.level >= 5
						? aid.emergencyLevel &&
						  aid.emergencyLevel.level &&
						  aid.emergencyLevel.level > 4
							? "black"
							: aid.emergencyLevel &&
							  aid.emergencyLevel.level &&
							  aid.emergencyLevel.level <= 3
							? "purple"
							: "red"
						: aid.emergencyLevel &&
						  aid.emergencyLevel.level &&
						  aid.emergencyLevel.level <= 1
						? "green"
						: "orange"
				}
			>
				<Row
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Col md={9}>
						<div className="cardHeader">{aid.header && aid.header}</div>
						<div className="cardHeader">{aid.detail && aid.detail}</div>
						{aid.emergencyLevel && (
							<div className="cardInfos">
								Emergency Level : aid.emergencyLevel.level
							</div>
						)}
					</Col>
					<Col
						md={3}
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Row>
							<Col
								md={12}
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Button
									mt="1rem"
									size="lg"
									colorScheme="teal"
									onClick={() => gotoAidHandler(aid.lat, aid.lng)}
								>
									<FaLocationArrow />
								</Button>
							</Col>
							<Col
								md={12}
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Button
									colorScheme="blackAlpha"
									mt="1rem"
									size="lg"
									onClick={() => {
										handleModalClick();
										detailModalHandler();
									}}
								>
									<CgDetailsMore />
									<DetailModal onClose={onClose} isOpen={isOpen} />
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</MyCard>
		</Col>
	);
}

export default AidCard;
