import React, { useEffect, useState } from "react";
import { Popup } from "react-leaflet";
import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailContent, fetchPopupContent } from "../../../redux";
import { useDisclosure } from "@chakra-ui/hooks";
import DetailModal from "../Layer_4/DetailModal";
import VoteAid from "../Layer_4/VoteAid";
import { Button } from "@chakra-ui/button";
import Rating from "react-rating";
import starGreen from "../assets/star-regular.svg";
function AidPopUp({ aidId }) {
	const popupContent = useSelector((state) => state.popupContent);
	const [voteDisplay, setVoteDisplay] = useState(false);
	const [emergencyLevel, setEmergencyLevel] = useState(0);
	const dispatch = useDispatch();

	const popUpHandler = () => {
		dispatch(fetchPopupContent(aidId));
	};

	const detailModalHandler = () => {
		dispatch(fetchDetailContent(aidId));
		console.log("aidID", aidId);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleModalClick = () => {
		onOpen();
	};

	useEffect(() => {
		setVoteDisplay(false);
		setEmergencyLevel(parseInt(popupContent.aidEmercenyLevel));
		console.log("emerg", typeof emergencyLevel);
	}, []);
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	return (
		<>
			<Popup onOpen={popUpHandler} className="request-popup">
				<Container style={{ maxHeight: "30rem" }}>
					<Row>
						<Col md={12} className="popupHeader">
							<span>{popupContent.aidHeader}</span>
						</Col>
					</Row>
					<Row>
						<Col md={12} className="popupImg">
							<Image
								src={"http://localhost:5000/upload/" + popupContent.aidImgSrc}
								alt=""
							/>
						</Col>
					</Row>
					<Row className="popupBody">
						<Col md={6} className="key">
							<span>Ad : </span>
						</Col>
						<Col md={6} className="value">
							<span>{popupContent.aidName}</span>
						</Col>
						<Col md={6} className="key">
							<span>Soyadı : </span>
						</Col>
						<Col md={6} className="value">
							<span>{popupContent.aidSurname}</span>
						</Col>
						<Col md={12} className="key">
							<span>Önem Derecesi </span>
						</Col>
						<Col md={12} className="value">
							<Rating
								initialRating={popupContent.aidEmercenyLevel}
								readonly
								onChange={(e) => console.log(e)}
								emptySymbol={<img src={starGreen} className="icon" alt="" />}
								fullSymbol={<img src={starGreen} className="icon" alt="" />}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Button colorScheme="warningRed" m="0px">
								Rapor Et
							</Button>
						</Col>
						<Col md={4}>
							<Button
								onClick={() => {
									handleModalClick();
									detailModalHandler();
								}}
								colorScheme="teal"
							>
								Detayları Gör
							</Button>
							<DetailModal onClose={onClose} isOpen={isOpen} />
						</Col>
						<Col md={4}>
							<Link to={`/detail/${popupContent.aidId}`}>
								<Button colorScheme="twitter">Yardım Et</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</Popup>
		</>
	);
}

export default AidPopUp;
