import React from "react";
import { Popup } from "react-leaflet";
import {
	Col,
	Row,
	Container,
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailContent, fetchPopupContent } from "../../../redux";
import { useDisclosure } from "@chakra-ui/hooks";
import DetailModal from "../Layer_4/DetailModal";
import { Button } from "@chakra-ui/button";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import labels from "./labels";

const useStyles = makeStyles({
	root: {
		marginTop: "0.2rem",
	},
});
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function AidPopUp({ aidId }) {
	const popupContent = useSelector((state) => state.popupContent);
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

	const classes = useStyles();
	return (
		<>
			<Popup onOpen={popUpHandler} className="request-popup">
				<Container style={{ maxHeight: "60rem", padding: "0.5rem" }}>
					<Card style={{ width: "100%", height: "100%" }}>
						<div className="cardImage">
							<Card.Img
								variant="top"
								src={"http://localhost:5000/upload/" + popupContent.aidImgSrc}
								style={{ height: "100%" }}
								alt=""
							/>
						</div>

						<Card.Body className="mb-0">
							<Card.Title className="mb-0 text-center font-weight-bold">
								{capitalizeFirstLetter(popupContent.aidHeader)}
							</Card.Title>
						</Card.Body>
						<Card.Subtitle className="ml-4 mb-2 text-muted">
							<strong>Önem Derecesi</strong>
							{popupContent.aidEmercenyLevel && popupContent ? (
								<div className={classes.root}>
									<Row
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Col
											md={6}
											style={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<Rating
												name="hover-feedback"
												value={popupContent.aidEmercenyLevel.level}
												precision={0.5}
												readOnly
											/>
											{popupContent.aidEmercenyLevel.voteNumber} kez oylandı
										</Col>
										<Col
											md={4}
											style={labels[popupContent.aidEmercenyLevel.level].style}
										>
											{labels[popupContent.aidEmercenyLevel.level].value}
										</Col>
									</Row>
								</div>
							) : null}
						</Card.Subtitle>
						<ListGroup className="list-group-flush">
							<ListGroupItem>
								<strong>Statü : </strong>
								{popupContent.statusForHelping !== undefined &&
								!popupContent.statusForHelping ? (
									<span>Yardım eden kimse yok</span>
								) : (
									popupContent.helpingUsers.map((helpingUser, idx) => (
										<span key={idx}>{helpingUser}</span>
									))
								)}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Ad : </strong>
								<span>{popupContent.aidName}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Soyadı : </strong>
								<span>{popupContent.aidSurname}</span>
							</ListGroupItem>
							<ListGroupItem>
								<Row md={1}>
									<Col>
										<strong>Yardım Kategorisi : </strong>
										<span>
											{popupContent.categoryName} -{" "}
											{popupContent.subcategoryName}
										</span>
									</Col>
								</Row>
							</ListGroupItem>
						</ListGroup>
						<Card.Body style={{ display: "flex", justifyContent: "center" }}>
							<Card.Link href="#" style={{ margin: "0rem", padding: "0rem" }}>
								<Button colorScheme="warningRed" size="sm">
									Rapor Et
								</Button>
							</Card.Link>
							<Card.Link href="#" style={{ margin: "0rem", padding: "0rem" }}>
								<Button
									onClick={() => {
										handleModalClick();
										detailModalHandler();
									}}
									colorScheme="teal"
									size="sm"
									ml="0.5rem"
								>
									Detayları Gör
								</Button>
								<DetailModal onClose={onClose} isOpen={isOpen} />
							</Card.Link>
							<Card.Link
								href={`/detail/${popupContent.aidId}`}
								style={{ margin: "0rem", padding: "0rem" }}
							>
								<Button colorScheme="twitter" size="sm" ml="0.5rem">
									Yardım Et
								</Button>
							</Card.Link>
						</Card.Body>
						<Card.Footer>
							<strong>{popupContent.createdAt}</strong> tarihinde{" "}
							<strong>{popupContent.createrUsername}</strong> tarafından eklendi
						</Card.Footer>
					</Card>
				</Container>
			</Popup>
		</>
	);
}

export default AidPopUp;
