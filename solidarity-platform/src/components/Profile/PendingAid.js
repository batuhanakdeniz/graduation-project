import { Button } from "@chakra-ui/button";
import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { fetchDetailContent } from "../../redux";
import { useDisclosure } from "@chakra-ui/react";
import DetailModal from "../Map/Layer_4/DetailModal";

function PendingAid(props) {
	const { aid } = props;
	const dispatch = useDispatch();
	const thisAidData = {
		aidNo: aid.aidNo,
		person: aid.personName,
		personLastname: aid.personLastName,
		emergencyLevel: aid.emergencyLevel,
		img: aid.img,
		comments: aid.comments,
	};
	const aidDetailButtonHandler = () => {
		onOpen();
		dispatch(fetchDetailContent(aid.aidID));
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const confirmAidHandler = () => {
		console.log("sefa");
	};
	const deleteAidHandler = () => {
		console.log("sefa");
	};
	return (
		<Col className="pendingAid">
			<Card border="black">
				<Card.Header className="text-center">{thisAidData.aidNo}</Card.Header>
				<Row style={{ marginLeft: "0rem", marginRight: "0rem" }}>
					<Col md={6} className="aidImg">
						<ImageGallery items={thisAidData.img} thumbnail />
					</Col>
					<Col md={6} style={{ paddingLeft: "2rem" }}>
						<Card.Body>
							<Row>
								<Col md={12} className="property">
									<span className="key">Ad : </span>
									<span className="value">{thisAidData.person}</span>
								</Col>
								<Col md={12} className="property">
									<span className="key">Soyadı : </span>
									<span className="value">{thisAidData.personLastname}</span>
								</Col>
								<Col md={12} className="property">
									<span className="key">Önem Derecesi : </span>
									<span className="value">
										{thisAidData.emergencyLevel.level}
									</span>
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
						onClick={() => confirmAidHandler()}
					>
						<GiCheckMark />
					</Button>

					<Button
						colorScheme="blackAlpha"
						ml="1rem"
						onClick={() => aidDetailButtonHandler()}
					>
						<CgDetailsMore />
						<DetailModal onClose={onClose} isOpen={isOpen} />
					</Button>
					<Button
						colorScheme="warningRed"
						ml="1rem"
						onClick={() => deleteAidHandler()}
					>
						<FaTrashAlt />
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default PendingAid;
