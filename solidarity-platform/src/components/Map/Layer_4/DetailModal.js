import React, { useEffect, useState } from "react";
import "./DetailModal.scss";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
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
const labels = {
	0.5: "Normal",
	1: "Normal",
	1.5: "Normal",
	2: "Normal",
	2.5: "Normal",
	3: "Acil",
	3.5: "Acil",
	4: "Acil",
	4.5: "Çok Acil",
	5: "Çok Acil",
};
const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
	},
});

function DetailModal({ isOpen, onOpen, onClose }) {
	const [images, setImages] = useState([]);
	const detailContent = useSelector((state) => state.detailContent);
	useEffect(() => {
		detailContent.aidImgSrc.map((img) =>
			setImages((curr) => [
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
												<strong>Yardım Numarası : </strong>
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
															<div className={classes.root}>
																<Row
																	style={{
																		display: "flex",
																		alignItems: "center",
																	}}
																>
																	<Col md={8}>
																		<Rating
																			name="hover-feedback"
																			value={
																				detailContent.aidEmercenyLevel
																					? detailContent.aidEmercenyLevel
																					: 5
																			}
																			precision={0.5}
																			readOnly
																		/>
																	</Col>
																	{value !== null && (
																		<Col md={4}>
																			{detailContent.aidEmercenyLevel
																				? labels[detailContent.aidEmercenyLevel]
																				: labels[5]}
																		</Col>
																	)}
																</Row>
															</div>
														</Col>
													) : null}
													{!voteDisplay && (
														<Col md={4}>
															<Button
																colorScheme="teal"
																onClick={() => setVoteDisplay(!voteDisplay)}
																size="sm"
															>
																Oyla
															</Button>
														</Col>
													)}
													{voteDisplay && (
														<div className={classes.root}>
															<Col md={12}>
																<Row
																	style={{
																		display: "flex",
																		alignItems: "center",
																	}}
																>
																	<Col md={8}>
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
																		<Col md={4}>
																			{
																				labels[
																					hover !== -1
																						? hover
																						: detailContent.aidEmercenyLevel
																				]
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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
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
