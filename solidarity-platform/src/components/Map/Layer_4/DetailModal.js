import React, { useEffect, useState } from "react";
import "./DetailModal.scss";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import CommentComponent from "../Layer_5/CommentComponent";

import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { fetchDetailContent } from "../../../redux";
import labels from "../Layer_3/labels";

const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
	},
});

function DetailModal({ isOpen, onOpen, onClose }) {
	const [images, setImages] = useState([]);
	const dispatch = useDispatch();
	const detailContent = useSelector((state) => state.detailContent);
	useEffect(() => {
		setImages([]);
		detailContent.aidImgSrc.map((img) =>
			setImages((curr) => [
				...curr,
				{
					original: `http://localhost:5000/upload/${img.filename}`,
					thumbnail: `http://localhost:5000/upload/${img.filename}`,
				},
			])
		);
	}, [detailContent]);
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);
	const [voteDisplay, setVoteDisplay] = useState(false);
	const voteSubmitHandler = () => {
		setVoteDisplay(!voteDisplay);
		console.log("value", value);
		const vote = {
			value: value,
		};
		axios
			.put(
				`http://localhost:5000/map/api/helps/emergencyLevel/${detailContent.aidId}`,
				vote
			)
			.then((res) => {
				dispatch(fetchDetailContent(detailContent.aidId));
				console.log("vote res", res);
			})
			.catch((err) => console.log("vote err", err));
	};
	const classes = useStyles();
	return (
		<div>
			<Modal
				scrollBehavior="inside"
				onClose={onClose}
				size={"5xl"}
				isOpen={isOpen}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Detay</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Card>
							<Card.Body className="detailCard">
								<Row>
									<Col md={12} className="text-center">
										<Card.Title style={{ fontSize: "xx-large" }}>
											{detailContent.aidHeader}
										</Card.Title>
									</Col>
								</Row>
								<Row>
									<Col
										md={6}
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<ImageGallery items={images} />;
									</Col>
									<Col md={6}>
										<ListGroup className="list-group-flush">
											<ListGroupItem>
												<strong>Yardım Kodu : </strong>
												{detailContent.aidNo}
											</ListGroupItem>
											<ListGroupItem>
												<strong>Adı : </strong>
												{detailContent.aidName}
											</ListGroupItem>
											<ListGroupItem>
												<strong>Soyadı : </strong>
												{detailContent.aidSurname}
											</ListGroupItem>
											<ListGroupItem>
												<Row>
													{!voteDisplay ? (
														<Col md={12}>
															<strong>Önem Derecesi </strong>
														</Col>
													) : (
														<Col md={12}>
															<strong>Lütfen Oylayın </strong>
														</Col>
													)}
													{!voteDisplay && detailContent ? (
														<Col md={12}>
															<Row>
																{detailContent &&
																	detailContent.aidEmergencyLevel &&
																	detailContent.aidEmergencyLevel.level && (
																		<>
																			<Col
																				md={5}
																				style={{
																					display: "flex",
																					flexDirection: "column",
																				}}
																			>
																				<Rating
																					name="hover-feedback"
																					value={
																						detailContent.aidEmergencyLevel
																							.level
																					}
																					precision={0.5}
																					readOnly
																				/>
																				{
																					detailContent.aidEmergencyLevel
																						.voteNumber
																				}{" "}
																				kez oylandı
																			</Col>
																			<Col
																				md={3}
																				style={
																					labels[
																						Math.round(
																							detailContent.aidEmergencyLevel
																								.level
																						)
																					].style
																				}
																			>
																				{
																					labels[
																						Math.round(
																							detailContent.aidEmergencyLevel
																								.level
																						)
																					].value
																				}
																			</Col>
																			{!voteDisplay && (
																				<Col md={4}>
																					<Button
																						colorScheme="teal"
																						variant="outline"
																						onClick={() =>
																							setVoteDisplay(!voteDisplay)
																						}
																						size="md"
																					>
																						Oyla
																					</Button>
																				</Col>
																			)}
																		</>
																	)}
															</Row>
														</Col>
													) : null}

													{voteDisplay && (
														<div className={classes.root}>
															<Col md={12}>
																<Row
																	style={{
																		display: "flex",
																		alignItems: "center",
																	}}
																>
																	<Col md={7}>
																		<Rating
																			name="hover-feedback"
																			value={value}
																			precision={0.5}
																			onChange={(event, newValue) => {
																				setValue(newValue);
																			}}
																			onChangeActive={(event, newHover) => {
																				setHover(newHover);
																			}}
																		/>
																	</Col>
																	{value !== null && (
																		<Col md={5}>
																			{
																				labels[
																					hover !== -1
																						? hover
																						: Math.round(
																								detailContent.aidEmergencyLevel
																									.level
																						  )
																				].value
																			}
																		</Col>
																	)}
																	<Col md={11}>
																		<Button
																			colorScheme="teal"
																			onClick={voteSubmitHandler}
																			size="sm"
																			isFullWidth
																		>
																			Onayla ve Kapat
																		</Button>
																	</Col>
																	<Col md={1}>
																		<Button
																			colorScheme="warningRed"
																			onClick={() =>
																				setVoteDisplay(!voteDisplay)
																			}
																			size="sm"
																		>
																			X
																		</Button>
																	</Col>
																</Row>
															</Col>
														</div>
													)}
												</Row>
											</ListGroupItem>
											<ListGroupItem>
												<strong>Detay : </strong>
												{detailContent.aidDetail}
											</ListGroupItem>
										</ListGroup>
									</Col>
								</Row>
							</Card.Body>
							<Card.Body>
								<CommentComponent
									Comments={detailContent.comments}
									aidID={detailContent.aidId}
								/>
							</Card.Body>
						</Card>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default DetailModal;

/* 

*/

/*

*/

/*


*/
