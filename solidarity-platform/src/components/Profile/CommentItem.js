import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Row, Card, Col, Image } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import DetailModal from "../Map/Layer_4/DetailModal";
import { useDispatch } from "react-redux";
import { fetchDetailContent } from "../../redux";
import { useDisclosure } from "@chakra-ui/react";
import blank_avatar from "./blank-avatar.svg";
function LoggedUserCommentItem(props) {
	const { Comment, userName } = props;

	const dispatch = useDispatch();
	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages([]);
		Comment.extraImages &&
			Comment.extraImages.map((img) =>
				setImages((curr) => [
					...curr,
					{
						original: img.src,
						thumbnail: img.src,
					},
				])
			);
	}, [Comment]);
	const commentDetailButtonHandler = () => {
		onOpen();
		dispatch(fetchDetailContent(Comment.help_id));
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const confirmCommentHandler = () => {
		console.log("sefa");
	};
	const deleteCommentHandler = () => {
		console.log("sefa");
	};
	return (
		<Col className="pendingComment">
			<Card border="black">
				<Card.Header className="text-center">
					{Comment.createdAt} Tarihinde Eklendi
				</Card.Header>
				<Row style={{ marginLeft: "0rem", marginRight: "0rem" }}>
					<Col md={5} className="aidImg">
						<Row>
							<Col md={12}>
								<Row>
									<Col md={6} className="property" style={{ height: "5rem" }}>
										<Image
											src={
												Comment.userProfilPicture
													? Comment.userProfilPicture
													: blank_avatar
											}
											alt=""
											roundedCircle
										/>
									</Col>
									{userName && (
										<Col md={6} className="property">
											<span className="key">Username </span>
											<span className="value">{userName}</span>
										</Col>
									)}
								</Row>
							</Col>
							{images.length > 0 && (
								<Col md={12}>
									<ImageGallery items={images} thumbnail />
								</Col>
							)}
						</Row>
					</Col>
					<Col md={7} style={{ paddingLeft: "2rem" }}>
						<Card.Body>
							<Row>
								<Col md={12} className="property">
									<span className="key">Yorum </span>
									<span className="value">{Comment.text}</span>
								</Col>
							</Row>
						</Card.Body>
					</Col>
				</Row>

				<Card.Footer
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button
						colorScheme="teal"
						ml="1rem"
						onClick={() => confirmCommentHandler()}
					>
						<GiCheckMark />
					</Button>
					<Button
						colorScheme="blackAlpha"
						ml="1rem"
						onClick={() => commentDetailButtonHandler()}
					>
						<CgDetailsMore />
						<DetailModal onClose={onClose} isOpen={isOpen} />
					</Button>
					<Button
						colorScheme="warningRed"
						ml="1rem"
						onClick={() => deleteCommentHandler()}
					>
						<FaTrashAlt />
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default LoggedUserCommentItem;
