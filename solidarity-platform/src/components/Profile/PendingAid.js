import { Button } from "@chakra-ui/button";
import React from "react";
import { Row, Card, Col } from "react-bootstrap";
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
		emergency: aid.emergencyLevel,
		img: aid.img,
		comments: aid.comments,
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
									<span className="value">{thisAidData.emergency}</span>
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
