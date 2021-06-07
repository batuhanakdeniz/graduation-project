import { Button } from "@chakra-ui/button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
function PendingAid(props) {
	const { aid } = props;
	const thisAidData = {
		aidNo: aid.aidNo,
		person: aid.personName,
		personLastname: aid.personLastName,
		Emergency: aid.emergencyLevel,
		img: aid.img,
		comments: aid.comments,
	};

	return (
		<Col className="pendingAid">
			<Card border="light">
				<Card.Header>{thisAidData.aidNo}</Card.Header>
				<ImageGallery items={thisAidData.img} thumbnail />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
				<Card.Footer
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button colorScheme="teal" ml="1rem">
						<GiCheckMark />
					</Button>
					<Button colorScheme="blackAlpha" ml="1rem">
						<CgDetailsMore />
					</Button>
					<Button colorScheme="warningRed" ml="1rem">
						<FaTrashAlt />
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default PendingAid;
