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
`;

function AidCard({ aid }) {
	const parentMap = useMap();
	const gotoAidHandler = (
		lat = 41.020835883676874,
		lng = 28.657279014587406
	) => {
		parentMap.flyTo([lat, lng], 16, {
			animate: true,
			duration: 2, // in seconds
		});
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
			<MyCard>
				<Row
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Col md={9}>
						<div>
							<strong>Yardım Başlığı : </strong> {aid.header && aid.header}
						</div>
						<hr
							style={{
								width: "100%",
								borderWidth: "2px",
								textAlign: "left",
								backgroundColor: "gray",
								marginTop: "0.2rem",
								marginBottom: "0.2rem",
							}}
						/>
						<div>
							<strong>Yardım Detayı : </strong> {aid.detail && aid.detail}
						</div>
						<hr
							style={{
								width: "100%",
								borderWidth: "2px",
								textAlign: "left",
								backgroundColor: "gray",
								marginTop: "0.2rem",
								marginBottom: "0.2rem",
							}}
						/>

						{aid.emergencyLevel && (
							<div className="cardInfos">
								<strong>Önem Derecesi : </strong> {aid.emergencyLevel.level}
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
