import React, { useState } from "react";
import "./DetailModal.scss";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { Feed } from "semantic-ui-react";
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
	Divider,
} from "@chakra-ui/react";
import AddComment from "../FourthLayer/AddComment";
const ImageSection = styled.div`
	min-height: 10rem;
	border-radius: 1rem;
	background-color: rgba(69, 147, 86, 0.743636);
	padding: 1rem;
	img {
		margin-bottom: 1rem;
	}
	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
		font-weight: bold;
	}
`;

const InfoSection = styled.div`
	min-height: 10rem;
	border-radius: 1rem;
	background-color: rgba(69, 147, 86, 0.743636);
	padding: 1rem;
	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
		font-weight: bold;
	}
`;
const CommentSection = styled.div`
	min-height: 10rem;
	border-radius: 1rem;
	background-color: rgba(69, 147, 86, 0.743636);
	padding: 2rem;
	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
		font-weight: bold;
	}
	margin-bottom: 1rem;
`;

function DetailModal({ isOpen, onOpen, onClose }) {
	const detailContent = useSelector((state) => state.detailContent);
	const [displayAddComment, setDisplayAddComment] = useState(false);
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
						<Container>
							<br />
							<Row xs={1} md={2}>
								<Col>
									<ImageSection>
										<Row>
											<Col md={12}>
												<h1>Images</h1>
											</Col>
											<Col md={12}>
												<ImageGallery items={detailContent.aidImgSrc} />;
											</Col>
										</Row>
									</ImageSection>
								</Col>
								<Col>
									<InfoSection>
										<h1> Aid Header : {detailContent.aidHeader} </h1>
										<p> Aid No : {detailContent.aidNo} </p>
										<p> Person Name : {detailContent.aidName} </p>
										<p> Person Surname : {detailContent.aidSurname} </p>
										<p>
											{" "}
											Person EmergencyLevel : {
												detailContent.aidEmercenyLevel
											}{" "}
										</p>
										<Divider />
										<h1> Aid detail :</h1>
										<p>{detailContent.aidDetail} </p>
									</InfoSection>
								</Col>
							</Row>
							<br />
							<Row>
								<Col>
									<CommentSection>
										<Row>
											<Col md={12}>
												<h1>Comments</h1>
											</Col>
											<Col md={12}>
												<Feed events={detailContent.comments} />
											</Col>
											<Col md={12}>
												{
													!displayAddComment
													?<Button 
														onClick={()=>setDisplayAddComment(!displayAddComment)}
														ml="3rem"
														mt="0.5rem"
														variant="ghost"
														textColor="blue"
														textDecoration="underline"
														_hover={{background:"green.700"}}
													>Yorum Ekle</Button>
													:<AddComment setDisplayAddComment={setDisplayAddComment} displayAddComment={displayAddComment} />
												}												
											</Col>
										</Row>
									</CommentSection>
								</Col>
							</Row>
						</Container>
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
